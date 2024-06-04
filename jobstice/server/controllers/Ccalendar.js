const Calendar = require('../models/CalendarSchema');

exports.createCalendar = async (req, res) => {
  const { calendarTitle, calendarContent, calendarDate } = req.body;

  try {
    const newCalendar = new Calendar({
      calendarTitle,
      calendarContent,
      calendarDate,
    });
    await newCalendar.save();
    res.status(201).send(newCalendar);
  } catch (error) {
    res.status(400).send(error);
  }
};
// 캘린더 항목 가져오기
exports.getCalendar = async (req, res) => {
  try {
    const calendars = await Calendar.find();
    res.status(200).send(calendars);
  } catch (error) {
    res.status(400).send(error);
  }
};
