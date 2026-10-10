// Arama niyetine göre hazırlanan program sayfaları: /ap-tutoring (EN) ve /tr/ap-ozel-ders (TR) gibi.
// Buradaki bilgiler (tamamen online, grup + birebir, 60/90 dk, tekrar -> konu -> uygulama, fiyat yazılmaz)
// doğrudan Sait Elmas'ın verdiği bilgilerdir; yeni bir iddia eklerken ona danışılmalı.

const labels = {
    en: {
        courses: "Courses",
        format: "How the lessons work",
        reviews: "What students say",
        faq: "Frequently asked questions",
        cta: "Book a Free Trial Lesson",
        allReviews: "Read all reviews",
        also: "Also offered",
        exams: "The exams"
    },
    tr: {
        courses: "Dersler",
        format: "Dersler nasıl işleniyor",
        reviews: "Öğrenciler ne diyor",
        faq: "Sık sorulan sorular",
        cta: "Ücretsiz Deneme Dersi Ayırt",
        allReviews: "Tüm yorumları okuyun",
        also: "Ayrıca",
        exams: "Sınavlar"
    }
};

// Her program sayfasında ortak olan ders formatı maddeleri
const format = {
    en: [
        { title: "Fully online", text: "All lessons are held online, so it does not matter which city or country you are in." },
        { title: "Group lessons and one-to-one", text: "I run group lessons for students preparing for the same course, as well as one-to-one lessons. We decide together which format suits you in the free trial lesson." },
        { title: "60 or 90 minutes", text: "A lesson lasts 60 or 90 minutes. Each one starts with a short recap of the previous lesson, continues with the new topic, and ends with practice on problems." },
        { title: "Turkish or English", text: "Lessons can be held in Turkish or in English." }
    ],
    tr: [
        { title: "Tamamen online", text: "Derslerin tamamı online yapılır; hangi şehirde ya da ülkede olduğunuz fark etmez." },
        { title: "Grup dersleri ve birebir", text: "Aynı derse hazırlanan öğrencilerle grup dersleri açıyorum, birebir ders de veriyorum. Hangi formatın size uygun olduğuna ücretsiz deneme dersinde birlikte karar veririz." },
        { title: "60 ya da 90 dakika", text: "Bir ders 60 ya da 90 dakika sürer. Her ders önceki dersin kısa bir tekrarıyla başlar, yeni konuyla devam eder ve soru çözümüyle, yani uygulamayla biter." },
        { title: "Türkçe veya İngilizce", text: "Dersler Türkçe ya da İngilizce işlenebilir." }
    ]
};

// Sınav programlarına (AP, IB) özel ek maddeler; ana sayfadaki "Sınav Hazırlık Programları" ile aynı bilgiler
const examFormat = {
    en: [
        { title: "8-week or 16-week programs", text: "Depending on your exam date you can follow an 8-week accelerated course or a 16-week standard program." },
        { title: "Mock exams and homework", text: "Students sit 5 free mock exams under real test conditions and receive an evaluation report after each one, together with personalized homework." }
    ],
    tr: [
        { title: "8 ya da 16 haftalık program", text: "Sınav tarihinize göre 8 haftalık hızlandırılmış kurs ya da 16 haftalık standart program izlenebilir." },
        { title: "Deneme sınavları ve ödev", text: "Öğrenciler gerçek sınav koşullarında 5 ücretsiz deneme sınavına girer; her birinin ardından sonuç değerlendirme raporu ve kişiye özel ödev alır." }
    ]
};

