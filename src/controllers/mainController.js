const coursesData = require('../data/courses')


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


// 2. Dinamik Ders Detay Fonksiyonu (EN ALTA EKLEYİN)
exports.getCourseDetails = (req, res, next) => {
    // URL'den gelen ders ismini (slug) yakala
    const courseSlug = req.params.courseName; 
    
    // Veritabanında bu ismi ara
    const courseInfo = coursesData[courseSlug]; 

    // Eğer URL'ye yanlış bir ders ismi yazıldıysa, Tutoring sayfasına geri yolla
    if (!courseInfo) {
        return res.redirect('/tutoring');
    }

    // Ders bulunduysa dinamik EJS'yi render et ve verileri gönder
    res.render('course-detail', {
        pageTitle: `${courseInfo.title} | Tutoring`,
        course: courseInfo
    });
};

exports.getNotesPage = (req, res) => {
    res.render('notes', { pageTitle: 'My Notes - Sait Elmas' });
};