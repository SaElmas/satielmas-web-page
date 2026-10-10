require('dotenv').config()
const express = require('express');
const app = express();
const mainRoutes = require('./src/routes/mainRoutes');
const cookieParser = require('cookie-parser');
const i18n = require('i18n');
const path = require('path');

// --- YENİ EKLENEN EJS AYARLARI ---
app.set('view engine', 'ejs');
app.set('views', 'views'); // EJS dosyalarının 'views' klasöründe aranacağını belirtir

// Statik dosyalar (CSS vb.)
app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cookieParser());

// i18n (Çoklu Dil) Ayarları
i18n.configure({
  locales: ['en', 'tr'], 
  directory: path.join(__dirname, 'src', 'locales'), 
  defaultLocale: 'en', 
  autoReload: true, 
  syncFiles: true,
  objectNotation: true // EKSİK OLAN SİHİRLİ SATIR BU
});

app.use(i18n.init); // i18n'i Express'e bağla

// DİL ADRESTEN BELİRLENİR: İngilizce kökte (/about), Türkçe /tr altında (/tr/about).
// /tr öneki burada ayıklanır; böylece aşağıdaki rotalar iki dil için de aynı kalır.
const SITE_URL = 'https://saitelmas.com';
app.use((req, res, next) => {
    const isTurkish = req.path === '/tr' || req.path.startsWith('/tr/');
    const lang = isTurkish ? 'tr' : 'en';
    if (isTurkish) {
        req.url = req.url.replace(/^\/tr(?=\/|\?|$)/, '') || '/';
        if (!req.url.startsWith('/')) req.url = '/' + req.url;
    }
    req.setLocale(lang);
    res.setLocale(lang);

    // Sayfanın dilden bağımsız yolu (ana sayfa hem / hem /tutoring olarak açılıyor)
    const pagePath = req.path === '/tutoring' ? '/' : req.path;
    const urlFor = (language, pathname) =>
        language === 'tr' ? (pathname === '/' ? '/tr' : '/tr' + pathname) : pathname;

    res.locals.currentLang = lang;
    // Şablonlardaki iç bağlantılar: localUrl('/about') -> /about veya /tr/about
    res.locals.localUrl = (pathname) => urlFor(lang, pathname);
    // Aynı sayfanın iki dildeki adresi (dil menüsü ve hreflang için)
    res.locals.altUrls = { en: urlFor('en', pagePath), tr: urlFor('tr', pagePath) };
    res.locals.siteUrl = SITE_URL;
    // Her sayfanın kalıcı adresi (canonical / og:url için); sorgu parametreleri hariç
    res.locals.canonicalUrl = SITE_URL + urlFor(lang, pagePath);
    next();
});

// Rotalar
app.use('/', mainRoutes);

// Hiçbir rota eşleşmediyse: 404 sayfası
app.use((req, res) => {
    res.status(404).render('404', {
        pageTitle: res.__('not_found.title') + ' | Sait Elmas',
        hreflang: false,
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});