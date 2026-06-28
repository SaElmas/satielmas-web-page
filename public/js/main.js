// public/js/main.js

document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');

    // Butona tıklandığında menüye 'active' sınıfını ekle/çıkar
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // İkonu Hamburger'den X (çarpı) işaretine değiştirme
        const icon = mobileMenuBtn.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
});