const express = require('express');
const router = express.Router();
var melon = require('melon-chart-parser');

const regex = /[(]/g;

const filtering = (data) => {
  const result = data
    .sort(() => Math.random() - 0.5)
    .slice(0, 5)
    .map((song) => ({
      trackName: song.trackName.split(regex)[0],
      artistName: song.artistName.split(regex)[0],
    }));

  return result;
};

router.post('/getByArtist', async (req, res) => {
  const opts = {
    limit: req.body.limit,
    type: req.body.theme,
    term: req.body.value,
  };

  let result;

  try {
    let parsedData = await melon.parse(opts);
    result = await filtering(parsedData);
  } catch (error) {
    console.log(error);
  }

  res.status(200).json({ success: true, result });
});

router.post('/getByYear', async (req, res) => {
  let result = [];
  let year = parseInt(req.body.value, 10);
  let finallYear = year === 2020 ? 2020 : parseInt(req.body.value, 10) + 9;

  for (let i = year; i <= finallYear; i++) {
    const opts = {
      limit: req.body.limit,
      type: req.body.theme,
      genre: 'KPOP',
      year: i,
    };

    try {
      const parsedData = await melon.parse(opts);
      result.push(...parsedData);
    } catch (error) {
      console.log(error);
    }
  }

  const shuffled = result.sort(() => Math.random() - 0.5).slice(0, 5);
  const filtered = filtering(shuffled);

  res.status(200).json({ success: true, result: filtered });
});

router.post('/getByWeek', async (req, res) => {
  const opts = {
    limit: req.body.limit,
    type: req.body.theme,
  };

  let result;
  try {
    const parsedData = await melon.parse(opts);
    result = filtering(parsedData);
  } catch (error) {
    console.log(error);
  }

  res.status(200).json({ success: true, result });
});

module.exports = router;
