const express = require('express');
const router = express.Router();
var melon = require('melon-chart-parser');
router.post('/getBySinger', async (req, res) => {
  var opts = {
    limit: req.body.limit,
    type: 'artist',
    term: req.body.artist,
  };
  console.log(opts);
  var result = await melon
    .parse(opts)
    .then(function (res) {
      return res;
    })
    .catch(function (err) {
      console.log(err);
    });
  res.status(200).json({ success: true, result });
});

router.post('/getByYear', async (req, res) => {
  var opts = {
    limit: req.body.limit,
    type: 'year',
    genre: 'KPOP',
    year: req.body.year,
  };
  console.log(opts);

  var result = await melon
    .parse(opts)
    .then(function (res) {
      const result = res.map((song) => ({
        rank: song.rank,
        trackName: song.trackName,
        artistName: song.artistName,
      }));
      return result;
    })
    .catch(function (err) {
      console.log(err);
    });
  res.status(200).json({ success: true, result });
});

router.post('/getByWeek', async (req, res) => {
  var opts = {
    limit: req.body.limit,
    type: 'weekly',
  };
  var result = await melon
    .parse(opts)
    .then(function (res) {
      return res;
    })
    .catch(function (err) {
      console.log(err);
    });
  res.status(200).json({ success: true, result });
});
module.exports = router;
