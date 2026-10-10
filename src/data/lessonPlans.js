// Ders sayfalarında gösterilen ders ders müfredat planları.
// - "ap-computer-science": Sait Elmas'ın kendi hazırladığı 25 derslik plan (Fall 2025 güncellemesi).
// - Diğerleri: aynı yapıda, güncel resmi müfredatlara göre hazırlanmış TASLAK planlar (draft: true).
//   Yayındaki metni değiştirmeden önce Sait Elmas'ın onayı alınmalı.
// Kaynak müfredatlar (Ekim 2026): AP dersleri için College Board Course and Exam Description,
// IB için 2021 (Matematik) ve 2025 (Fizik) ilk sınavlı kılavuzlar, SAT için Digital SAT içerik alanları.

const labels = {
    en: {
        heading: "Lesson-by-Lesson Curriculum Plan",
        totalLessons: "Total lessons",
        duration: "Lesson duration",
        minutes: "minutes",
        flow: "Flow of a standard 90-minute lesson",
        lesson: "Lesson",
        lessons: "Lessons",
        tags: {
            core: "Core", frq: "FRQ Practice", patterns: "Patterns and Algorithms", mcq: "Multiple Choice Practice",
            sim: "Exam Simulation", eval: "Evaluation", bootcamp: "W3Schools", practice: "Exam Practice", paper: "Paper Practice"
        }
    },
    tr: {
        heading: "Ders Ders Müfredat Planı",
        totalLessons: "Toplam ders",
        duration: "Ders süresi",
        minutes: "dakika",
        flow: "90 dakikalık standart bir dersin akışı",
        lesson: "Ders",
        lessons: "Dersler",
        tags: {
            core: "Konu", frq: "FRQ Çalışması", patterns: "Kalıplar ve Algoritmalar", mcq: "Çoktan Seçmeli Çalışması",
            sim: "Sınav Simülasyonu", eval: "Değerlendirme", bootcamp: "W3Schools", practice: "Sınav Çalışması", paper: "Paper Çalışması"
        }
    }
};

// Kodlama derslerindeki akış (AP CSA planından)
const codingFlow = [
    { time: "0–10", en: "Warm-up, quick review of the previous lesson, or a mini-quiz.", tr: "Isınma, önceki dersin kısa tekrarı ya da mini quiz." },
    { time: "10–55", en: "Lecture, analysis, and theoretical review of the new topic.", tr: "Yeni konunun anlatımı, analizi ve teorik incelemesi." },
    { time: "55–85", en: "Guided coding (hands-on practice): the student writes code under my direct supervision, receives instant feedback, and debugs errors.", tr: "Rehberli kodlama (uygulama): öğrenci doğrudan gözetimim altında kod yazar, anında geri bildirim alır ve hatalarını ayıklar." },
    { time: "85–90", en: "Optimization, summary, and wrap-up.", tr: "İyileştirme, özet ve kapanış." }
];

// Matematik ve fizik derslerindeki akış (aynı yapı; kodlama yerine soru çözümü)
const problemFlow = [
    { time: "0–10", en: "Warm-up, quick review of the previous lesson, or a mini-quiz.", tr: "Isınma, önceki dersin kısa tekrarı ya da mini quiz." },
    { time: "10–55", en: "Lecture, analysis, and theoretical review of the new topic.", tr: "Yeni konunun anlatımı, analizi ve teorik incelemesi." },
    { time: "55–85", en: "Guided problem solving: the student works exam-style questions under my direct supervision and receives instant feedback.", tr: "Rehberli soru çözümü: öğrenci doğrudan gözetimim altında sınav tipi sorular çözer ve anında geri bildirim alır." },
    { time: "85–90", en: "Summary, homework, and wrap-up.", tr: "Özet, ödev ve kapanış." }
];

const L = (tag, unit, en, tr) => ({ tag, unit, en, tr });

