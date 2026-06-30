const coursesData = require("../data/courses");
const nodemailer = require("nodemailer");

const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");
const { marked } = require("marked");

exports.getHomePage = (req, res, next) => {
  res.render("index", {
    pageTitle: "Sait Elmas | Academic & Engineering",
  });
};

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

exports.getCourseDetails = (req, res, next) => {
  const courseSlug = req.params.courseName;
  const courseInfo = coursesData[courseSlug];

  if (!courseInfo) {
    return res.redirect("/tutoring");
  }

  res.render("course-detail", {
    pageTitle: `Course Details | Tutoring`,
    course: courseInfo,
  });
};

exports.getNotesIndex = (req, res) => {
  res.render("notes", {
    pageTitle: "Academic Notes - Sait Elmas",
    activeTopic: "index",
  });
};

exports.getNoteByTopic = (req, res) => {
  const requestedTopic = req.params.topic;

  res.render("notes", {
    pageTitle: "Academic Notes - Sait Elmas",
    activeTopic: requestedTopic,
  });
};

exports.sendContactEmail = async (req, res) => {
  const { name, email, message } = req.body;

  try {
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      });

    // Not: İleride mail gönderme işlemini aktifleştirmek için buraya transporter.sendMail(...) eklenecek

    res.render("contact", {
      pageTitle: "Contact - Sait Elmas",
      successMessage:
        "Your message has been sent successfully! I will get back to you as soon as possible.",
    });
  } catch (error) {
    console.error(error);

    res.render("contact", {
      pageTitle: "Contact - Sait Elmas",
      errorMessage:
        "An error occurred while sending your message. Please try again or reach out via LinkedIn/WhatsApp.",
    });
  }
};

// ==========================================
// DİNAMİK DİL FİLTRELİ OKUMALAR FONKSİYONU
// ==========================================
exports.getMyReadingsPage = (req, res) => {
  // 1. Kullanıcının aktif dilini çerezlerden (cookies) al, yoksa 'en' varsay
  const currentLang = (req.cookies && req.cookies.lang) ? req.cookies.lang : 'en';
  
  const readingsDir = path.join(__dirname, "../data/readings");
  let readingNotes = [];

  try {
    // 2. Klasördeki tüm dosyaları oku
    const allFiles = fs.readdirSync(readingsDir);

    // 3. SİHİRLİ FİLTRE: Sadece aktif dilin uzantısıyla biten dosyaları al (ör: _tr.md)
    const targetFiles = allFiles.filter(file => file.endsWith(`_${currentLang}.md`));

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
    pageTitle: "My Readings | Sait Elmas",
    activeTopic: "my-readings",
    readings: readingNotes,
  });
};

exports.changeLanguage = (req, res) => {
    const selectedLang = req.params.lang;
    const supportedLanguages = ['en', 'tr', 'fr'];

    if (supportedLanguages.includes(selectedLang)) {
        res.cookie('lang', selectedLang, { maxAge: 31536000000, httpOnly: true });
    }

    const previousUrl = req.get('Referrer') || '/';

    if (previousUrl.includes('/change-lang')) {
        return res.redirect('/');
    }

    res.redirect(previousUrl);
};