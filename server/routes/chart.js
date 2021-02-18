const express = require('express');
const router = express.Router();
var melon = require('melon-chart-parser');

router.get('/getBySinger', async (req, res) => {
  var opt = {
    limit: 50,
    type: 'artist',
    term: req.body.singer,
  };

  console.log(req.body);

  var result = await melon
    .parse(opt)
    .then(function (res) {
      const shuffled = res.sort(() => Math.random() - 0.5).slice(0, 10);
      return shuffled.map((item) => item.trackName);
    })
    .catch(function (err) {
      console.log(err);
    });

  res.status(200).json({ success: true, result });
});

router.get('/getByYear', async (req, res) => {
  var opts = {
    limit: 50,
    type: 'year',
    genre: 'KPOP',
    year: req.body.year,
  };

  var result = await melon
    .parse(opts)
    .then(function (res) {
      const shuffled = res.sort(() => Math.random() - 0.5).slice(0, 10);
      return shuffled.map((item) => item.trackName);
    })
    .catch(function (err) {
      console.log(err);
    });
  console.log(result);

  res.status(200).json({ success: true, result });
});

module.exports = router;
