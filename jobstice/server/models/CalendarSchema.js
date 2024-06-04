const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const CalendarSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    require: true,
  },
  title: {
    require: true,
    type: String,
  },
  content: {
    require: true,
    type: String,
  },
});

module.exports = mongoose.model('Calendar', CalendarSchema);