const faq = {
    en: [
        { q: "Are the lessons online?", a: "Yes. All lessons are online, so you can join from any city or country." },
        { q: "Do you offer group lessons?", a: "Yes. I run group lessons for students preparing for the same course, and I also teach one-to-one." },
        { q: "How long is a lesson?", a: "60 or 90 minutes. Each lesson starts with a short recap, continues with the new topic, and ends with practice." },
        { q: "Which language are the lessons in?", a: "Turkish or English, whichever you prefer." },
        { q: "How much do the lessons cost?", a: "Fees vary, so I do not list them on the site. Please get in touch for current information." },
        { q: "Can I try a lesson first?", a: "Yes. We start with a free trial lesson." }
    ],
    tr: [
        { q: "Dersler online mı?", a: "Evet. Derslerin tamamı online; hangi şehirde ya da ülkede olursanız olun katılabilirsiniz." },
        { q: "Grup dersi var mı?", a: "Evet. Aynı derse hazırlanan öğrencilerle grup dersleri açıyorum; birebir ders de veriyorum." },
        { q: "Bir ders ne kadar sürüyor?", a: "60 ya da 90 dakika. Her ders kısa bir tekrarla başlar, yeni konuyla devam eder ve uygulamayla biter." },
        { q: "Dersler hangi dilde?", a: "Tercihinize göre Türkçe ya da İngilizce." },
        { q: "Ders ücreti ne kadar?", a: "Ücretler değişkenlik gösterdiği için sitede yer vermiyorum. Güncel bilgi için lütfen iletişime geçin." },
        { q: "Önce deneme dersi alabilir miyim?", a: "Evet. İlk olarak ücretsiz bir deneme dersi yapıyoruz." }
    ]
};

const programs = {
    ap: {
        slug: { en: "ap-tutoring", tr: "ap-ozel-ders" },
        title: { en: "Online AP Tutoring", tr: "Online AP Özel Ders" },
        description: {
            en: "Online AP tutoring in group lessons or one-to-one: AP Calculus AB & BC, AP Statistics, AP Physics 1, 2 and C, and AP Computer Science A. Lessons in Turkish or English.",
            tr: "Grup dersleri ya da birebir online AP özel ders: AP Calculus AB & BC, AP Statistics, AP Physics 1, 2 ve C, AP Computer Science A. Dersler Türkçe veya İngilizce."
        },
        lead: {
            en: "Online tutoring for the Advanced Placement (AP) exams in mathematics, physics and computer science, in group lessons or one-to-one.",
            tr: "Matematik, fizik ve bilgisayar bilimleri alanındaki Advanced Placement (AP) sınavları için grup dersleri ya da birebir online özel ders."
        },
        courses: ["ap-calculus", "ap-statistics", "ap-physics", "ap-computer-science"],
        also: { en: ["AP Computer Science Principles"], tr: ["AP Computer Science Principles"] },
        exam: true,
        reviews: [1, 3, 4]
    },
    ib: {
        slug: { en: "ib-tutoring", tr: "ib-ozel-ders" },
        title: { en: "Online IB Tutoring", tr: "Online IB Özel Ders" },
        description: {
            en: "Online IB tutoring in group lessons or one-to-one: IB Mathematics AA and AI, IB Physics and IB Computer Science, at HL and SL. Lessons in Turkish or English.",
            tr: "Grup dersleri ya da birebir online IB özel ders: IB Matematik AA ve AI, IB Fizik ve IB Bilgisayar Bilimi, HL ve SL. Dersler Türkçe veya İngilizce."
        },
        lead: {
            en: "Online tutoring for the International Baccalaureate (IB) Diploma Programme in mathematics, physics and computer science, at Higher Level and Standard Level.",
            tr: "International Baccalaureate (IB) Diploma Programı'nın matematik, fizik ve bilgisayar bilimi dersleri için Higher Level ve Standard Level düzeyinde online özel ders."
        },
        courses: ["ib-math", "ib-physics"],
        also: { en: ["IB Computer Science (HL & SL)"], tr: ["IB Bilgisayar Bilimi (HL & SL)"] },
        exam: true,
        reviews: [2, 6]
    },
    university: {
        slug: { en: "university-tutoring", tr: "universite-ozel-ders" },
        title: { en: "Online University Tutoring", tr: "Online Üniversite Özel Ders" },
        description: {
            en: "Online tutoring for university students in group lessons or one-to-one: all undergraduate mathematics and programming courses, plus Physics 1 and Physics 2.",
            tr: "Üniversite öğrencileri için grup dersleri ya da birebir online özel ders: lisans düzeyindeki tüm matematik ve programlama dersleri, ayrıca Fizik 1 ve Fizik 2."
        },
        lead: {
            en: "Online tutoring for all undergraduate-level mathematics and computer programming courses, as well as Physics 1 and Physics 2.",
            tr: "Lisans düzeyindeki tüm matematik ve bilgisayar programlama dersleri ile Fizik 1 ve Fizik 2 için online özel ders."
        },
        courses: [
            "calculus", "linear-algebra", "differential-equations", "real-complex-analysis", "numerical-analysis", "engineering-math",
            "programming-languages", "data-structures", "algorithm-design", "automata-theory", "discrete-math", "database-systems"
        ],
        also: {
            en: ["Physics 1 (Mechanics)", "Physics 2 (Electricity & Magnetism)", "Advanced Calculus", "Abstract Algebra", "Differential Geometry", "Partial Differential Equations", "Probability & Statistics", "Computer Architecture", "Circuit Design", "and other undergraduate mathematics and programming courses"],
            tr: ["Fizik 1 (Mekanik)", "Fizik 2 (Elektrik ve Manyetizma)", "İleri Kalkülüs", "Soyut Cebir", "Diferansiyel Geometri", "Kısmi Diferansiyel Denklemler", "Olasılık ve İstatistik", "Bilgisayar Mimarisi", "Devre Tasarımı", "ve diğer lisans matematik ve programlama dersleri"]
        },
        exam: false,
        reviews: [5, 10, 12]
    }
};

