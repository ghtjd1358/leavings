const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const UserSchema = new Schema({
  user_id: {
    require: true,
    unique: true,
    type: String,
  },
  user_password: {
    require: true,
    type: String,
  },
  user_nickname: {
    require: true,
    type: String,
  },
});

module.exports = mongoose.model('User', UserSchema);
