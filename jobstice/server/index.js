//index.js
const express = require('express');
const mongoose = require('mongoose');
const connect = require('./models/Main.js');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios'); 
const Ctest = require('./controllers/Ctest.js');
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
      const response = await axios.get(apiUrl,{
        headers : {
          'Accept' : 'application/sjon'
        }
      });
      const data = response.data; // await 키워드 제거
      console.log(data);
      console.log(data.jobs);

      res.json(data);
  } catch (error) {
      console.error(error);
      res.status(500).send('진짜 ㅈ 같네');
  }
});

app.get('/', (req, res) => {
  res.send('start!');
});

app.post('/', Ctest.testWrite);

app.listen(port, () => {
  console.log(`localhost:${port} open`);
});
