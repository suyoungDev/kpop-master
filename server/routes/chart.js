const express = require('express');
const router = express.Router();
const melon = require('melon-chart-parser');

const Song = require('../model/SongsOfYear.js');

const regex = /[(]/g;

const getRandomSongs = (data, quantity) => {
  return data
    .sort(() => Math.random() - 0.5)
    .slice(0, quantity)
    .map((song) => ({
      year: song.year,
      rank: song.rank,
      trackName: song.trackName.split(regex)[0],
      artistName: song.artistName.split(regex)[0],
    }));
};

const LEVEL = {
  easy: 10,
  regular: 50,
  hard: 100,
};

router.get('/byTheme', async (req, res) => {
  try {
    const { level, theme, artistName, quantity = 5 } = req.body;
    if (theme === undefined) throw new Error('oops');
    const options = {
      limit: LEVEL[level],
      type: theme,
      term: artistName,
      genre: 'KPOP',
    };

    const parsedData = await melon.parse(options);
    const result = getRandomSongs(parsedData, quantity);
    return res.status(200).json({
      success: true,
      quantity,
      level,
      result,
    });
  } catch (error) {
    console.error(error);
    return res
      .status(400)
      .json({ success: false, error: 'please fill the correct format' });
  }
});

router.get('/byYear', async (req, res) => {
  const { level, theme = 'year', targetYear, quantity = 5 } = req.body;

  try {
    if (targetYear === 2022) {
      const options = {
        limit: LEVEL[level],
        type: theme,
        year: targetYear,
        genre: 'KPOP',
      };
      const parsedData = await melon.parse(options);
      const result = getRandomSongs(parsedData, quantity);
      return res.status(200).json({
        success: true,
        quantity,
        level,
        targetYear,
        result,
      });
    } else {
      const targetEra = `year${targetYear}`;
      Song[targetEra].find().exec((err, song) => {
        if (err) return res.status(400).send(err).json({ success: false });

        const sortedByLevel = song
          .sort((a, b) => a.rank - b.rank)
          .slice(0, LEVEL[level]);
        const result = getRandomSongs(sortedByLevel, quantity);

        return res.status(200).json({
          success: true,
          quantity,
          level,
          targetYear,
          result,
        });
      });
    }
  } catch (error) {
    console.error(error);
    return res
      .status(400)
      .json({ success: false, error: 'something went wrong' });
  }
});

module.exports = router;
