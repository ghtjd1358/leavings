//index.js
const express = require('express');
const mongoose = require('mongoose');
const connect = require('./models/Main.js');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const Ctest = require('./controllers/Ctest.js');
const Cuser = require('./controllers/Cuser.js');

const app = express();
const port = 3000;

connect(); // DB 연결 함수

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: '*' }));
app.use(express.json());

app.get('/job-search', async (req, res) => {
  const API_KEY = 'nb9RnTuds2FGu1Og6F5FtuVCuOUgaK3tZc4b2whNemzmlM2mffN6';
  try {
    const apiUrl = `https://oapi.saramin.co.kr/job-search?access-key=${API_KEY}`;
    const response = await axios.get(apiUrl, {
      headers: {
        Accept: 'application/json',
      },
    });
    const data = response.data;
    console.log(data);
    console.log(data.jobs);

    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('서버에서 데이터를 가져오는데 실패했습니다.');
  }
});

app.get('/', (req, res) => {
  res.send('start!');
});

app.post('/', Ctest.testWrite);

// 아이디 중복 체크
app.post('/idCheck', Cuser.idCheck);
// 닉네임 체크
app.post('/nickCheck', Cuser.nickNameCheck);

// 회원가입
app.post('/signup', Cuser.register);

app.listen(port, () => {
  console.log(`localhost:${port} open`);
});
