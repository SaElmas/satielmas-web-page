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
  locales: ['en', 'tr', 'fr'], 
  directory: path.join(__dirname, 'src', 'locales'), 
  defaultLocale: 'en', 
  cookie: 'lang', 
  autoReload: true, 
  syncFiles: true,
  objectNotation: true // EKSİK OLAN SİHİRLİ SATIR BU
});

app.use(i18n.init); // i18n'i Express'e bağla

// (İsteğe Bağlı) EJS içinde tüm dilleri kullanabilmek için global değişken yap
app.use((req, res, next) => {
    res.locals.currentLang = req.cookies.lang || 'en';
    next();
});

// Rotalar
app.use('/', mainRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});