const express = require('express');
const router = express.Router();
const { getExistTrack } = require('../function/url');
const getVideoId = require('../function/youtube');
const { successResponse } = require('../function/response');

const YouTube = require('youtube-node');
var youTube = new YouTube();
youTube.setKey(process.env.YOUTUBE_KEY);

router.get('/videoId', async (req, res) => {
  const { trackName } = req.body;
  await getVideoId(trackName, successResponse(res));
});

module.exports = router;
