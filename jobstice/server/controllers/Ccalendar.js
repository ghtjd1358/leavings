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
// 특정 날짜의 캘린더 데이터 조회
exports.getCalendar = async (req, res) => {
  const date = req.params.date; // URL에서 날짜를 추출
  console.log('Requested date:', date); // 요청된 날짜 콘솔 출력
  try {
    const events = await Calendar.find({ calendarDate: date });
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