const plans = {
    // =====================================================================
    // AP COMPUTER SCIENCE A — Sait Elmas'ın planı (PDF: 25-Lesson Intensive Curriculum Plan)
    // =====================================================================
    "ap-computer-science": {
        draft: false,
        title: { en: "AP Computer Science A: 25-Lesson Intensive Curriculum Plan (Fall 2025 Updated)", tr: "AP Computer Science A: 25 Derslik Yoğun Müfredat Planı (Fall 2025 Güncellemesi)" },
        intro: {
            en: [
                "This program is based on the updated 4-unit AP CSA curriculum effective as of Fall 2025. Inheritance and interfaces are excluded, in line with the updated AP standards, and newly introduced topics such as text file reading (Topic 4.6) are included.",
                "The first 5 lessons establish strong Java fundamentals using W3Schools tutorials. The remaining 20 lessons blend the core AP curriculum, algorithm patterns, and FRQ (free-response question) practice."
            ],
            tr: [
                "Bu program, Fall 2025 itibarıyla geçerli olan güncel 4 üniteli AP CSA müfredatına göre hazırlanmıştır. Güncel AP standartlarına uygun olarak kalıtım (inheritance) ve arayüzler (interface) programda yer almaz; metin dosyası okuma (Konu 4.6) gibi yeni eklenen konular ise programa dahildir.",
                "İlk 5 ders, W3Schools eğitimleriyle sağlam bir Java temeli kurar. Kalan 20 ders; temel AP müfredatını, algoritma kalıplarını ve FRQ (açık uçlu soru) çalışmalarını bir arada işler."
            ]
        },
        lessons: 25,
        minutes: 90,
        flow: codingFlow,
        parts: [
            {
                title: { en: "Part 1: W3Schools Java Boot Camp", tr: "1. Bölüm: W3Schools Java Hazırlık Kampı" },
                note: { en: "The preparation phase where the student gets accustomed to Java syntax and writes code in a low-risk environment.", tr: "Öğrencinin Java sözdizimine alıştığı ve düşük riskli bir ortamda kod yazdığı hazırlık aşaması." },
                lessons: [
                    L("bootcamp", "1 - Fundamentals", "Get Started, Syntax, Output, Comments, Variables, Data Types, Type Casting, Operators, Strings, Math.", "Başlangıç, sözdizimi, çıktı, yorum satırları, değişkenler, veri tipleri, tip dönüşümü, operatörler, String'ler, Math."),
                    L("bootcamp", "2 - Control Structures", "Booleans, If...Else, Switch, While Loop, For Loop, Break/Continue, Arrays (introduction to arrays).", "Boolean'lar, if...else, switch, while döngüsü, for döngüsü, break/continue, diziler (dizilere giriş)."),
                    L("bootcamp", "3 - Methods", "Methods, Method Challenge, Method Parameters, Method Overloading, Scope, Recursion (introduction to recursion).", "Metotlar, metot alıştırması, metot parametreleri, metot aşırı yükleme (overloading), kapsam (scope), özyineleme (özyinelemeye giriş)."),
                    L("bootcamp", "4 - Classes", "OOP, Classes/Objects, Class Attributes, Class Methods, Class Challenge, Constructors, this Keyword, Modifiers, Encapsulation, Packages/API. (Strictly excluding inheritance, polymorphism, and the super keyword.)", "OOP, sınıflar/nesneler, sınıf nitelikleri, sınıf metotları, sınıf alıştırması, kurucular (constructor), this anahtar kelimesi, erişim belirleyiciler, kapsülleme, paketler/API. (Kalıtım, çok biçimlilik ve super anahtar kelimesi kesinlikle hariç.)"),
                    L("bootcamp", "5 - File Handling and Errors", "Errors, Debugging, Exceptions, Multiple Exceptions, try-with-resources. Java Files (Create, Read, Write, Delete), I/O Streams. (This establishes the programming foundation required for the 2025 AP Topic 4.6: Using Text Files.)", "Hatalar, hata ayıklama, istisnalar (exception), çoklu istisnalar, try-with-resources. Java dosyaları (oluşturma, okuma, yazma, silme), I/O akışları. (2025 AP müfredatındaki Konu 4.6: Using Text Files için gereken programlama temelini oluşturur.)")
                ]
            },
            {
                title: { en: "Part 2: Objects, Control Structures, and Class Design", tr: "2. Bölüm: Nesneler, Kontrol Yapıları ve Sınıf Tasarımı" },
                note: { en: "Covers Unit 1 (Using Objects and Methods), Unit 2 (Selection and Iteration), and Unit 3 (Class Creation) of the Fall 2025 AP curriculum.", tr: "Fall 2025 AP müfredatının 1. Ünitesini (Using Objects and Methods), 2. Ünitesini (Selection and Iteration) ve 3. Ünitesini (Class Creation) kapsar." },
                lessons: [
                    L("core", "Core 1 / Unit 1", "Object Instantiation, Memory Management (References), Advanced String & Math Methods (Topics 1.1 - 1.15).", "Nesne oluşturma, bellek yönetimi (referanslar), ileri düzey String ve Math metotları (Konu 1.1 - 1.15)."),
                    L("core", "Core 2 / Unit 2", "Advanced Loops, De Morgan's Laws, Compound Boolean Expressions, and Nested Loops (Topics 2.1 - 2.8).", "İleri düzey döngüler, De Morgan kuralları, bileşik Boolean ifadeleri ve iç içe döngüler (Konu 2.1 - 2.8)."),
                    L("frq", "FRQ Practice 1", "AP FRQ Type 1: Methods and Control Structures. (Scenarios combining String methods and iteration.)", "AP FRQ Tip 1: Methods and Control Structures. (String metotlarını ve döngüleri birleştiren senaryolar.)"),
                    L("patterns", "Patterns and Algorithms 1", "Basic Iteration and String Algorithms (finding max/min, extracting substrings, parsing digits) (Topics 2.9, 2.10).", "Temel döngü ve String algoritmaları (en büyük/en küçüğü bulma, alt dize çıkarma, basamaklara ayırma) (Konu 2.9, 2.10)."),
                    L("core", "Core 3 / Unit 3", "Class Design - Anatomy of a Class (visibility constraints, constructors, this keyword, memory storage of objects) (Topics 3.1 - 3.4).", "Sınıf tasarımı - bir sınıfın anatomisi (görünürlük kısıtları, kurucular, this anahtar kelimesi, nesnelerin bellekte saklanması) (Konu 3.1 - 3.4)."),
                    L("core", "Core 4 / Unit 3", "Class Behaviors - Accessor/Mutator Methods, Static (Class) Variables and Methods, Pass-by-Value Mechanics (Topics 3.5 - 3.9).", "Sınıf davranışları - erişimci/değiştirici (accessor/mutator) metotlar, static (sınıf) değişken ve metotları, değerle çağırma (pass-by-value) mekaniği (Konu 3.5 - 3.9)."),
                    L("frq", "FRQ Practice 2", "AP FRQ Type 2: Class Design. (Designing and building a class from scratch based on given UML diagrams or tabular specifications.)", "AP FRQ Tip 2: Class Design. (Verilen UML diyagramlarına ya da tablo halindeki tanımlara göre bir sınıfı sıfırdan tasarlayıp yazma.)")
                ]
            },
            {
                title: { en: "Part 3: Data Collections", tr: "3. Bölüm: Veri Koleksiyonları" },
                note: { en: "The core of the 2025 AP curriculum: Unit 4 (Data Collections). Combining 1D arrays, ArrayLists, text files, and 2D arrays.", tr: "2025 AP müfredatının çekirdeği: 4. Ünite (Data Collections). Tek boyutlu diziler, ArrayList'ler, metin dosyaları ve iki boyutlu diziler bir arada." },
                lessons: [
                    L("core", "Core 5 / Unit 4", "1D Arrays - Array Creation, Index Management, Indexed and Enhanced For Loop Traversals (Topics 4.3 - 4.4).", "Tek boyutlu diziler - dizi oluşturma, indis yönetimi, indisli ve gelişmiş for döngüsüyle gezinme (Konu 4.3 - 4.4)."),
                    L("core", "Core 6 / Unit 4", "Wrapper Classes (Integer, Double) and ArrayList Methods (add, set, remove, get) (Topics 4.7 - 4.8).", "Sarmalayıcı sınıflar (Integer, Double) ve ArrayList metotları (add, set, remove, get) (Konu 4.7 - 4.8)."),
                    L("frq", "FRQ Practice 3", "AP FRQ Type 3: Data Analysis with ArrayList. (Processing dynamically sized data.)", "AP FRQ Tip 3: Data Analysis with ArrayList. (Boyutu değişen verinin işlenmesi.)"),
                    L("patterns", "Patterns and Algorithms 2", "Array/ArrayList Algorithms (shifting, reversing) and Text Files (reading data from a text file using Scanner and File) (Topics 4.5, 4.6, 4.10).", "Dizi/ArrayList algoritmaları (kaydırma, ters çevirme) ve metin dosyaları (Scanner ve File ile metin dosyasından veri okuma) (Konu 4.5, 4.6, 4.10)."),
                    L("core", "Core 7 / Unit 4", "2D Arrays - Matrix Creation, Memory Structure, and Basic Row/Column Traversals (Row-Major) (Topics 4.11 - 4.12).", "İki boyutlu diziler - matris oluşturma, bellek yapısı ve temel satır/sütun gezinmeleri (satır öncelikli) (Konu 4.11 - 4.12)."),
                    L("core", "Core 8 / Unit 4", "2D Array Algorithms - Column-Major Traversal, Bounds Checking, and Neighbor Element Analysis (Topic 4.13).", "İki boyutlu dizi algoritmaları - sütun öncelikli gezinme, sınır kontrolü ve komşu eleman analizi (Konu 4.13)."),
                    L("frq", "FRQ Practice 4", "AP FRQ Type 4: 2D Array. (Grid algorithms, board games, or tabular data analysis questions.)", "AP FRQ Tip 4: 2D Array. (Izgara algoritmaları, masa oyunları ya da tablo verisi analizi soruları.)"),
                    L("core", "Core 9 / Unit 4", "Searching and Sorting Algorithms - Linear Search, Binary Search, Selection Sort, Insertion Sort (Topics 4.14 - 4.15).", "Arama ve sıralama algoritmaları - doğrusal arama, ikili arama, seçmeli sıralama (selection sort), eklemeli sıralama (insertion sort) (Konu 4.14 - 4.15).")
                ]
            },
            {
                title: { en: "Part 4: Recursion and Simulation", tr: "4. Bölüm: Özyineleme ve Simülasyon" },
                note: { en: "Covering recursion (now integrated into Unit 4) and comprehensive exam practice.", tr: "Özyineleme (artık 4. Üniteye dahil) ve kapsamlı sınav çalışması." },
                lessons: [
                    L("core", "Core 10 / Unit 4", "Recursion - Tracing Recursive Methods, Base Case Concept, and Stack Memory (Topic 4.16).", "Özyineleme - özyinelemeli metotları izleme, temel durum (base case) kavramı ve yığın (stack) belleği (Konu 4.16)."),
                    L("core", "Core 11 / Unit 4", "Recursive Algorithms - Recursive Searching and Merge Sort Algorithm Analysis (Topic 4.17).", "Özyinelemeli algoritmalar - özyinelemeli arama ve merge sort algoritmasının analizi (Konu 4.17)."),
                    L("mcq", "", "Multiple Choice Strategies, Speeding up Code Tracing, Informal Run-time Analysis (Topic 2.12).", "Çoktan seçmeli soru stratejileri, kod izlemeyi hızlandırma, çalışma süresinin sezgisel analizi (Konu 2.12)."),
                    L("frq", "FRQ Practice 5", "Full-Scope Mixed FRQ Exam Simulation (time management and scoring according to AP rubrics).", "Tüm kapsamı içeren karma FRQ sınav simülasyonu (zaman yönetimi ve AP rubriklerine göre puanlama)."),
                    L("eval", "", "Simulation Analysis, Addressing Common Mistakes, Ethical/Social Impacts of Computing (Topics 3.2, 4.1), and Course Wrap-up.", "Simülasyon analizi, sık yapılan hataların ele alınması, bilişimin etik/toplumsal etkileri (Konu 3.2, 4.1) ve ders kapanışı.")
                ]
            }
        ]
    },

    // =====================================================================
    // AP CALCULUS AB & BC — TASLAK (College Board CED, 10 ünite; BC'ye özel dersler işaretli)
    // =====================================================================
    "ap-calculus": {
        draft: true,
        title: { en: "AP Calculus AB & BC: 25-Lesson Curriculum Plan", tr: "AP Calculus AB & BC: 25 Derslik Müfredat Planı" },
        intro: {
            en: [
                "This program follows the 10 units of the College Board AP Calculus AB and BC Course and Exam Description. Units 1-8 are common to AB and BC; lessons marked BC only cover the additional BC topics and Units 9-10.",
                "AP Calculus AB students follow the 21 lessons that are not marked BC only. Each block of core lessons is followed by FRQ (free-response question) practice, and the program ends with a full exam simulation."
            ],
            tr: [
                "Bu program, College Board AP Calculus AB ve BC müfredatının (Course and Exam Description) 10 ünitesini izler. 1-8. üniteler AB ve BC için ortaktır; \"yalnızca BC\" olarak işaretli dersler BC'ye özel ek konuları ve 9-10. üniteleri kapsar.",
                "AP Calculus AB öğrencileri \"yalnızca BC\" işareti taşımayan 21 dersi takip eder. Her konu bloğunun ardından FRQ (açık uçlu soru) çalışması yapılır ve program tam bir sınav simülasyonuyla biter."
            ]
        },
        lessons: 25,
        minutes: 90,
        flow: problemFlow,
        parts: [
            {
                title: { en: "Part 1: Limits and Derivatives", tr: "1. Bölüm: Limit ve Türev" },
                note: { en: "Covers Unit 1 (Limits and Continuity), Unit 2 (Differentiation: Definition and Fundamental Properties), and Unit 3 (Differentiation: Composite, Implicit, and Inverse Functions).", tr: "1. Üniteyi (Limits and Continuity), 2. Üniteyi (Differentiation: Definition and Fundamental Properties) ve 3. Üniteyi (Differentiation: Composite, Implicit, and Inverse Functions) kapsar." },
                lessons: [
                    L("core", "Core 1 / Unit 1", "Limits from graphs, tables, and algebra; limit laws; one-sided limits; the Squeeze Theorem.", "Grafikten, tablodan ve cebirsel yolla limit; limit kuralları; tek taraflı limitler; Sıkıştırma (Squeeze) Teoremi."),
                    L("core", "Core 2 / Unit 1", "Continuity and types of discontinuity, limits at infinity and asymptotes, the Intermediate Value Theorem.", "Süreklilik ve süreksizlik türleri, sonsuzdaki limitler ve asimptotlar, Ara Değer Teoremi (IVT)."),
                    L("core", "Core 3 / Unit 2", "Definition of the derivative, differentiability and continuity, the power rule, derivatives of sin x, cos x, e^x, and ln x.", "Türevin tanımı, türevlenebilirlik ve süreklilik, kuvvet kuralı, sin x, cos x, e^x ve ln x'in türevleri."),
                    L("core", "Core 4 / Unit 2", "Product and quotient rules, derivatives of tangent, cotangent, secant, and cosecant.", "Çarpım ve bölüm kuralları; tanjant, kotanjant, sekant ve kosekantın türevleri."),
                    L("core", "Core 5 / Unit 3", "Chain rule, implicit differentiation, derivatives of inverse and inverse trigonometric functions, higher-order derivatives.", "Zincir kuralı, kapalı türev, ters fonksiyonların ve ters trigonometrik fonksiyonların türevi, yüksek mertebeden türevler."),
                    L("frq", "FRQ Practice 1", "Limits, continuity, and derivatives from tables and graphs; justifying answers in the wording AP readers expect.", "Tablo ve grafiklerden limit, süreklilik ve türev; yanıtları AP değerlendiricilerinin beklediği ifadelerle gerekçelendirme.")
                ]
            },
            {
                title: { en: "Part 2: Applications of Differentiation", tr: "2. Bölüm: Türevin Uygulamaları" },
                note: { en: "Covers Unit 4 (Contextual Applications of Differentiation) and Unit 5 (Analytical Applications of Differentiation).", tr: "4. Üniteyi (Contextual Applications of Differentiation) ve 5. Üniteyi (Analytical Applications of Differentiation) kapsar." },
                lessons: [
                    L("core", "Core 6 / Unit 4", "Rates of change in context, straight-line motion (position, velocity, acceleration), related rates.", "Bağlam içinde değişim oranları, doğrusal hareket (konum, hız, ivme), bağlı oranlar (related rates)."),
                    L("core", "Core 7 / Unit 4", "Local linearity and linearization, L'Hospital's Rule for indeterminate forms.", "Yerel doğrusallık ve doğrusallaştırma, belirsiz biçimler için L'Hospital kuralı."),
                    L("core", "Core 8 / Unit 5", "Mean Value Theorem, Extreme Value Theorem, increasing and decreasing intervals, the first and second derivative tests, concavity.", "Ortalama Değer Teoremi, Uç Değer Teoremi, artan ve azalan aralıklar, birinci ve ikinci türev testleri, konkavlık."),
                    L("core", "Core 9 / Unit 5", "Connecting the graphs of f, f', and f''; optimization problems; behavior of implicit relations.", "f, f' ve f'' grafikleri arasındaki ilişki; optimizasyon problemleri; kapalı bağıntıların davranışı."),
                    L("frq", "FRQ Practice 2", "Graph-of-f' analysis questions and particle motion questions.", "f' grafiği analiz soruları ve parçacık hareketi soruları.")
                ]
            },
            {
                title: { en: "Part 3: Integration and Its Applications", tr: "3. Bölüm: İntegral ve Uygulamaları" },
                note: { en: "Covers Unit 6 (Integration and Accumulation of Change), Unit 7 (Differential Equations), and Unit 8 (Applications of Integration).", tr: "6. Üniteyi (Integration and Accumulation of Change), 7. Üniteyi (Differential Equations) ve 8. Üniteyi (Applications of Integration) kapsar." },
                lessons: [
                    L("core", "Core 10 / Unit 6", "Accumulation of change, Riemann sums, the definite integral, the Fundamental Theorem of Calculus, accumulation functions.", "Değişimin birikimi, Riemann toplamları, belirli integral, Kalkülüsün Temel Teoremi, birikim fonksiyonları."),
                    L("core", "Core 11 / Unit 6", "Antiderivatives and indefinite integrals, u-substitution, long division and completing the square.", "Ters türev ve belirsiz integral, değişken değiştirme (u-substitution), polinom bölmesi ve tam kareye tamamlama."),
                    L("core", "Core 12 / Unit 6 (BC only)", "Integration by parts, partial fractions, improper integrals.", "Kısmi integrasyon, basit kesirlere ayırma, has olmayan (improper) integraller."),
                    L("frq", "FRQ Practice 3", "Rate-in/rate-out questions and questions based on tables of values (Riemann sums).", "Giriş/çıkış oranı soruları ve değer tablosuna dayalı sorular (Riemann toplamları)."),
                    L("core", "Core 13 / Unit 7", "Slope fields, separable differential equations, exponential models. BC only: Euler's method and logistic models.", "Eğim alanları, değişkenlerine ayrılabilir diferansiyel denklemler, üstel modeller. Yalnızca BC: Euler yöntemi ve lojistik modeller."),
                    L("core", "Core 14 / Unit 8", "Average value of a function, motion problems with integrals, accumulation in applied contexts.", "Bir fonksiyonun ortalama değeri, integralle hareket problemleri, uygulamalı bağlamlarda birikim."),
                    L("core", "Core 15 / Unit 8", "Area between curves, volumes by cross sections, disc and washer methods. BC only: arc length.", "Eğriler arasındaki alan, kesit yöntemiyle hacim, disk ve pul (washer) yöntemleri. Yalnızca BC: yay uzunluğu."),
                    L("frq", "FRQ Practice 4", "Area and volume questions and differential equation questions.", "Alan-hacim soruları ve diferansiyel denklem soruları.")
                ]
            },
            {
                title: { en: "Part 4: BC Topics", tr: "4. Bölüm: BC Konuları" },
                note: { en: "BC only. Covers Unit 9 (Parametric Equations, Polar Coordinates, and Vector-Valued Functions) and Unit 10 (Infinite Sequences and Series).", tr: "Yalnızca BC. 9. Üniteyi (Parametric Equations, Polar Coordinates, and Vector-Valued Functions) ve 10. Üniteyi (Infinite Sequences and Series) kapsar." },
                lessons: [
                    L("core", "Core 16 / Unit 9 (BC only)", "Parametric equations, vector-valued functions, and polar curves: derivatives, arc length, area, and motion in the plane.", "Parametrik denklemler, vektör değerli fonksiyonlar ve kutupsal eğriler: türev, yay uzunluğu, alan ve düzlemde hareket."),
                    L("core", "Core 17 / Unit 10 (BC only)", "Convergence of sequences and series; geometric, harmonic, and p-series; the convergence tests.", "Dizi ve serilerin yakınsaklığı; geometrik, harmonik ve p-serileri; yakınsaklık testleri."),
                    L("core", "Core 18 / Unit 10 (BC only)", "Alternating series error bound, Taylor and Maclaurin polynomials, Lagrange error bound, power series, radius and interval of convergence.", "Alterne seri hata sınırı, Taylor ve Maclaurin polinomları, Lagrange hata sınırı, kuvvet serileri, yakınsaklık yarıçapı ve aralığı.")
                ]
            },
            {
                title: { en: "Part 5: Exam Practice and Simulation", tr: "5. Bölüm: Sınav Çalışması ve Simülasyon" },
                note: { en: "Comprehensive exam practice for both sections of the exam.", tr: "Sınavın iki bölümü için kapsamlı sınav çalışması." },
                lessons: [
                    L("mcq", "", "Multiple-choice strategies for the non-calculator and calculator parts; the graphing-calculator skills the exam expects.", "Hesap makinesiz ve hesap makineli bölümler için çoktan seçmeli stratejileri; sınavın beklediği grafik hesap makinesi becerileri."),
                    L("frq", "FRQ Practice 5", "Full-scope mixed FRQ exam simulation (time management and scoring according to AP rubrics).", "Tüm kapsamı içeren karma FRQ sınav simülasyonu (zaman yönetimi ve AP rubriklerine göre puanlama)."),
                    L("eval", "", "Simulation analysis, addressing common mistakes, and course wrap-up.", "Simülasyon analizi, sık yapılan hataların ele alınması ve ders kapanışı.")
                ]
            }
        ]
    },

    // =====================================================================
    // AP STATISTICS — TASLAK (2026-27'de yenilenen 5 üniteli müfredat; ilk sınav Mayıs 2027)
    // =====================================================================
    "ap-statistics": {
        draft: true,
        title: { en: "AP Statistics: 20-Lesson Curriculum Plan (2026-27 Revised Course)", tr: "AP Statistics: 20 Derslik Müfredat Planı (2026-27 Yenilenen Müfredat)" },
        intro: {
            en: [
                "This program is based on the AP Statistics course as revised for the 2026-27 school year, in which the former nine units were consolidated into five. Topics removed from the course (such as the geometric distribution, the chi-square goodness-of-fit test, and inference for slopes) are not included.",
                "Core lessons follow the five units in order. FRQ (free-response question) practice is built around the four statistical practices assessed on the exam: formulating questions, collecting data, analyzing data, and interpreting results."
            ],
            tr: [
                "Bu program, 2026-27 öğretim yılı için yenilenen ve eski dokuz ünitenin beş ünitede toplandığı AP Statistics müfredatına göre hazırlanmıştır. Müfredattan çıkarılan konular (geometrik dağılım, ki-kare uyum iyiliği testi, eğim için çıkarım gibi) programda yer almaz.",
                "Konu dersleri beş üniteyi sırasıyla izler. FRQ (açık uçlu soru) çalışmaları, sınavda ölçülen dört istatistik pratiği etrafında kurulmuştur: soru oluşturma, veri toplama, veri analizi ve sonuçları yorumlama."
            ]
        },
        lessons: 20,
        minutes: 90,
        flow: problemFlow,
        parts: [
            {
                title: { en: "Part 1: Exploring and Collecting Data", tr: "1. Bölüm: Veriyi Keşfetme ve Toplama" },
                note: { en: "Covers Unit 1 (Exploring One-Variable Data and Collecting Data).", tr: "1. Üniteyi (Exploring One-Variable Data and Collecting Data) kapsar." },
                lessons: [
                    L("core", "Core 1 / Unit 1", "Investigative questions, variables, and displaying categorical data: frequency tables and bar graphs.", "Araştırma soruları, değişkenler ve kategorik verinin gösterimi: sıklık tabloları ve sütun grafikleri."),
                    L("core", "Core 2 / Unit 1", "Displaying quantitative data (dotplots, histograms, boxplots) and describing distributions: shape, center, variability, and unusual features.", "Nicel verinin gösterimi (nokta grafiği, histogram, kutu grafiği) ve dağılımın betimlenmesi: şekil, merkez, yayılım ve sıra dışı özellikler."),
                    L("core", "Core 3 / Unit 1", "Summary statistics, comparing distributions, percentiles and z-scores, the normal distribution.", "Özet istatistikler, dağılımların karşılaştırılması, yüzdelikler ve z-skorları, normal dağılım."),
                    L("core", "Core 4 / Unit 1", "Collecting data: sampling methods and sources of bias, observational studies and experiments, principles of experimental design.", "Veri toplama: örnekleme yöntemleri ve yanlılık kaynakları, gözlemsel çalışmalar ve deneyler, deney tasarımının ilkeleri."),
                    L("frq", "FRQ Practice 1", "Questions on formulating questions and collecting data (Practices 1 and 2).", "Soru oluşturma ve veri toplama üzerine sorular (Pratik 1 ve 2).")
                ]
            },
            {
                title: { en: "Part 2: Probability and Distributions", tr: "2. Bölüm: Olasılık ve Dağılımlar" },
                note: { en: "Covers Unit 2 (Probability, Random Variables, and Probability Distributions).", tr: "2. Üniteyi (Probability, Random Variables, and Probability Distributions) kapsar." },
                lessons: [
                    L("core", "Core 5 / Unit 2", "Probability rules, conditional probability, independence, two-way tables and tree diagrams.", "Olasılık kuralları, koşullu olasılık, bağımsızlık, iki yönlü tablolar ve ağaç diyagramları."),
                    L("core", "Core 6 / Unit 2", "Discrete random variables: probability distributions, mean and standard deviation; the binomial distribution.", "Kesikli rastgele değişkenler: olasılık dağılımları, ortalama ve standart sapma; binom dağılımı."),
                    L("core", "Core 7 / Unit 2", "Sampling distributions of a sample proportion and a sample mean; the Central Limit Theorem.", "Örneklem oranının ve örneklem ortalamasının örnekleme dağılımları; Merkezi Limit Teoremi."),
                    L("frq", "FRQ Practice 2", "Probability and sampling distribution questions, including the multiple-choice question sets on this unit.", "Olasılık ve örnekleme dağılımı soruları; bu üniteye ait çoktan seçmeli soru setleri dahil.")
                ]
            },
            {
                title: { en: "Part 3: Inference", tr: "3. Bölüm: Çıkarım" },
                note: { en: "Covers Unit 3 (Inference for Categorical Data: Proportions) and Unit 4 (Inference for Quantitative Data: Means).", tr: "3. Üniteyi (Inference for Categorical Data: Proportions) ve 4. Üniteyi (Inference for Quantitative Data: Means) kapsar." },
                lessons: [
                    L("core", "Core 8 / Unit 3", "The logic of confidence intervals; confidence intervals for one proportion: conditions, calculation, and interpretation.", "Güven aralığının mantığı; tek oran için güven aralığı: koşullar, hesaplama ve yorum."),
                    L("core", "Core 9 / Unit 3", "The logic of significance tests: hypotheses, p-values, conclusions, Type I and Type II errors; tests for one proportion.", "Anlamlılık testinin mantığı: hipotezler, p-değeri, sonuç, I. ve II. tip hatalar; tek oran testi."),
                    L("core", "Core 10 / Unit 3", "Inference for the difference of two proportions; inference for categorical data in two-way tables.", "İki oranın farkı için çıkarım; iki yönlü tablolardaki kategorik veri için çıkarım."),
                    L("frq", "FRQ Practice 3", "Inference for proportions: writing a complete inference response (state, plan, do, conclude).", "Oranlar için çıkarım: eksiksiz bir çıkarım yanıtı yazma (belirt, planla, uygula, sonuçlandır)."),
                    L("core", "Core 11 / Unit 4", "The t-distributions; confidence intervals and tests for one mean.", "t-dağılımları; tek ortalama için güven aralığı ve test."),
                    L("core", "Core 12 / Unit 4", "Inference for the difference of two means and for paired data; choosing the right procedure.", "İki ortalamanın farkı ve eşleştirilmiş veri için çıkarım; doğru yöntemi seçme."),
                    L("frq", "FRQ Practice 4", "Inference for means; questions that combine data collection, analysis, and inference.", "Ortalamalar için çıkarım; veri toplama, analiz ve çıkarımı birleştiren sorular.")
                ]
            },
            {
                title: { en: "Part 4: Regression and Exam Simulation", tr: "4. Bölüm: Regresyon ve Sınav Simülasyonu" },
                note: { en: "Covers Unit 5 (Regression Analysis) and comprehensive exam practice.", tr: "5. Üniteyi (Regression Analysis) ve kapsamlı sınav çalışmasını kapsar." },
                lessons: [
                    L("core", "Core 13 / Unit 5", "Scatterplots, correlation, the least-squares regression line, residuals, interpreting slope, intercept, and r-squared; reading computer output.", "Saçılım grafikleri, korelasyon, en küçük kareler regresyon doğrusu, artıklar; eğim, kesişim ve r-kare yorumu; bilgisayar çıktısı okuma."),
                    L("mcq", "", "Multiple-choice strategies, question sets, and the calculator skills the exam expects.", "Çoktan seçmeli stratejileri, soru setleri ve sınavın beklediği hesap makinesi becerileri."),
                    L("frq", "FRQ Practice 5", "Full-scope mixed exam simulation with all four free-response question types (time management and scoring according to AP rubrics).", "Dört açık uçlu soru tipinin tamamını içeren karma sınav simülasyonu (zaman yönetimi ve AP rubriklerine göre puanlama)."),
                    L("eval", "", "Simulation analysis, addressing common mistakes, and course wrap-up.", "Simülasyon analizi, sık yapılan hataların ele alınması ve ders kapanışı.")
                ]
            }
        ]
    },

    // =====================================================================
    // AP PHYSICS 1 — TASLAK (College Board CED, 8 ünite; 2024-25 revizyonu)
    // =====================================================================
    "ap-physics": {
        draft: true,
        title: { en: "AP Physics 1: 22-Lesson Curriculum Plan", tr: "AP Physics 1: 22 Derslik Müfredat Planı" },
        intro: {
            en: [
                "This program follows the 8 units of the College Board AP Physics 1: Algebra-Based Course and Exam Description, including Unit 8 (Fluids), which moved into AP Physics 1 with the 2024-25 revision.",
                "Each block of core lessons is followed by FRQ (free-response question) practice, and the program ends with a full exam simulation."
            ],
            tr: [
                "Bu program, College Board AP Physics 1: Algebra-Based müfredatının (Course and Exam Description) 8 ünitesini izler; 2024-25 revizyonuyla AP Physics 1'e taşınan 8. Ünite (Fluids) dahildir.",
                "Her konu bloğunun ardından FRQ (açık uçlu soru) çalışması yapılır ve program tam bir sınav simülasyonuyla biter."
            ]
        },
        lessons: 22,
        minutes: 90,
        flow: problemFlow,
        parts: [
            {
                title: { en: "Part 1: Motion and Forces", tr: "1. Bölüm: Hareket ve Kuvvetler" },
                note: { en: "Covers Unit 1 (Kinematics) and Unit 2 (Force and Translational Dynamics).", tr: "1. Üniteyi (Kinematics) ve 2. Üniteyi (Force and Translational Dynamics) kapsar." },
                lessons: [
                    L("core", "Core 1 / Unit 1", "Scalars and vectors, displacement, velocity, and acceleration; motion graphs and the kinematic equations in one dimension.", "Skalerler ve vektörler; yer değiştirme, hız ve ivme; hareket grafikleri ve tek boyutta kinematik denklemleri."),
                    L("core", "Core 2 / Unit 1", "Motion in two dimensions, projectile motion, and reference frames with relative motion.", "İki boyutta hareket, eğik atış ve referans sistemleriyle bağıl hareket."),
                    L("core", "Core 3 / Unit 2", "Systems and center of mass, free-body diagrams, Newton's three laws.", "Sistemler ve kütle merkezi, serbest cisim diyagramları, Newton'ın üç yasası."),
                    L("core", "Core 4 / Unit 2", "Gravitational force, friction, spring forces, inclines, and connected objects.", "Kütle çekim kuvveti, sürtünme, yay kuvvetleri, eğik düzlemler ve bağlı cisimler."),
                    L("core", "Core 5 / Unit 2", "Circular motion, centripetal acceleration, and orbits.", "Dairesel hareket, merkezcil ivme ve yörüngeler."),
                    L("frq", "FRQ Practice 1", "Kinematics and dynamics questions: mathematical routines and translation between representations.", "Kinematik ve dinamik soruları: matematiksel işlemler ve gösterimler arası geçiş.")
                ]
            },
            {
                title: { en: "Part 2: Energy and Momentum", tr: "2. Bölüm: Enerji ve Momentum" },
                note: { en: "Covers Unit 3 (Work, Energy, and Power) and Unit 4 (Linear Momentum).", tr: "3. Üniteyi (Work, Energy, and Power) ve 4. Üniteyi (Linear Momentum) kapsar." },
                lessons: [
                    L("core", "Core 6 / Unit 3", "Work, kinetic energy, and the work-energy theorem; potential energy.", "İş, kinetik enerji ve iş-enerji teoremi; potansiyel enerji."),
                    L("core", "Core 7 / Unit 3", "Conservation of energy, energy bar charts, and power.", "Enerjinin korunumu, enerji sütun grafikleri ve güç."),
                    L("core", "Core 8 / Unit 4", "Linear momentum, impulse, and the impulse-momentum theorem.", "Çizgisel momentum, itme ve itme-momentum teoremi."),
                    L("core", "Core 9 / Unit 4", "Conservation of momentum; elastic and inelastic collisions; motion of the center of mass.", "Momentumun korunumu; esnek ve esnek olmayan çarpışmalar; kütle merkezinin hareketi."),
                    L("frq", "FRQ Practice 2", "Energy and momentum questions, including experimental design and analysis questions.", "Enerji ve momentum soruları; deney tasarımı ve analizi soruları dahil.")
                ]
            },
            {
                title: { en: "Part 3: Rotation, Oscillations, and Fluids", tr: "3. Bölüm: Dönme, Salınımlar ve Akışkanlar" },
                note: { en: "Covers Unit 5 (Torque and Rotational Dynamics), Unit 6 (Energy and Momentum of Rotating Systems), Unit 7 (Oscillations), and Unit 8 (Fluids).", tr: "5. Üniteyi (Torque and Rotational Dynamics), 6. Üniteyi (Energy and Momentum of Rotating Systems), 7. Üniteyi (Oscillations) ve 8. Üniteyi (Fluids) kapsar." },
                lessons: [
                    L("core", "Core 10 / Unit 5", "Rotational kinematics and the link between linear and rotational motion; torque.", "Dönme kinematiği ve doğrusal hareketle dönme hareketi arasındaki bağ; tork."),
                    L("core", "Core 11 / Unit 5", "Rotational inertia, rotational equilibrium, and Newton's second law in rotational form.", "Eylemsizlik momenti, dönme dengesi ve Newton'ın ikinci yasasının dönme biçimi."),
                    L("core", "Core 12 / Unit 6", "Rotational kinetic energy, angular momentum and its conservation, rolling motion, and the motion of orbiting satellites.", "Dönme kinetik enerjisi, açısal momentum ve korunumu, yuvarlanma hareketi ve yörüngedeki uyduların hareketi."),
                    L("core", "Core 13 / Unit 7", "Simple harmonic motion: springs and pendulums, period and frequency, energy in oscillating systems.", "Basit harmonik hareket: yaylar ve sarkaçlar, periyot ve frekans, salınan sistemlerde enerji."),
                    L("core", "Core 14 / Unit 8", "Density and pressure, buoyancy and Archimedes' principle.", "Yoğunluk ve basınç, kaldırma kuvveti ve Arşimet prensibi."),
                    L("core", "Core 15 / Unit 8", "Fluid flow: the continuity equation and Bernoulli's equation.", "Akışkan akışı: süreklilik denklemi ve Bernoulli denklemi."),
                    L("frq", "FRQ Practice 3", "Rotation, oscillation, and fluids questions, including qualitative/quantitative translation questions.", "Dönme, salınım ve akışkan soruları; nitel/nicel çeviri soruları dahil.")
                ]
            },
            {
                title: { en: "Part 4: Exam Practice and Simulation", tr: "4. Bölüm: Sınav Çalışması ve Simülasyon" },
                note: { en: "Comprehensive exam practice for both sections of the exam.", tr: "Sınavın iki bölümü için kapsamlı sınav çalışması." },
                lessons: [
                    L("frq", "FRQ Practice 4", "Experimental design and analysis: planning a procedure, linearizing data, and drawing conclusions from graphs.", "Deney tasarımı ve analizi: yöntem planlama, veriyi doğrusallaştırma ve grafiklerden sonuç çıkarma."),
                    L("mcq", "", "Multiple-choice strategies and conceptual reasoning without calculation.", "Çoktan seçmeli stratejileri ve hesaplama yapmadan kavramsal akıl yürütme."),
                    L("frq", "FRQ Practice 5", "Full-scope mixed exam simulation (time management and scoring according to AP rubrics).", "Tüm kapsamı içeren karma sınav simülasyonu (zaman yönetimi ve AP rubriklerine göre puanlama)."),
                    L("eval", "", "Simulation analysis, addressing common mistakes, and course wrap-up.", "Simülasyon analizi, sık yapılan hataların ele alınması ve ders kapanışı.")
                ]
            }
        ]
    },

    // =====================================================================
    // IB MATHEMATICS: ANALYSIS AND APPROACHES — TASLAK (2021 ilk sınavlı kılavuz, 5 konu alanı)
    // =====================================================================
    "ib-math": {
        draft: true,
        title: { en: "IB Mathematics AA (SL & HL): 25-Lesson Curriculum Plan", tr: "IB Matematik AA (SL & HL): 25 Derslik Müfredat Planı" },
        intro: {
            en: [
                "This program follows the five topics of the IB Mathematics: Analysis and Approaches guide (first assessment 2021): Number and Algebra, Functions, Geometry and Trigonometry, Statistics and Probability, and Calculus. Lessons marked HL only cover the additional higher level content.",
                "Each topic ends with practice on past-paper style questions for Paper 1 (no calculator) and Paper 2 (calculator)."
            ],
            tr: [
                "Bu program, IB Mathematics: Analysis and Approaches kılavuzunun (ilk sınav 2021) beş konu alanını izler: Number and Algebra, Functions, Geometry and Trigonometry, Statistics and Probability ve Calculus. \"Yalnızca HL\" olarak işaretli dersler Higher Level'a özel ek içeriği kapsar.",
                "Her konu alanı, Paper 1 (hesap makinesiz) ve Paper 2 (hesap makineli) için çıkmış sınav tarzı sorularla biter."
            ]
        },
        lessons: 25,
        minutes: 90,
        flow: problemFlow,
        parts: [
            {
                title: { en: "Part 1: Number and Algebra, Functions", tr: "1. Bölüm: Sayılar ve Cebir, Fonksiyonlar" },
                note: { en: "Covers Topic 1 (Number and Algebra) and Topic 2 (Functions).", tr: "1. Konuyu (Number and Algebra) ve 2. Konuyu (Functions) kapsar." },
                lessons: [
                    L("core", "Core 1 / Topic 1", "Arithmetic and geometric sequences and series, sigma notation, financial applications, sum to infinity.", "Aritmetik ve geometrik diziler ve seriler, sigma gösterimi, finans uygulamaları, sonsuz toplam."),
                    L("core", "Core 2 / Topic 1", "Exponents and logarithms, laws of logarithms, the binomial theorem, simple deductive proof.", "Üslü ifadeler ve logaritma, logaritma kuralları, binom teoremi, basit tümdengelimli ispat."),
                    L("core", "Core 3 / Topic 1 (HL only)", "Counting principles, proof by induction and by contradiction, complex numbers, systems of linear equations.", "Sayma prensipleri, tümevarımla ve çelişkiyle ispat, karmaşık sayılar, doğrusal denklem sistemleri."),
                    L("core", "Core 4 / Topic 2", "Functions: domain and range, composite and inverse functions, graphs and their key features, transformations.", "Fonksiyonlar: tanım ve değer kümesi, bileşke ve ters fonksiyonlar, grafikler ve temel özellikleri, dönüşümler."),
                    L("core", "Core 5 / Topic 2", "Quadratic, rational, exponential, and logarithmic functions; solving equations graphically and analytically.", "İkinci dereceden, rasyonel, üstel ve logaritmik fonksiyonlar; denklemleri grafikle ve analitik yolla çözme."),
                    L("core", "Core 6 / Topic 2 (HL only)", "Polynomial functions, the factor and remainder theorems, further rational functions, odd and even functions, inequalities, the modulus function.", "Polinom fonksiyonlar, çarpan ve kalan teoremleri, ileri düzey rasyonel fonksiyonlar, tek ve çift fonksiyonlar, eşitsizlikler, mutlak değer fonksiyonu."),
                    L("paper", "Paper Practice 1", "Past-paper style questions on Topics 1 and 2: Paper 1 and Paper 2 technique.", "1. ve 2. Konulardan çıkmış sınav tarzı sorular: Paper 1 ve Paper 2 tekniği.")
                ]
            },
            {
                title: { en: "Part 2: Geometry and Trigonometry", tr: "2. Bölüm: Geometri ve Trigonometri" },
                note: { en: "Covers Topic 3 (Geometry and Trigonometry).", tr: "3. Konuyu (Geometry and Trigonometry) kapsar." },
                lessons: [
                    L("core", "Core 7 / Topic 3", "Three-dimensional geometry, right-angled and non-right-angled trigonometry, the sine and cosine rules, radians, arcs and sectors.", "Üç boyutlu geometri, dik ve dik olmayan üçgenlerde trigonometri, sinüs ve kosinüs teoremleri, radyan, yaylar ve daire dilimleri."),
                    L("core", "Core 8 / Topic 3", "The unit circle, trigonometric identities, trigonometric functions and their graphs, solving trigonometric equations.", "Birim çember, trigonometrik özdeşlikler, trigonometrik fonksiyonlar ve grafikleri, trigonometrik denklemlerin çözümü."),
                    L("core", "Core 9 / Topic 3 (HL only)", "Reciprocal and inverse trigonometric functions, compound angle identities.", "Çarpmaya göre ters ve ters trigonometrik fonksiyonlar, toplam-fark açı özdeşlikleri."),
                    L("core", "Core 10 / Topic 3 (HL only)", "Vectors: scalar and vector products, equations of lines and planes, intersections and angles.", "Vektörler: skaler ve vektörel çarpım, doğru ve düzlem denklemleri, kesişimler ve açılar."),
                    L("paper", "Paper Practice 2", "Past-paper style questions on Topic 3.", "3. Konudan çıkmış sınav tarzı sorular.")
                ]
            },
            {
                title: { en: "Part 3: Statistics and Probability", tr: "3. Bölüm: İstatistik ve Olasılık" },
                note: { en: "Covers Topic 4 (Statistics and Probability).", tr: "4. Konuyu (Statistics and Probability) kapsar." },
                lessons: [
                    L("core", "Core 11 / Topic 4", "Sampling, presenting data, measures of central tendency and dispersion, correlation and linear regression.", "Örnekleme, verinin sunumu, merkezi eğilim ve yayılım ölçüleri, korelasyon ve doğrusal regresyon."),
                    L("core", "Core 12 / Topic 4", "Probability, conditional probability, and independent events; discrete random variables and expected value.", "Olasılık, koşullu olasılık ve bağımsız olaylar; kesikli rastgele değişkenler ve beklenen değer."),
                    L("core", "Core 13 / Topic 4", "The binomial and normal distributions; standardization and inverse normal calculations. HL only: Bayes' theorem and continuous random variables.", "Binom ve normal dağılımlar; standartlaştırma ve ters normal hesapları. Yalnızca HL: Bayes teoremi ve sürekli rastgele değişkenler."),
                    L("paper", "Paper Practice 3", "Past-paper style questions on Topic 4, with efficient use of the graphic display calculator.", "4. Konudan çıkmış sınav tarzı sorular; grafik hesap makinesinin verimli kullanımıyla.")
                ]
            },
            {
                title: { en: "Part 4: Calculus", tr: "4. Bölüm: Kalkülüs" },
                note: { en: "Covers Topic 5 (Calculus).", tr: "5. Konuyu (Calculus) kapsar." },
                lessons: [
                    L("core", "Core 14 / Topic 5", "Limits and the derivative, rules of differentiation: power, chain, product, and quotient rules.", "Limit ve türev; türev alma kuralları: kuvvet, zincir, çarpım ve bölüm kuralları."),
                    L("core", "Core 15 / Topic 5", "Tangents and normals, stationary points, the second derivative, points of inflexion, optimization.", "Teğetler ve normaller, durağan noktalar, ikinci türev, büküm noktaları, optimizasyon."),
                    L("core", "Core 16 / Topic 5", "Integration as anti-differentiation, definite integrals, areas under and between curves, integration by substitution; kinematics: displacement, velocity, acceleration, and total distance travelled.", "Ters türev olarak integral, belirli integral, eğri altındaki ve eğriler arasındaki alanlar, değişken değiştirme; kinematik: yer değiştirme, hız, ivme ve alınan toplam yol."),
                    L("core", "Core 17 / Topic 5 (HL only)", "Continuity and differentiability, L'Hôpital's rule, implicit differentiation, related rates.", "Süreklilik ve türevlenebilirlik, L'Hôpital kuralı, kapalı türev, bağlı oranlar."),
                    L("core", "Core 18 / Topic 5 (HL only)", "Integration by parts and partial fractions, volumes of revolution, differential equations, Maclaurin series.", "Kısmi integrasyon ve basit kesirlere ayırma, dönel cisimlerin hacmi, diferansiyel denklemler, Maclaurin serileri."),
                    L("paper", "Paper Practice 4", "Past-paper style questions on Topic 5.", "5. Konudan çıkmış sınav tarzı sorular.")
                ]
            },
            {
                title: { en: "Part 5: Exam Practice and Simulation", tr: "5. Bölüm: Sınav Çalışması ve Simülasyon" },
                note: { en: "Comprehensive exam practice on full papers.", tr: "Tam sınav kâğıtları üzerinde kapsamlı sınav çalışması." },
                lessons: [
                    L("sim", "", "Full Paper 1 simulation (no calculator), with time management and marking according to the markscheme.", "Tam Paper 1 simülasyonu (hesap makinesiz); zaman yönetimi ve cevap anahtarına (markscheme) göre puanlama."),
                    L("sim", "", "Full Paper 2 simulation (calculator). HL only: Paper 3 extended problem-solving questions.", "Tam Paper 2 simülasyonu (hesap makineli). Yalnızca HL: Paper 3 genişletilmiş problem çözme soruları."),
                    L("eval", "", "Simulation analysis, addressing common mistakes, and course wrap-up.", "Simülasyon analizi, sık yapılan hataların ele alınması ve ders kapanışı.")
                ]
            }
        ]
    },

    // =====================================================================
    // IB PHYSICS — TASLAK (ilk sınav 2025; A-E temaları)
    // =====================================================================
    "ib-physics": {
        draft: true,
        title: { en: "IB Physics (SL & HL): 25-Lesson Curriculum Plan", tr: "IB Fizik (SL & HL): 25 Derslik Müfredat Planı" },
        intro: {
            en: [
                "This program follows the five themes of the IB Physics guide with first assessment in 2025: A (Space, time and motion), B (The particulate nature of matter), C (Wave behaviour), D (Fields), and E (Nuclear and quantum physics). Lessons marked HL only cover the additional higher level topics.",
                "Each theme ends with practice on exam-style questions for Paper 1 (multiple-choice and data-based questions) and Paper 2 (short-answer and extended-response questions)."
            ],
            tr: [
                "Bu program, ilk sınavı 2025'te yapılan IB Physics kılavuzunun beş temasını izler: A (Space, time and motion), B (The particulate nature of matter), C (Wave behaviour), D (Fields) ve E (Nuclear and quantum physics). \"Yalnızca HL\" olarak işaretli dersler Higher Level'a özel ek konuları kapsar.",
                "Her tema, Paper 1 (çoktan seçmeli ve veriye dayalı sorular) ve Paper 2 (kısa yanıtlı ve uzun yanıtlı sorular) için sınav tarzı sorularla biter."
            ]
        },
        lessons: 25,
        minutes: 90,
        flow: problemFlow,
        parts: [
            {
                title: { en: "Part 1: Space, Time and Motion", tr: "1. Bölüm: Uzay, Zaman ve Hareket" },
                note: { en: "Covers Theme A (Space, time and motion).", tr: "A Temasını (Space, time and motion) kapsar." },
                lessons: [
                    L("core", "Core 1 / A.1", "Kinematics: motion graphs, the equations of uniformly accelerated motion, projectile motion.", "Kinematik: hareket grafikleri, sabit ivmeli hareket denklemleri, eğik atış."),
                    L("core", "Core 2 / A.2", "Forces and momentum: Newton's laws, free-body diagrams, friction, impulse, conservation of momentum, circular motion.", "Kuvvetler ve momentum: Newton yasaları, serbest cisim diyagramları, sürtünme, itme, momentumun korunumu, dairesel hareket."),
                    L("core", "Core 3 / A.3", "Work, energy and power: conservation of energy, efficiency, energy density.", "İş, enerji ve güç: enerjinin korunumu, verim, enerji yoğunluğu."),
                    L("core", "Core 4 / A.4 (HL only)", "Rigid body mechanics: torque, rotational equilibrium, moment of inertia, angular momentum.", "Katı cisim mekaniği: tork, dönme dengesi, eylemsizlik momenti, açısal momentum."),
                    L("core", "Core 5 / A.5 (HL only)", "Galilean and special relativity: postulates, time dilation, length contraction, space-time diagrams.", "Galileo göreliliği ve özel görelilik: postülatlar, zaman genişlemesi, boy kısalması, uzay-zaman diyagramları."),
                    L("paper", "Paper Practice 1", "Exam-style questions on Theme A.", "A Temasından sınav tarzı sorular.")
                ]
            },
            {
                title: { en: "Part 2: The Particulate Nature of Matter", tr: "2. Bölüm: Maddenin Tanecikli Yapısı" },
                note: { en: "Covers Theme B (The particulate nature of matter).", tr: "B Temasını (The particulate nature of matter) kapsar." },
                lessons: [
                    L("core", "Core 6 / B.1 - B.2", "Thermal energy transfers: temperature, specific heat capacity and latent heat, conduction, convection, and radiation; the greenhouse effect.", "Isıl enerji aktarımı: sıcaklık, öz ısı ve gizli ısı, iletim, konveksiyon ve ışıma; sera etkisi."),
                    L("core", "Core 7 / B.3", "Gas laws: pressure, the ideal gas equation, the kinetic model of an ideal gas.", "Gaz yasaları: basınç, ideal gaz denklemi, ideal gazın kinetik modeli."),
                    L("core", "Core 8 / B.4 (HL only)", "Thermodynamics: the first and second laws, entropy, heat engines and cycles.", "Termodinamik: birinci ve ikinci yasa, entropi, ısı makineleri ve çevrimler."),
                    L("core", "Core 9 / B.5", "Current and circuits: resistance, Ohm's law, series and parallel circuits, emf and internal resistance.", "Akım ve devreler: direnç, Ohm yasası, seri ve paralel devreler, emk ve iç direnç."),
                    L("paper", "Paper Practice 2", "Exam-style questions on Theme B.", "B Temasından sınav tarzı sorular.")
                ]
            },
            {
                title: { en: "Part 3: Wave Behaviour", tr: "3. Bölüm: Dalga Davranışı" },
                note: { en: "Covers Theme C (Wave behaviour).", tr: "C Temasını (Wave behaviour) kapsar." },
                lessons: [
                    L("core", "Core 10 / C.1 - C.2", "Simple harmonic motion and the wave model: transverse and longitudinal waves, wave speed, the electromagnetic spectrum.", "Basit harmonik hareket ve dalga modeli: enine ve boyuna dalgalar, dalga hızı, elektromanyetik spektrum."),
                    L("core", "Core 11 / C.3", "Wave phenomena: reflection, refraction, diffraction, superposition, and double-slit interference.", "Dalga olayları: yansıma, kırılma, kırınım, girişim (süperpozisyon) ve çift yarık girişimi."),
                    L("core", "Core 12 / C.4 - C.5", "Standing waves and resonance in strings and pipes; the Doppler effect.", "Tellerde ve borularda duran dalgalar ve rezonans; Doppler etkisi."),
                    L("paper", "Paper Practice 3", "Exam-style questions on Theme C. HL only: the additional HL content of C.1, C.3, and C.5.", "C Temasından sınav tarzı sorular. Yalnızca HL: C.1, C.3 ve C.5'in HL'a özel ek içeriği.")
                ]
            },
            {
                title: { en: "Part 4: Fields", tr: "4. Bölüm: Alanlar" },
                note: { en: "Covers Theme D (Fields).", tr: "D Temasını (Fields) kapsar." },
                lessons: [
                    L("core", "Core 13 / D.1", "Gravitational fields: Newton's law of gravitation, field strength, orbits and Kepler's laws. HL only: gravitational potential and escape speed.", "Kütle çekim alanları: Newton'ın kütle çekim yasası, alan şiddeti, yörüngeler ve Kepler yasaları. Yalnızca HL: kütle çekim potansiyeli ve kaçış hızı."),
                    L("core", "Core 14 / D.2", "Electric and magnetic fields: Coulomb's law, electric field strength, field lines. HL only: electric potential.", "Elektrik ve manyetik alanlar: Coulomb yasası, elektrik alan şiddeti, alan çizgileri. Yalnızca HL: elektrik potansiyeli."),
                    L("core", "Core 15 / D.3", "Motion in electromagnetic fields: forces on charges and on current-carrying conductors.", "Elektromanyetik alanlarda hareket: yüklere ve akım taşıyan iletkenlere etkiyen kuvvetler."),
                    L("core", "Core 16 / D.4 (HL only)", "Induction: magnetic flux, Faraday's and Lenz's laws, generators and alternating current.", "İndüksiyon: manyetik akı, Faraday ve Lenz yasaları, jeneratörler ve alternatif akım."),
                    L("paper", "Paper Practice 4", "Exam-style questions on Theme D.", "D Temasından sınav tarzı sorular.")
                ]
            },
            {
                title: { en: "Part 5: Nuclear and Quantum Physics, Exam Simulation", tr: "5. Bölüm: Nükleer ve Kuantum Fiziği, Sınav Simülasyonu" },
                note: { en: "Covers Theme E (Nuclear and quantum physics) and comprehensive exam practice.", tr: "E Temasını (Nuclear and quantum physics) ve kapsamlı sınav çalışmasını kapsar." },
                lessons: [
                    L("core", "Core 17 / E.1 - E.2", "Structure of the atom: emission and absorption spectra, energy levels. HL only: quantum physics, including the photoelectric effect and matter waves.", "Atomun yapısı: yayınım ve soğurma spektrumları, enerji düzeyleri. Yalnızca HL: fotoelektrik olay ve madde dalgaları dahil kuantum fiziği."),
                    L("core", "Core 18 / E.3", "Radioactive decay: alpha, beta, and gamma decay, half-life, mass defect and binding energy.", "Radyoaktif bozunma: alfa, beta ve gama bozunmaları, yarı ömür, kütle açığı ve bağlanma enerjisi."),
                    L("core", "Core 19 / E.4 - E.5", "Fission and nuclear power; fusion and stars, the Hertzsprung-Russell diagram, and stellar evolution.", "Fisyon ve nükleer enerji; füzyon ve yıldızlar, Hertzsprung-Russell diyagramı ve yıldız evrimi."),
                    L("sim", "", "Full Paper 1 and Paper 2 simulation, with time management and marking according to the markscheme.", "Tam Paper 1 ve Paper 2 simülasyonu; zaman yönetimi ve cevap anahtarına (markscheme) göre puanlama."),
                    L("eval", "", "Simulation analysis, addressing common mistakes, and course wrap-up.", "Simülasyon analizi, sık yapılan hataların ele alınması ve ders kapanışı.")
                ]
            }
        ]
    },

    // =====================================================================
    // SAT MATH — TASLAK (Digital SAT, 4 içerik alanı)
    // =====================================================================
    "sat-math": {
        draft: true,
        title: { en: "SAT Math: 16-Lesson Curriculum Plan (Digital SAT)", tr: "SAT Matematik: 16 Derslik Müfredat Planı (Digital SAT)" },
        intro: {
            en: [
                "This program follows the four content domains of the Digital SAT Math section: Algebra, Advanced Math, Problem-Solving and Data Analysis, and Geometry and Trigonometry.",
                "Algebra and Advanced Math make up most of the section, so they receive the most lessons. Each domain ends with timed practice, and the program ends with full adaptive-format simulations, including work with the built-in Desmos calculator."
            ],
            tr: [
                "Bu program, Digital SAT Matematik bölümünün dört içerik alanını izler: Algebra, Advanced Math, Problem-Solving and Data Analysis ve Geometry and Trigonometry.",
                "Bölümün büyük kısmını Algebra ve Advanced Math oluşturduğu için en çok ders bu alanlara ayrılmıştır. Her alan süreli çalışmayla, program ise sınavın içindeki Desmos hesap makinesinin kullanımını da içeren, uyarlanabilir (adaptive) formatta tam simülasyonlarla biter."
            ]
        },
        lessons: 16,
        minutes: 90,
        flow: problemFlow,
        parts: [
            {
                title: { en: "Part 1: Algebra", tr: "1. Bölüm: Algebra" },
                note: { en: "Linear equations, functions, systems, and inequalities.", tr: "Doğrusal denklemler, fonksiyonlar, sistemler ve eşitsizlikler." },
                lessons: [
                    L("core", "Core 1 / Algebra", "Linear equations in one and two variables; slope, intercepts, and the forms of a line.", "Bir ve iki bilinmeyenli doğrusal denklemler; eğim, kesişimler ve doğru denkleminin biçimleri."),
                    L("core", "Core 2 / Algebra", "Linear functions and word problems: building an equation from a context.", "Doğrusal fonksiyonlar ve sözel problemler: bağlamdan denklem kurma."),
                    L("core", "Core 3 / Algebra", "Systems of two linear equations; linear inequalities in one and two variables.", "İki bilinmeyenli doğrusal denklem sistemleri; bir ve iki bilinmeyenli doğrusal eşitsizlikler."),
                    L("practice", "Practice 1", "Timed Algebra practice at Module 1 and Module 2 difficulty.", "Modül 1 ve Modül 2 zorluğunda süreli Algebra çalışması.")
                ]
            },
            {
                title: { en: "Part 2: Advanced Math", tr: "2. Bölüm: Advanced Math" },
                note: { en: "Nonlinear equations and functions.", tr: "Doğrusal olmayan denklemler ve fonksiyonlar." },
                lessons: [
                    L("core", "Core 4 / Advanced Math", "Equivalent expressions: factoring, expanding, exponents, and radicals.", "Denk ifadeler: çarpanlara ayırma, açılım, üslü ve köklü ifadeler."),
                    L("core", "Core 5 / Advanced Math", "Quadratic equations and functions: factoring, the quadratic formula, vertex form, and the discriminant.", "İkinci dereceden denklemler ve fonksiyonlar: çarpanlara ayırma, kök formülü, tepe noktası biçimi ve diskriminant."),
                    L("core", "Core 6 / Advanced Math", "Exponential functions and growth and decay models; polynomial, rational, radical, and absolute value equations.", "Üstel fonksiyonlar, büyüme ve azalma modelleri; polinom, rasyonel, köklü ve mutlak değerli denklemler."),
                    L("core", "Core 7 / Advanced Math", "Nonlinear functions and their graphs; systems with one linear and one nonlinear equation.", "Doğrusal olmayan fonksiyonlar ve grafikleri; biri doğrusal biri doğrusal olmayan denklem sistemleri."),
                    L("practice", "Practice 2", "Timed Advanced Math practice at Module 1 and Module 2 difficulty.", "Modül 1 ve Modül 2 zorluğunda süreli Advanced Math çalışması.")
                ]
            },
            {
                title: { en: "Part 3: Data Analysis, Geometry and Trigonometry", tr: "3. Bölüm: Veri Analizi, Geometri ve Trigonometri" },
                note: { en: "Covers Problem-Solving and Data Analysis and Geometry and Trigonometry.", tr: "Problem-Solving and Data Analysis ile Geometry and Trigonometry alanlarını kapsar." },
                lessons: [
                    L("core", "Core 8 / Problem-Solving and Data Analysis", "Ratios, rates, proportions, units, and percentages.", "Oran, orantı, birim dönüşümleri ve yüzdeler."),
                    L("core", "Core 9 / Problem-Solving and Data Analysis", "One- and two-variable data: center and spread, scatterplots and models; probability; inference from samples and evaluating statistical claims.", "Tek ve iki değişkenli veri: merkez ve yayılım, saçılım grafikleri ve modeller; olasılık; örneklemden çıkarım ve istatistiksel iddiaların değerlendirilmesi."),
                    L("core", "Core 10 / Geometry and Trigonometry", "Area and volume; lines, angles, and triangles (congruence and similarity); right triangles and trigonometry; circles, radians, and the equation of a circle.", "Alan ve hacim; doğrular, açılar ve üçgenler (eşlik ve benzerlik); dik üçgenler ve trigonometri; çemberler, radyan ve çember denklemi."),
                    L("practice", "Practice 3", "Timed practice on Problem-Solving and Data Analysis and on Geometry and Trigonometry.", "Problem-Solving and Data Analysis ile Geometry and Trigonometry alanlarında süreli çalışma.")
                ]
            },
            {
                title: { en: "Part 4: Strategy and Simulation", tr: "4. Bölüm: Strateji ve Simülasyon" },
                note: { en: "Test strategy and full-length practice in the adaptive digital format.", tr: "Sınav stratejisi ve uyarlanabilir dijital formatta tam uzunlukta çalışma." },
                lessons: [
                    L("mcq", "", "Using the built-in Desmos calculator effectively; multiple-choice and student-produced response strategies; pacing across the two modules.", "Sınavın içindeki Desmos hesap makinesini etkili kullanma; çoktan seçmeli ve yanıtı öğrencinin yazdığı sorular için stratejiler; iki modülde zaman yönetimi."),
                    L("sim", "", "Full two-module Math simulation in the adaptive format, followed by an error analysis.", "Uyarlanabilir formatta iki modüllü tam Matematik simülasyonu ve ardından hata analizi."),
                    L("eval", "", "Second simulation, addressing the remaining weak areas, and course wrap-up.", "İkinci simülasyon, kalan zayıf alanların ele alınması ve ders kapanışı.")
                ]
            }
        ]
    }
};

module.exports = { plans, labels };
