require('dotenv').config();
const express = require('express');
const router = express.Router();

var YouTube = require('youtube-node');

router.post('/getId', async (req, res) => {
  var youTube = new YouTube();
  youTube.setKey(process.env.YOUTUBE_KEY);

  const searchTerm = req.body.trackName;

  youTube.search(searchTerm, 1, function (error, result) {
    if (error) {
      console.log(error);
    } else {
      const data = JSON.stringify(result, null, 1);
      res.status(200).send(data);
    }
  });
});

module.exports = router;
