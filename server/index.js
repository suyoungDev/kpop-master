const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const config = require('./config/key');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose
  .connect(config.mongoURI, {
    uesNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log('MongoDB Connected...🌼'))
  .catch((err) => console.log(err));

app.get('/', (req, res) => {
  res.send('🌼hello world🌼');
});

app.get('/api/hello', (req, res) => res.send('🍏 Hello New World!'));

app.listen(5000, () => {
  console.log(`running on 5000`);
});
