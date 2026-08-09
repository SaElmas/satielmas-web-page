document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 1. MOBİL HAMBURGER MENÜ MANTIĞI
    // ==========================================
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');

            // Menü açıldığında '☰' ikonu 'X' olsun, kapanınca tekrar '☰' olsun
            const icon = mobileMenuBtn.querySelector('i');
            if (icon) {
                if (navLinks.classList.contains('active')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                } else {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
    }

    // ==========================================
    // 2. MOBİL DİL SEÇİM (DROPDOWN) MANTIĞI
    // ==========================================
    const langBtn = document.querySelector('.lang-btn');
    const langContent = document.querySelector('.lang-content');

    if (langBtn && langContent) {
        langBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            langContent.classList.toggle('show'); 
        });

        document.addEventListener('click', (e) => {
            if (!langContent.contains(e.target) && !langBtn.contains(e.target)) {
                langContent.classList.remove('show');
            }
        });
    }

    // ==========================================
    // 3. TUTORING KATEGORİ MENÜSÜ (AKORDEON & TOGGLE)
    // ==========================================
    const categoryLinks = document.querySelectorAll('.category-item > a');

    if (categoryLinks.length > 0) {
        categoryLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                // Sadece href="#" olan, yani sayfa yönlendirmesi yapmayan linklerde çalışsın
                if(link.getAttribute('href') === '#') {
                    e.preventDefault(); // Sayfanın en yukarı zıplamasını engeller
                }
                e.stopPropagation();

                const parent = link.parentElement;

                // Diğer açık olan kategorileri kapat (Akordeon mantığı)
                document.querySelectorAll('.category-item').forEach(item => {
                    if (item !== parent) {
                        item.classList.remove('active');
                    }
                });

                // Tıklanan menüyü Aç/Kapat (Toggle)
                parent.classList.toggle('active');
            });
        });

        // Sayfada boş bir yere tıklandığında açık kategorileri kapat
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.category-nav')) {
                document.querySelectorAll('.category-item').forEach(item => {
                    item.classList.remove('active');
                });
            }
        });
    }
});

