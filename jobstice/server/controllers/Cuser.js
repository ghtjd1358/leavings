const UserSchema = require('../models/UserSchema');

exports.register = async (req, res) => {
  const { user_ID, user_PW, user_NickName } = req.body;
  // console.log('백엔드', req.body);
  try {
    console.log('백엔드 회원가입', req.body);
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

exports.idCheck = async (req, res) => {
  try {
    const { isID } = req.body;
    // console.log('백엔드 아이디체크', isID);
    const user = await UserSchema.findOne({
      user_id: isID,
    });
    if (!user) {
      res.send({ success: true, message: '사용가능한 아이디입니다.' });
    } else {
      res.send({
        success: false,
        message: '중복되는 아이디가 있습니다.',
      });
    }
  } catch (err) {
    console.log('유저 아이디 error', err);
    res.status(500).json({ error: '서버 에러' });
  }
};

exports.nickNameCheck = async (req, res) => {
  try {
    const { data } = req.body;
    const nickname = await UserSchema.findOne({
      user_nickname: data,
    });
    if (!nickname) {
      res.send({ success: true, message: '사용가능한 닉네임입니다.' });
    } else {
      res.send({
        success: false,
        message: '중복되는 닉네임이 있습니다.',
      });
    }
  } catch (err) {
    console.log('닉네임 error', err);
    res.status(500).json({ error: '서버 에러' });
  }
};
