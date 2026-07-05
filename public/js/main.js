// public/js/main.js

document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. MOBİL HAMBURGER MENÜ MANTIĞI
    // ==========================================
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');

    // Butona tıklandığında menüye 'active' sınıfını ekle/çıkar
    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');

            // İkonu Hamburger'den X (çarpı) işaretine değiştirme
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
            e.stopPropagation(); // Menünün tıklandığı an kapanmasını engeller
            
            // Eğer menü açıksa kapat, kapalıysa aç
            const isVisible = langContent.style.display === 'block';
            langContent.style.display = isVisible ? 'none' : 'block';
        });

        // Kullanıcı menü dışında bir yere tıkladığında dil menüsünü kapat
        document.addEventListener('click', () => {
            langContent.style.display = 'none';
        });
    }
});