const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const CalendarSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    require: true,
  },
  calendarTitle: {
    require: true,
    type: String,
  },
  calendarContent: {
    require: true,
    type: String,
  },
  calendarDate: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Calendar', CalendarSchema);
