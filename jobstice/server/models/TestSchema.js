const mongoose = require('mongoose');
const { Schema } = mongoose;

// 몽고 DB 스키마에서 어떤 항목을 생성할것인지
const TestSchema = new Schema({
  content: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model('test', TestSchema);
