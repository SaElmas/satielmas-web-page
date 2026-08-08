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
});