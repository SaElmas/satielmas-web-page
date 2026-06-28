require('dotenv').config()
const express = require('express');
const app = express();
const mainRoutes = require('./src/routes/mainRoutes');

// --- YENİ EKLENEN EJS AYARLARI ---
app.set('view engine', 'ejs');
app.set('views', 'views'); // EJS dosyalarının 'views' klasöründe aranacağını belirtir

// Statik dosyalar (CSS vb.)
app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Rotalar
app.use('/', mainRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});