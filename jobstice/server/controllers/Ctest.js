const TestSchema = require('../models/TestSchema');

//  스키마 생성 함수
exports.testWrite = async (req, res) => {
  try {
    console.log(req.body.content);
    await TestSchema.create({
      content: req.body.content,
    });
    res.status(200).json({ message: '데이터가 성공적으로 추가되었습니다.' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: '서버 에러' });
  }
};
