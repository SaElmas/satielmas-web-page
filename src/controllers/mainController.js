const coursesData = require("../data/courses");
const tutoringSlider = require("../data/tutoringSlider");
const testimonials = require("../data/testimonials");
const programData = require("../data/programs");
const nodemailer = require("nodemailer");
const https = require("https");

const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");
const { marked } = require("marked");

// Markdown, LaTeX içindeki "\{", "\\" gibi kaçışları yutuyor ve "_", "*" karakterlerini
// vurgu sanabiliyor. Matematik bloklarında bunları marked'dan önce koruyoruz; kod blokları atlanır.
const protectMath = (markdown) =>
  markdown.replace(
    /(```[\s\S]*?```|`[^`\n]*`)|\$\$[\s\S]+?\$\$|\$[^$\n]+?\$/g,
    (segment, code) =>
      code
        ? segment
        : segment.replace(/\\([!-\/:-@\[-`{-~])|([_*])/g, (m, escaped, emphasis) =>
            escaped ? `\\\\\\${escaped}` : `\\${emphasis}`,
          ),
  );

exports.getHomePage = (req, res, next) => {
  res.render("index", {
    pageTitle: "Sait Elmas | Academic & Engineering",
  });
};

// Ana sayfadaki "Dersler ve Programlar" kartları: solda AP, IB ve SAT; sağda üniversite.
// Her kart kendi derslerine bağlantı verir.
const buildProgramColumns = (res) => {
  const lang = res.locals.currentLang;
  const courseLink = (slug) => ({
    title: coursesData[slug].title[lang] || coursesData[slug].title.en,
    href: res.locals.localUrl(`/tutoring/${slug}`),
  });
  const programCard = (key) => {
    const program = programData.programs[key];
    // Üniversite dersleri kategori başlıklarıyla (Matematik / Bilgisayar Bilimleri) gruplanır
    const groups = [];
    program.courses.forEach((slug) => {
      const label = key === "university" ? coursesData[slug].category[lang] : null;
      let group = groups.find((item) => item.label === label);
      if (!group) groups.push((group = { label, courses: [] }));
      group.courses.push(courseLink(slug));
    });
    return {
      title: program.title[lang],
      lead: program.lead[lang],
      href: res.locals.localUrl(`/${program.slug[lang]}`),
      groups,
      also: (program.also && program.also[lang]) || [],
      alsoLabel: programData.labels[lang].also,
    };
  };
  return [[programCard("ap"), programCard("ib"), programCard("exams")], [programCard("university")]];
};

exports.getTutoringPage = (req, res, next) => {
  // Logosu public/img/logos/universities altında bulunan üniversiteler logolu gösterilir
  const logoDir = path.join(__dirname, "../../public/img/logos/universities");
  const universities = tutoringSlider.universities.map((university) => {
    const extension = ["svg", "png", "webp", "jpg"].find((ext) =>
      fs.existsSync(path.join(logoDir, `${university.slug}.${ext}`)),
    );
    return {
      ...university,
      logo: extension ? `/img/logos/universities/${university.slug}.${extension}` : null,
    };
  });

  res.render("tutoring", {
    pageTitle: res.__("titles.tutoring"),
    pageDescription: res.__("meta.tutoring"),
    universities,
    exams: tutoringSlider.exams,
    programColumns: buildProgramColumns(res),
    featuredReviews: testimonials.featured.map((number) => ({
      number,
      name: testimonials.reviewers[number - 1],
    })),
  });
};

exports.getContactPage = (req, res, next) => {
  res.render("contact", {
    pageTitle: res.__("titles.contact"),
    pageDescription: res.__("meta.contact"),
  });
};

