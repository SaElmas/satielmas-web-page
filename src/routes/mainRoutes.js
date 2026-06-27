const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

router.get('/', mainController.getHomePage);

// Buradaki isimler Controller'daki 'exports.isim' kısımlarıyla aynı olmalı!
router.get('/tutoring', mainController.getTutoringPage);
router.get('/resume', mainController.getResumePage);
router.get('/contact', mainController.getContactPage);

module.exports = router;