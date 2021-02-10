require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const mongo = process.env.MONGO_URI;

mongoose
  .connect(mongo, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log('MongoDB Connected...🌼'))
  .catch((err) => console.log(err));

app.use('/api/chart', require('./routes/chart'));
app.use('/api/user', require('./routes/user'));
app.use('/api/youtube', require('./routes/youtube'));

app.listen(5000, () => {
  console.log(`running on 5000`);
});