exports.getCourseDetails = (req, res, next) => {
  const courseSlug = req.params.courseName;
  const courseInfo = coursesData[courseSlug];

  if (!courseInfo) {
    return res.redirect(res.locals.localUrl("/"));
  }

  const lang = res.locals.currentLang;
  const courseTitle = courseInfo.title[lang] || courseInfo.title.en;
  const courseDescription = String(courseInfo.description[lang] || courseInfo.description.en).replace(/<[^>]+>/g, "");
  const programKey = programData.programKeyForCourse(courseSlug);

  // Sınav derslerinin (AP, IB, SAT) rozeti varsa başlığın yanında gösterilir
  const badgeFile = path.join(__dirname, "../../public/img/logos/exams", `${courseSlug}.png`);

  res.render("course-detail", {
    pageTitle: `${courseTitle} ${res.__("course_detail.title_suffix")} | Sait Elmas`,
    pageDescription: courseDescription,
    course: courseInfo,
    programUrl: programKey
      ? res.locals.localUrl(`/${programData.programs[programKey].slug[lang]}`)
      : null,
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Course",
        name: courseTitle,
        description: courseDescription,
        inLanguage: ["tr", "en"],
        provider: { "@type": "Person", name: "Sait Elmas", url: SITE_URL },
        hasCourseInstance: { "@type": "CourseInstance", courseMode: "online" },
      },
    ],
    courseBadge: fs.existsSync(badgeFile) ? `/img/logos/exams/${courseSlug}.png` : null,
  });
};

// Notlar yalnızca İngilizce. /tr/notes/... altında çerçeve Türkçe, içerik aynı olduğu için
// arama motorlarına asıl sayfa olarak İngilizce adres gösterilir ve hreflang verilmez.
const englishOnlyPage = (req) => ({
  canonicalUrl: SITE_URL + req.path,
  hreflang: false,
});

exports.getNotesIndex = (req, res) => {
  res.render("notes", {
    pageTitle: res.__("titles.notes"),
    pageDescription: res.__("meta.notes"),
    ...englishOnlyPage(req),
    activeTopic: "index",
    nodeData: null
  });
};

exports.getNoteByTopic = (req, res) => {
  const requestedTopic = req.params.topic; // Örn: 'ap-computer-science-a'

  // Sadece İngilizce (_en.md) dosyasını okuyacak yol
  const notesDir = path.join(__dirname, "../data/notes");
  const filePath = path.join(notesDir, `${requestedTopic}_en.md`);


  let noteData = null;

  // Dosya var mı kontrol edip okuyoruz
  if (fs.existsSync(filePath)) {
    try {
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(fileContent);
      const htmlContent = marked.parse(protectMath(content));

      noteData = {
        title: data.title || requestedTopic,
        description: data.description,
        htmlBody: htmlContent,
      };
    } catch (err) {
      console.error("Markdown dosya okuma hatası:", err);
    }
  }

  // EJS şablonuna noteData'yı mutlaka gönderiyoruz
  // Not dosyası yoksa sayfa "bulunamadı" kutusunu gösterir; arama motorları için durum kodu da 404 olmalı
  res.status(noteData ? 200 : 404).render("notes", {
    pageTitle: noteData ? `${noteData.title} | Sait Elmas` : res.__("titles.notes"),
    pageDescription: (noteData && noteData.description) || res.__("meta.notes"),
    ...englishOnlyPage(req),
    activeTopic: requestedTopic,
    noteData: noteData, // <-- ReferenceError hatasını önleyen kritik parametre
  });
};
// DigitalOcean, Droplet'lerde SMTP portlarını (25/465/587) kapalı tuttuğu için canlıda mail
// Resend'in HTTPS API'si üzerinden gider. RESEND_API_KEY tanımlı değilse (ör. yerelde) Gmail SMTP kullanılır.
const sendViaResend = ({ name, email, message }) =>
  new Promise((resolve, reject) => {
    const body = JSON.stringify({
      from: process.env.RESEND_FROM || "saitelmas.com <onboarding@resend.dev>",
      to: [process.env.EMAIL_USER],
      reply_to: email,
      subject: `Web sitesi mesajı: ${name}`,
      text: `Gönderen: ${name} <${email}>\n\n${message}`,
    });
    const request = https.request(
      {
        hostname: "api.resend.com",
        path: "/emails",
        method: "POST",
        timeout: 10000,
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
          "Content-Length": Buffer.byteLength(body),
        },
      },
      (response) => {
        let data = "";
        response.on("data", (chunk) => (data += chunk));
        response.on("end", () => {
          if (response.statusCode >= 200 && response.statusCode < 300) return resolve();
          const error = new Error(`Resend ${response.statusCode}: ${data.slice(0, 300)}`);
          error.code = "ERESEND";
          reject(error);
        });
      },
    );
    request.on("timeout", () => request.destroy(Object.assign(new Error("Resend zaman aşımı"), { code: "ETIMEDOUT" })));
    request.on("error", reject);
    request.end(body);
  });

