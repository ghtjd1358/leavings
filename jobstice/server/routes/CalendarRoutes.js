const express = require('express');
const router = express.Router();
const calendarController = require('../controllers/Ccalendar');

router.post('/calendar', calendarController.createCalendar);

// GET 요청
router.get('/calendar/:date', calendarController.getCalendar);

module.exports = router;
