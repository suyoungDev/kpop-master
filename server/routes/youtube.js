const express = require('express');
const router = express.Router();
const YouTube = require('youtube-node');
const getVideoId = require('../function/youtube');
const { successResponse } = require('../function/response');

const youTube = new YouTube();
youTube.setKey(process.env.YOUTUBE_KEY);

router.get('/videoId', async (req, res) => {
  await getVideoId(req.body, successResponse(res));
});

module.exports = router;