// SAT ve daha az yaygın yurt dışı başvuru sınavları tek bir sayfada toplanır
programs.exams = {
    slug: { en: "sat-esat-ompt-tutoring", tr: "sat-esat-ompt-ozel-ders" },
    title: { en: "Online SAT, ESAT & OMPT-B Tutoring", tr: "Online SAT, ESAT ve OMPT-B Özel Ders" },
    description: {
        en: "Online tutoring for the mathematics sections of SAT, ESAT and OMPT-B, the exams used in applications to universities abroad. Group lessons or one-to-one, in Turkish or English.",
        tr: "Yurt dışı üniversite başvurularında kullanılan SAT, ESAT ve OMPT-B sınavlarının matematik bölümleri için online özel ders. Grup dersleri ya da birebir, Türkçe veya İngilizce."
    },
    lead: {
        en: "Online tutoring for the mathematics sections of the exams used in applications to universities abroad: SAT, ESAT and OMPT-B.",
        tr: "Yurt dışı üniversite başvurularında kullanılan SAT, ESAT ve OMPT-B sınavlarının matematik bölümleri için online özel ders."
    },
    courses: ["sat-math"],
    also: { en: ["ESAT", "OMPT-B"], tr: ["ESAT", "OMPT-B"] },
    // Sınavların kısa tanıtımı (sayfada 'Sınavlar' başlığı altında gösterilir)
    exams: {
        en: [
            { name: "SAT", text: "The admission test used by universities in the United States. Lessons cover the Math section." },
            { name: "ESAT", text: "The Engineering and Science Admissions Test, required for engineering and science courses at universities such as Cambridge and Imperial College London. Lessons cover the mathematics modules." },
            { name: "OMPT-B", text: "The Online Mathematics Placement Test at level B, a mathematics proficiency exam accepted by universities in the Netherlands." }
        ],
        tr: [
            { name: "SAT", text: "ABD'deki üniversitelerin başvuruda kullandığı sınav. Derslerde Matematik bölümü çalışılır." },
            { name: "ESAT", text: "Cambridge ve Imperial College London gibi üniversitelerin mühendislik ve fen bölümleri için istediği giriş sınavı (Engineering and Science Admissions Test). Derslerde matematik modülleri çalışılır." },
            { name: "OMPT-B", text: "Hollanda'daki üniversitelerin kabul ettiği, B düzeyindeki online matematik yeterlilik sınavı (Online Mathematics Placement Test)." }
        ]
    },
    exam: false,
    reviews: []
};

// Bir dersin hangi program sayfasına ait olduğu (ders sayfasındaki kategori bağlantısı için)
const programKeyForCourse = (courseSlug) =>
    Object.keys(programs).find((key) => programs[key].courses.includes(courseSlug)) || null;

module.exports = { programs, labels, format, examFormat, faq, programKeyForCourse };
