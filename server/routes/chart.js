const express = require('express');
const router = express.Router();
var melon = require('melon-chart-parser');

const regex = /[(]/g;

// 랜덤한 5개의 곡을 뽑음
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

// options에 맞는 멜론 차트 리스트를 가져옴
const fetchData = async (opts) => {
  try {
    let parsedData = await melon.parse(opts);
    let result = await filtering(parsedData);
    return result;
  } catch (error) {
    console.error(error);
  }
};

router.post('/getByYear', async (req, res) => {
  let result = [];
  let year = Number(req.body.value);
  let finallYear = year === 2020 ? 2020 : Number(req.body.value) + 10;

  for (let i = year; i < finallYear; i++) {
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
      console.error(error);
    }
  }

  const shuffled = result.sort(() => Math.random() - 0.5).slice(0, 5);
  const filtered = filtering(shuffled);

  res.status(200).json({ success: true, result: filtered });
});

router.post('/getByArtist', async (req, res) => {
  const opts = {
    limit: req.body.limit,
    type: req.body.theme,
    term: req.body.value,
  };

  let result = await fetchData(opts);
  res.status(200).json({ success: true, result });
});

router.post('/getByWeek', async (req, res) => {
  const opts = {
    limit: req.body.limit,
    type: req.body.theme,
  };

  let result = await fetchData(opts);
  res.status(200).json({ success: true, result });
});

module.exports = router;