const sendViaGmailSmtp = ({ name, email, message }) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    // Sunucu SMTP portuna ulaşamıyorsa sayfa dakikalarca asılı kalmasın, 10 sn içinde hata dönsün
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 15000,
  });

  return transporter.sendMail({
    from: `"saitelmas.com" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    replyTo: { name, address: email },
    subject: `Web sitesi mesajı: ${name}`,
    text: `Gönderen: ${name} <${email}>\n\n${message}`,
  });
};

exports.sendContactEmail = async (req, res) => {
  // Başlık (header) enjeksiyonuna karşı satır sonlarını temizleyip uzunlukları sınırlıyoruz
  const clean = (value, max) => String(value || "").replace(/[\r\n]+/g, " ").trim().slice(0, max);
  const name = clean(req.body.name, 100);
  const email = clean(req.body.email, 200);
  const message = String(req.body.message || "").trim().slice(0, 5000);

  const renderContact = (result) =>
    res.render("contact", {
      pageTitle: res.__("titles.contact"),
      pageDescription: res.__("meta.contact"),
      ...result,
    });

  // Gizli "website" alanını yalnızca botlar doldurur; onlara mail atmadan başarı gösteriyoruz
  if (req.body.website) {
    return renderContact({ successMessage: res.__("contact_page.msg_success") });
  }

  if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return renderContact({ errorMessage: res.__("contact_page.msg_error") });
  }

  try {
    // Mail kendi adresimize gelir; "Yanıtla" denildiğinde ziyaretçiye gider
    if (process.env.RESEND_API_KEY) {
      await sendViaResend({ name, email, message });
    } else {
      await sendViaGmailSmtp({ name, email, message });
    }

    renderContact({ successMessage: res.__("contact_page.msg_success") });
  } catch (error) {
    // EAUTH = şifre hatalı, ETIMEDOUT/ESOCKET = sunucu mail servisine ulaşamıyor, ERESEND = Resend isteği reddetti
    console.error(
      "İletişim formu maili gönderilemedi:",
      error.code,
      error.message,
      "| yöntem:", process.env.RESEND_API_KEY ? "Resend" : "Gmail SMTP",
    );
    renderContact({ errorMessage: res.__("contact_page.msg_error") });
  }
};

// ==========================================
// DİNAMİK DİL FİLTRELİ OKUMALAR FONKSİYONU
// ==========================================
exports.getMyReadingsPage = (req, res) => {
  // 1. Kullanıcının aktif dilini çerezlerden (cookies) al, yoksa 'en' varsay
  const currentLang = res.locals.currentLang;

  const readingsDir = path.join(__dirname, "../data/readings");
  let readingNotes = [];

  try {
    // 2. Klasördeki tüm dosyaları oku
    const allFiles = fs.readdirSync(readingsDir);

    // 3. SİHİRLİ FİLTRE: Sadece aktif dilin uzantısıyla biten dosyaları al (ör: _tr.md)
    const targetFiles = allFiles.filter((file) =>
      file.endsWith(`_${currentLang}.md`),
    );

    // 4. Sadece filtrelenmiş dosyaları EJS'ye gönder
    targetFiles.forEach((file) => {
      const filePath = path.join(readingsDir, file);
      const fileContent = fs.readFileSync(filePath, "utf-8");

      const { data, content } = matter(fileContent);
      const htmlContent = marked.parse(content);

      readingNotes.push({
        title: data.title,
        author: data.author,
        htmlBody: htmlContent,
      });
    });
  } catch (err) {
    console.error("Readings klasörü okunamadı:", err);
  }

  res.render("notes", {
    pageTitle: res.__("titles.readings"),
    ...englishOnlyPage(req),
    activeTopic: "my-readings",
    readings: readingNotes,
    noteData: null,
  });
};

// Eski /change-lang/... bağlantıları çalışmaya devam etsin diye: dil artık adresten (/tr) belirleniyor
exports.changeLanguage = (req, res) => {
  res.redirect(req.params.lang === "tr" ? "/tr" : "/");
};

exports.getAboutPage = (req, res) => {
  res.render("about", {
    pageTitle: res.__("titles.about"),
    pageDescription: res.__("meta.about"),
    reviewers: testimonials.reviewers,
    reviewsSourceUrl: testimonials.sourceUrl,
  });
};

// ==========================================
// SEO: sitemap.xml ve robots.txt
// ==========================================
const SITE_URL = "https://saitelmas.com";

exports.getSitemap = (req, res) => {
  const notesDir = path.join(__dirname, "../data/notes");
  const noteTopics = fs
    .readdirSync(notesDir)
    .filter((file) => file.endsWith("_en.md"))
    .map((file) => file.replace(/_en\.md$/, ""));

  const paths = [
    "/",
    "/about",
    "/contact",
    "/notes",
    ...Object.keys(coursesData).map((slug) => `/tutoring/${slug}`),
    ...noteTopics.map((topic) => `/notes/${topic}`),
  ];

  // Notlar yalnızca İngilizce olduğu için Türkçe (/tr) adresleri yalnızca çevrilmiş sayfalar için eklenir
  const translated = paths.filter((p) => !p.startsWith("/notes"));
  const allPaths = [...paths, ...translated.map((p) => (p === "/" ? "/tr" : `/tr${p}`))];

  Object.values(programData.programs).forEach((program) => {
    allPaths.push(`/${program.slug.en}`, `/tr/${program.slug.tr}`);
  });

  const urls = allPaths.map((p) => `  <url><loc>${SITE_URL}${p}</loc></url>`).join("\n");
  res
    .type("application/xml")
    .send(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`);
};

