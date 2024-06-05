const UserSchema = require('../models/UserSchema');

exports.register = async (req, res) => {
  const { user_ID, user_PW, user_NickName } = req.body;
  // console.log('백엔드', req.body);
  try {
    console.log('백엔드', req.body);
    await UserSchema.create({
      user_id: user_ID,
      user_password: user_PW,
      user_nickname: user_NickName,
    });
    res.status(200).json({ message: '데이터가 성공적으로 추가되었습니다.' });
  } catch (err) {
    console.log('유저 회원가입 error', err);
    res.status(500).json({ error: '서버 에러' });
  }
};
