const express = require('express');
const app = express();
const port = 3000;

const cors = require('cors');
app.use(cors());

app.get('/', (req, resp) => {
  resp.send('WELCOME');
});

app.use(express.urlencoded({ extended: true }));

app.post('/signup', (req, resp) => {
  console.log(req.body);
  resp.send('가입성공');
});
app.get('/product', (req, resp) => {
  let responseObj = [
    { proNo: 'C001', proName: '아메리카노', prodPrice: 1500 },
    { proNo: 'C002', proName: '라떼', prodPrice: 1600 },
    { proNo: 'C003', proName: '카푸치노', prodPrice: 1900 },
  ];
  resp.json(responseObj);
});
app.listen(port, () => {
  console.log('3000번 포트에서 백엔드 서버 실행중');
});
