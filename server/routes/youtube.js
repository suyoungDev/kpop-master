require('dotenv').config();
const express = require('express');
const router = express.Router();

var YouTube = require('youtube-node');
var youTube = new YouTube();
youTube.setKey(process.env.YOUTUBE_KEY);

router.get('/getId', async (req, res) => {
  const searchTerm = req.body.trackName;

  youTube.search(searchTerm, 1, (error, result) => {
    if (error) return res.status(400).send({ success: false, error });

    const data = JSON.stringify(result, null, 1);
    return res.status(200).send(data);
  });
});

module.exports = router;
