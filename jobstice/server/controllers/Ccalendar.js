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
    // console.log('Claender req data >>>>>', req.body);
    res.status(201).json(newCalendar);
  } catch (error) {
    res.status(400).send(error);
  }
};
// 캘린더 항목 가져오기
exports.getCalendar = async (req, res) => {
  const date = req.params.date;

  try {
    const calendarData = await Calendar.findOne({ calendarDate: date });
    if (!calendarData) {
      return res.status(404).json({ message: 'test?' });
    }
    res.status(200).json(calendarData);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

