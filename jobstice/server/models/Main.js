const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

//  DB 실행 함수
const connect = () => {
  mongoose
    .connect(process.env.DB_KEY, {
      dbName: 'jobstice',
    })
    .then(() => {
      console.log('DB 연결 완료');
    })
    .catch((err) => {
      console.log('DB 연결 실패 > ', err);
    });
};

mongoose.connection.on('error', (error) => {
  console.error('몽고디비 연결 에러', error);
});

mongoose.connection.on('disconnected', () => {
  console.error('몽고디비 연결이 끊겼습니다. 연결을 재시도합니다.');
  connect();
});

module.exports = connect;
