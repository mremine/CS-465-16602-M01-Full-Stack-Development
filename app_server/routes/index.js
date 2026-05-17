const express = require('express');
const router = express.Router();

const ctrlMain = require('../controllers/main');

router.get('/', ctrlMain.homelist);
router.get('/about', ctrlMain.about);
router.get('/contact', ctrlMain.contact);
router.get('/travel', ctrlMain.travel);
router.get('/rooms', ctrlMain.rooms);
router.get('/meals', ctrlMain.meals);
router.get('/news', ctrlMain.news);

module.exports = router;