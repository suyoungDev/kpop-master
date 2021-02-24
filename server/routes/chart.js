const express = require('express');
const router = express.Router();
var melon = require('melon-chart-parser');

const regex = /[(]/g;

router.post('/getByArtist', async (req, res) => {
  var opts = {
    limit: req.body.limit,
    type: 'artist',
    term: req.body.value,
  };

  var result = await melon
    .parse(opts)
    .then(function (res) {
      return res.map((song) => ({
        trackName: song.trackName,
        artistName: song.artistName,
      }));
    })
    .catch(function (err) {
      console.log(err);
    });

  const shuffled = result.sort(() => Math.random() - 0.5).slice(0, 5);
  const filtered = shuffled.map((song) => ({
    trackName: song.trackName.split(regex)[0],
    artistName: song.artistName,
  }));
  res.status(200).json({ success: true, result: filtered });
});

router.post('/getByYear', async (req, res) => {
  let result = [];
  let year = Number(req.body.value);
  let finallYear = year === 2020 ? 2020 : Number(req.body.value) + 9;

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
          artistName: song.artistName,
        }));
        return eachYearData;
      })
      .catch((err) => console.log(err));

    result.push(...data);
  }

  const shuffled = result.sort(() => Math.random() - 0.5).slice(0, 5);
  const filtered = shuffled.map((song) => ({
    trackName: song.trackName.split(regex)[0],
    artistName: song.artistName,
  }));

  res.status(200).json({ success: true, result: filtered });
});

router.post('/getByWeek', async (req, res) => {
  var opts = {
    limit: req.body.limit,
    type: 'weekly',
  };

  var result = await melon
    .parse(opts)
    .then(function (res) {
      return res.map((song) => ({
        trackName: song.trackName,
        artistName: song.artistName,
      }));
    })
    .catch(function (err) {
      console.log(err);
    });

  const shuffled = result.sort(() => Math.random() - 0.5).slice(0, 5);
  const filtered = shuffled.map((song) => ({
    trackName: song.trackName.split(regex)[0],
    artistName: song.artistName,
  }));

  res.status(200).json({ success: true, result: filtered });
});
module.exports = router;
