const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const UserSchema = new Schema({
  user_id: {
    required: true,
    unique: true,
    type: String,
  },
  user_password: {
    required: true,
    type: String,
  },
  user_nickname: {
    required: true,
    type: String,
  },
});

module.exports = mongoose.model('user', UserSchema);
