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

  Game.find()
    .populate('player')
    .exec((err, gameData) => {
      if (err) return res.status(400).send(err);
      gameRecordList = gameData
        .sort((a, b) => {
          return a.record - b.record;
        })
        .map((gameRecord) => ({
          player: gameRecord.player.displayName,
          _id: gameRecord.player._id,
          docId: gameRecord._id,
          record: gameRecord.record,
          theme: gameRecord.theme.theme,
          value: gameRecord.theme.value,
          level: gameRecord.theme.limit,
        }));

      return res.status(200).json({ success: true, gameRecordList });
    });
});

module.exports = router;
