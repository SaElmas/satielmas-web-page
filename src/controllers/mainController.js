exports.getHomePage = (req, res, next) => {
    // Sayfaya göndereceğimiz dinamik ders listesi
    const myCourses = [
        "AP Calculus & Statistics",
        "IB Mathematics",
        "University Level Physics",
        "Computer Science A"
    ];

    // 'index' dosyasını render et ve courses değişkenini sayfaya yolla
    res.render('index', { 
        pageTitle: 'Sait Elmas | Academic & Engineering',
        courses: myCourses
    });
};

// ... (getTutoringPage ve getResumePage fonksiyonlarınız aynı kalacak) ...

// YENİ EKLENENLER: İsimlerin tam olarak böyle yazıldığından emin olun
exports.getTutoringPage = (req, res, next) => {
    res.render('tutoring', {
        pageTitle: 'Tutoring Services | Sait Elmas'
    });
};

exports.getResumePage = (req, res, next) => {
    res.render('resume', {
        pageTitle: 'Resume & Academic Background | Sait Elmas'
    });
};

exports.getContactPage = (req, res, next) => {
    res.render('contact', {
        pageTitle: 'Contact | Sait Elmas'
    });
};