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

router.post('/saveUrl', async (req, res) => {
  const newId = new Url(req.body);
  const alreadyExisted = Url.find(req.body).exec((err, doc) => {
    if (err) return false;
    if (!doc.length) return false;
    return true;
  });

  if (!alreadyExisted) {
    newId.save((err, doc) => {
      if (err) return res.json({ success: false, err });
      return res.status(200).json({ success: true });
    });
  }
});

router.post('/getUrl', async (req, res) => {
  const variable = req.body;
  Url.find(variable).exec((err, doc) => {
    if (err) return res.status(400).send(err);
    res.status(200).json({ success: true, doc });
  });
});

module.exports = router;
