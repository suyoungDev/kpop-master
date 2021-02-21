const express = require('express');
const router = express.Router();
var melon = require('melon-chart-parser');

router.post('/getBySinger', async (req, res) => {
  var opts = {
    limit: req.body.limit,
    type: 'artist',
    term: req.body.artist,
  };

  var result = await melon
    .parse(opts)
    .then(function (res) {
      return res;
    })
    .catch(function (err) {
      console.log(err);
    });

  const shuffled = result.sort(() => Math.random() - 0.5).slice(0, 10);

  res.status(200).json({ success: true, shuffled });
});

router.post('/getByYear', async (req, res) => {
  let result = [];
  let year = Number(req.body.year);
  let finallYear = year === 2020 ? 2020 : Number(req.body.year) + 9;

  for (let i = year; i <= finallYear; i++) {
    var opts = {
      limit: req.body.limit,
      type: 'year',
      genre: 'KPOP',
      year: i,
    };

    const data = await melon
      .parse(opts)
      .then((res) => {
        const eachYearData = res.map((song) => ({
          trackName: song.trackName,
          artist: song.artistName,
        }));
        return eachYearData;
      })
      .catch((err) => console.log(err));

    result.push(...data);
  }

  const shuffled = result.sort(() => Math.random() - 0.5).slice(0, 10);

  res.status(200).json({ success: true, shuffled });
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

  const shuffled = result.sort(() => Math.random() - 0.5).slice(0, 10);

  res.status(200).json({ success: true, shuffled });
});
module.exports = router;
