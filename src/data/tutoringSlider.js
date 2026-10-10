// Tutoring sayfasının altındaki kayan şeritlerin verisi.
// Üniversite logosu eklemek için dosyayı public/img/logos/universities/<slug>.svg
// (veya .png / .webp / .jpg) olarak kaydetmek yeterli; dosya yoksa kart sadece isim gösterir.
// wordmark: true -> logo zaten üniversitenin adını içeriyor, kartta ayrıca isim yazılmaz.
const universities = [
    { slug: "metu", name: "Middle East Technical Univ. (METU)" },
    { slug: "itu", name: "Istanbul Technical Univ. (ITU)" },
    { slug: "bogazici", name: "Bogazici University" },
    { slug: "bilkent", name: "Bilkent University" },
    { slug: "koc", name: "Koc University", wordmark: true },
    { slug: "sabanci", name: "Sabanci University", wordmark: true },
    { slug: "ytu", name: "Yildiz Technical Univ. (YTU)" },
    { slug: "iztech", name: "Izmir Inst. of Technology (IZTECH)" },
    { slug: "hacettepe", name: "Hacettepe University" },
    { slug: "galatasaray", name: "Galatasaray University" },
    { slug: "gtu", name: "Gebze Technical Univ. (GTU)" },
    { slug: "ankara", name: "Ankara University" },
    { slug: "gazi", name: "Gazi University" },
    { slug: "ege", name: "Ege University" },
    { slug: "marmara", name: "Marmara University" }
];

// Sınav rozetleri resmi logo değil, sitenin Canva'da hazırlanan kendi tasarımıdır (AP, IB ve SAT tescilli markalardır).
// Görseller: public/img/logos/exams/<slug>.png
const exams = [
    { slug: "ap-calculus", label: "AP Calculus AB & BC", href: "/tutoring/ap-calculus" },
    { slug: "ap-statistics", label: "AP Statistics", href: "/tutoring/ap-statistics" },
    { slug: "ap-physics", label: "AP Physics 1, 2 & C", href: "/tutoring/ap-physics" },
    { slug: "ap-computer-science", label: "AP Computer Science A", href: "/tutoring/ap-computer-science" },
    { slug: "ib-math", label: "IB Math AA & AI", href: "/tutoring/ib-math" },
    { slug: "ib-physics", label: "IB Physics", href: "/tutoring/ib-physics" },
    { slug: "sat-math", label: "SAT Math Prep", href: "/tutoring/sat-math" }
];

module.exports = { universities, exams };
