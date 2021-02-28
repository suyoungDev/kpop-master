const express = require('express');
const router = express.Router();

const { Game } = require('../model/Game');

router.post('/upload', (req, res) => {
  const gameData = new Game(req.body);
  gameData.save((err, doc) => {
    if (err) return res.json({ DBsuccess: false, err });
    return res.status(200).json({ DBsuccess: true });
  });
});

router.get('/getRecords', (req, res) => {
  let gameRecordList = [];

  Game.find().exec((err, gameData) => {
    if (err) return res.status(400).send(err);

    gameRecordList = gameData
      .sort((a, b) => {
        return a.record - b.record;
      })
      .map(({ player: player, record: record, _id: _id, theme: theme }) => ({
        player,
        record,
        _id,
        theme,
      }));

    return res.status(200).json({ success: true, gameRecordList });
  });
});

module.exports = router;
