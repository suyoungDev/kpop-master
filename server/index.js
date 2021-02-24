const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

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
app.use('/api/game', require('./routes/game'));
app.use('/api/youtube', require('./routes/youtube'));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('cli/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../cli', 'build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`running on ${PORT}`);
});
