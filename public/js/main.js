// public/js/main.js
document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 1. MOBİL HAMBURGER MENÜ MANTIĞI
    // ==========================================
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');

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
    // 2. MOBİL DİL SEÇİM (DROPDOWN) MANTIĞI - KESİN ÇÖZÜM
    // ==========================================
    const langBtn = document.querySelector('.lang-btn');
    const langContent = document.querySelector('.lang-content');

    if (langBtn && langContent) {
        // Butona tıklandığında/dokunulduğunda
        langBtn.addEventListener('click', (e) => {
            e.preventDefault(); // Etiketin varsayılan zıplama davranışını durdurur
            e.stopPropagation(); // Olayın yayılıp document'ı tetiklemesini engeller
            
            // "show" sınıfını açıp kapatıyoruz
            langContent.classList.toggle('show'); 
        });

        // Menünün veya butonun DIŞINDA bir yere dokunulursa kapat
        document.addEventListener('click', (e) => {
            if (!langContent.contains(e.target) && !langBtn.contains(e.target)) {
                langContent.classList.remove('show');
            }
        });
    }
});