// Ders sayfalarında gösterilen resmi kurum bağlantıları (College Board, IB vb.).
// Adresler Ekim 2026'da tek tek kontrol edildi.
const AP = "https://apstudents.collegeboard.org/courses";

const labels = {
    en: { heading: "Official Sources", external: "opens in a new tab" },
    tr: { heading: "Resmi Kaynaklar", external: "yeni sekmede açılır" }
};

// Marka sahipleriyle bir bağ olmadığını belirten notlar
const disclaimers = {
    collegeBoard: {
        en: "AP® and SAT® are trademarks registered by the College Board, which is not affiliated with, and does not endorse, this site.",
        tr: "AP® ve SAT®, College Board'un tescilli markalarıdır. College Board'un bu siteyle bir bağı yoktur ve bu siteyi onaylamaz."
    },
    ib: {
        en: "International Baccalaureate® and IB® are registered trademarks of the International Baccalaureate Organization, which is not affiliated with, and does not endorse, this site.",
        tr: "International Baccalaureate® ve IB®, International Baccalaureate Organization'ın tescilli markalarıdır. Kurumun bu siteyle bir bağı yoktur ve bu siteyi onaylamaz."
    }
};

const cb = (course, path) => ({
    label: { en: `${course} (College Board)`, tr: `${course} (College Board)` },
    href: `${AP}/${path}`
});

const links = {
    "ap-calculus": {
        disclaimer: "collegeBoard",
        items: [cb("AP Calculus AB", "ap-calculus-ab"), cb("AP Calculus BC", "ap-calculus-bc")]
    },
    "ap-statistics": {
        disclaimer: "collegeBoard",
        items: [cb("AP Statistics", "ap-statistics")]
    },
    "ap-physics": {
        disclaimer: "collegeBoard",
        items: [
            cb("AP Physics 1: Algebra-Based", "ap-physics-1-algebra-based"),
            cb("AP Physics 2: Algebra-Based", "ap-physics-2-algebra-based"),
            cb("AP Physics C: Mechanics", "ap-physics-c-mechanics"),
            cb("AP Physics C: Electricity and Magnetism", "ap-physics-c-electricity-and-magnetism")
        ]
    },
    "ap-computer-science": {
        disclaimer: "collegeBoard",
        items: [cb("AP Computer Science A", "ap-computer-science-a")]
    },
    "ib-math": {
        disclaimer: "ib",
        items: [{
            label: { en: "Mathematics in the Diploma Programme (IB)", tr: "Diploma Programı'nda Matematik (IB)" },
            href: "https://www.ibo.org/programmes/diploma-programme/curriculum/mathematics/"
        }]
    },
    "ib-physics": {
        disclaimer: "ib",
        items: [{
            label: { en: "Physics in the Diploma Programme (IB)", tr: "Diploma Programı'nda Fizik (IB)" },
            href: "https://www.ibo.org/programmes/diploma-programme/curriculum/sciences/physics/"
        }]
    },
    "sat-math": {
        disclaimer: "collegeBoard",
        items: [
            {
                label: { en: "SAT Math: what's on the test (College Board)", tr: "SAT Matematik: sınavda neler var (College Board)" },
                href: "https://satsuite.collegeboard.org/sat/whats-on-the-test/math"
            },
            {
                label: { en: "The SAT (College Board)", tr: "SAT (College Board)" },
                href: "https://satsuite.collegeboard.org/sat"
            }
        ]
    }
};

// SAT / ESAT / OMPT-B program sayfasındaki sınav kutuları için
const examSites = {
    SAT: "https://satsuite.collegeboard.org/sat",
    ESAT: "https://esat-tmua.ac.uk/",
    "OMPT-B": "https://www.omptest.org/"
};

module.exports = { links, labels, disclaimers, examSites };
