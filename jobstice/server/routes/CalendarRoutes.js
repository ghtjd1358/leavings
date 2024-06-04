const express = require('express');
const router = express.Router();
const calendarController = require('../controllers/Calendar');

router.post('/calendar', calendarController.createCalendar);

// GET 요청
router.get('/calendar', calendarController.getCalendar);

module.exports = router;
