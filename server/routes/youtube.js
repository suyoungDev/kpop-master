const express = require('express');
const router = express.Router();
const { getExistTrack } = require('../function/url');
const getVideoId = require('../function/youtube');

const YouTube = require('youtube-node');
var youTube = new YouTube();
youTube.setKey(process.env.YOUTUBE_KEY);

const sendingResponse = (response) => (result) =>
  response.status(200).json({ success: true, result });

router.get('/videoId', async (req, res) => {
  const { trackName } = req.body;
  await getVideoId(trackName, sendingResponse(res));
});

module.exports = router;
