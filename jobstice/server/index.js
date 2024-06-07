//index.js
const express = require('express');
const mongoose = require('mongoose');
const connect = require('./models/Main.js');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const Ctest = require('./controllers/Ctest.js');
const Cuser = require('./controllers/Cuser.js');

// const createCalendar = require('./controllers/Ccalendar.js');
const calendarRoutes = require('./routes/CalendarRoutes.js');

const app = express();
const port = 3000;

const uri = process.env.DB_KEY;

console.log('환경 변수 확인 :', uri); 

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
      maxRedirects: 5 ,
      headers: {
        'Accept': 'application/json'
      }
    });
    const data = response.data;
    console.log(data);
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('안되는군요');
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

// 달력
app.use('/', calendarRoutes);
// app.post('/', createCalendar.createCalendar);
// app.get(`/`, createCalendar.getCalendar);

app.listen(port, () => {
  console.log(`localhost:${port} open`);
});
