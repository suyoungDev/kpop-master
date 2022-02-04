const express = require('express');
const router = express.Router();
const { getExistTrack } = require('../function/url');

const YouTube = require('youtube-node');
var youTube = new YouTube();
youTube.setKey(process.env.YOUTUBE_KEY);

router.get('/videoId', async (req, res) => {
  const { trackName } = req.body;
  try {
    youTube.search(trackName, 1, (error, data) => {
      if (error) return res.status(400).send({ success: false, error });

      const result = JSON.stringify(data, null, 1);
      res.status(200).json({ success: true, result });
    });
  } catch (error) {
    res.status(400).json({ success: false, error });
  }
});

module.exports = router;
