const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

// Ana Sayfa Yönlendirmesi
router.get('/', mainController.getTutoringPage);

// Dil Değiştirme
router.get('/change-lang/:lang', mainController.changeLanguage);

// Tutoring
router.get('/tutoring', mainController.getTutoringPage);
router.get('/tutoring/:courseName', mainController.getCourseDetails);

// Notes
router.get('/notes', mainController.getNotesIndex);

// ÖZEL ROTA: Dinamik rotadan ÖNCE gelmeli ki Express bunu yakalayabilsin!
router.get('/notes/my-readings', mainController.getMyReadingsPage);

// DİNAMİK ROTA: (hungerford-algebra, linear-algebra vb. için)
router.get('/notes/:topic', mainController.getNoteByTopic);

// İletişim
router.get('/contact', mainController.getContactPage);
router.post('/contact', mainController.sendContactEmail);

// ==========================================
// YENİ EKLENEN ROTA: ABOUT ME
// ==========================================
router.get('/about', mainController.getAboutPage);

module.exports = router;