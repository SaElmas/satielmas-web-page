const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

router.get('/', mainController.getHomePage);

// Buradaki isimler Controller'daki 'exports.isim' kısımlarıyla aynı olmalı!
router.get('/tutoring', mainController.getTutoringPage);
router.get('/tutoring/:courseName', mainController.getCourseDetails)

router.get('/notes', mainController.getNotesIndex);

// ÖZEL ROTA: Dinamik rotadan ÖNCE gelmeli ki Express bunu yakalayabilsin!
router.get('/notes/my-readings', mainController.getMyReadingsPage);

// DİNAMİK ROTA: (hungerford-algebra, linear-algebra vb. için)
router.get('/notes/:topic', mainController.getNoteByTopic);


router.get('/contact', mainController.getContactPage);

router.post('/contact', mainController.sendContactEmail);

module.exports = router;