const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers', (req, res) => {
    res.send([
        {
            'id': '1',
            'image': 'https://placeimg.com/64/64/1',
            'name': '주홍범',
            'birthday': '941018',
            'gender': '남자',
            'job': '개발자'
          },
          {
            'id': '2',
            'image': 'https://placeimg.com/64/64/2',
            'name': '홍길동',
            'birthday': '910101',
            'gender': '남자',
            'job': '의사' 
          },
          {
            'id': '3',
            'image': 'https://placeimg.com/64/64/3',
            'name': '이순신',
            'birthday': '921515',
            'gender': '남자',
            'job': '군인'
          }
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));