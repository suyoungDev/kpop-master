const express = require('express');
const router = express.Router();
const melon = require('melon-chart-parser');
const { successResponse, failResponse } = require('../function/response');

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
    return successResponse(res)({ quantity, level, result });
  } catch (error) {
    console.error(error);
    return failResponse(res, 'please fill the correct format');
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
      const trackList = getRandomSongs(parsedData, quantity);

      return successResponse(res)({ quantity, level, targetYear, trackList });
    } else {
      const targetEra = `year${targetYear}`;
      Song[targetEra].find().exec((err, song) => {
        if (err) return failResponse(res, err);

        const sortedByLevel = song
          .sort((a, b) => a.rank - b.rank)
          .slice(0, LEVEL[level]);
        const trackList = getRandomSongs(sortedByLevel, quantity);

        return successResponse(res)({ quantity, level, targetYear, trackList });
      });
    }
  } catch (error) {
    console.error(error);
    return failResponse(res, 'something went wrong');
  }
});

module.exports = router;
