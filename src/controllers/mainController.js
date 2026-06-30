const coursesData = require("../data/courses");
const nodemailer = require("nodemailer");

const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");
const { marked } = require("marked");

exports.getHomePage = (req, res, next) => {
  // 'index' dosyasını render et ve courses değişkenini sayfaya yolla
  res.render("index", {
    pageTitle: "Sait Elmas | Academic & Engineering",
  });
};

// YENİ EKLENENLER: İsimlerin tam olarak böyle yazıldığından emin olun
exports.getTutoringPage = (req, res, next) => {
  res.render("tutoring", {
    pageTitle: "Tutoring Services | Sait Elmas",
  });
};

exports.getContactPage = (req, res, next) => {
  res.render("contact", {
    pageTitle: "Contact | Sait Elmas",
  });
};

// 2. Dinamik Ders Detay Fonksiyonu (EN ALTA EKLEYİN)
exports.getCourseDetails = (req, res, next) => {
  // URL'den gelen ders ismini (slug) yakala
  const courseSlug = req.params.courseName;

  // Veritabanında bu ismi ara
  const courseInfo = coursesData[courseSlug];

  // Eğer URL'ye yanlış bir ders ismi yazıldıysa, Tutoring sayfasına geri yolla
  if (!courseInfo) {
    return res.redirect("/tutoring");
  }

  // Ders bulunduysa dinamik EJS'yi render et ve verileri gönder
  res.render("course-detail", {
    pageTitle: `${courseInfo.title} | Tutoring`,
    course: courseInfo,
  });
};

// Kullanıcı sadece /notes yazarsa "Özet/Karşılama" sayfasını render et
exports.getNotesIndex = (req, res) => {
  res.render("notes", {
    pageTitle: "Academic Notes - Sait Elmas",
    activeTopic: "index",
  });
};

// URL'den gelen konuya (:topic) göre sayfayı render et
exports.getNoteByTopic = (req, res) => {
  const requestedTopic = req.params.topic;

  res.render("notes", {
    pageTitle: "Academic Notes - Sait Elmas",
    activeTopic: requestedTopic,
  });
};

// iletişim formunun mail göndermesi için gerekli.
exports.sendContactEmail = async (req, res) => {
  const { name, email, message } = req.body;

  // 1. Taşıyıcıyı (Transporter) yapılandır
  let transporter = nodemailer.createTransport({
    service: "smtp.gmail.com",
    port: 465,
    secure: true, // 465 portu için true olmalıdır
    auth: {
      user: process.env.EMAIL_USER, // Maili gönderecek adres
      pass: process.env.EMAIL_PASS, // Gmail kullanıyorsan "Uygulama Şifresi" kullanmalısın
    },
  });

  // 2. Mail içeriğini hazırla
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER, // Zorunlu Google kuralı: Kendi adresin olmalı
      replyTo: email, // Sen maili yanıtlaya bastığında müşterinin adresi otomatik çıkar
      to: process.env.EMAIL_USER,
      subject: `Yeni İletişim Formu: ${name}`,
      text: message,
      html: `<p>Gönderen: ${name} (${email})</p><p>${message}</p>`,
    });

    // BAŞARILI DURUMU: Sayfayı 'successMessage' ile tekrar yükle
    res.render("contact", {
      pageTitle: "Contact - Sait Elmas",
      successMessage:
        "Your message has been sent successfully! I will get back to you as soon as possible.",
    });
  } catch (error) {
    console.error(error);

    // HATA DURUMU: Sayfayı 'errorMessage' ile tekrar yükle
    res.render("contact", {
      pageTitle: "Contact - Sait Elmas",
      errorMessage:
        "An error occurred while sending your message. Please try again or reach out via LinkedIn/WhatsApp.",
    });
  }
};

exports.getMyReadingsPage = (req, res) => {
  // Markdown dosyalarının bulunduğu klasörün yolu
  const readingsDir = path.join(__dirname, "../data/readings");
  let readingNotes = [];

  try {
    // Klasördeki tüm dosyaları oku
    const files = fs.readdirSync(readingsDir);

    files.forEach((file) => {
      // Sadece .md uzantılı dosyaları işleme al
      if (file.endsWith(".md")) {
        const filePath = path.join(readingsDir, file);
        const fileContent = fs.readFileSync(filePath, "utf-8");

        // gray-matter ile meta veriyi (data) ve ana metni (content) ayır
        const { data, content } = matter(fileContent);

        // Markdown metnini HTML'e dönüştür
        const htmlContent = marked.parse(content);

        readingNotes.push({
          title: data.title,
          author: data.author,
          htmlBody: htmlContent,
        });
      }
    });
  } catch (err) {
    console.error("Readings klasörü okunamadı:", err);
  }

  // Verileri EJS'ye gönder
  res.render("notes", {
    pageTitle: "My Readings | Sait Elmas",
    activeTopic: "my-readings",
    readings: readingNotes,
  });
};