exports.getRobots = (req, res) => {
  res.type("text/plain").send(`User-agent: *\nAllow: /\nDisallow: /change-lang/\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);
};

// ==========================================
// PROGRAM SAYFALARI (AP / IB / Üniversite özel ders)
// ==========================================
exports.getProgramPage = (req, res, next) => {
  const lang = res.locals.currentLang;
  const otherLang = lang === "tr" ? "en" : "tr";
  const requested = req.params.programSlug;
  const all = Object.values(programData.programs);

  const program = all.find((item) => item.slug[lang] === requested);
  if (!program) {
    // Diğer dilin adresiyle gelindiyse (ör. /tr/ap-tutoring) bu dildeki doğru adrese yönlendir
    const fromOtherLang = all.find((item) => item.slug[otherLang] === requested);
    if (fromOtherLang) {
      return res.redirect(301, res.locals.localUrl(`/${fromOtherLang.slug[lang]}`));
    }
    return next();
  }

  const formatItems = [
    ...programData.format[lang],
    ...(program.exam ? programData.examFormat[lang] : []),
  ];
  const faqItems = programData.faq[lang];

  res.render("program", {
    pageTitle: `${program.title[lang]} | Sait Elmas`,
    pageDescription: program.description[lang],
    // Bu sayfanın iki dildeki adresi farklı olduğu için varsayılan eşleştirme yerine elle veriliyor
    altUrls: { en: `/${program.slug.en}`, tr: `/tr/${program.slug.tr}` },
    program,
    labels: programData.labels[lang],
    formatItems,
    faqItems,
    programCourses: program.courses.map((slug) => ({
      slug,
      title: coursesData[slug].title[lang] || coursesData[slug].title.en,
    })),
    programReviews: program.reviews.map((number) => ({
      number,
      name: testimonials.reviewers[number - 1],
    })),
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
    ],
  });
};
