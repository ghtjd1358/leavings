const mongoose = require('mongoose');
const { Schema } = mongoose;

const CalendarSchema = new Schema({
  // user_id: {
  //   type: Schema.Types.ObjectId,
  //   required: true,
  // },
  calendarTitle: {
    type: String,
    required: true
  },
  calendarContent: {
    type: String,
    required: true
  },
  calendarDate: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Calendars', CalendarSchema);
