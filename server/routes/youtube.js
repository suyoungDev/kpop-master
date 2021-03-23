require('dotenv').config();
const express = require('express');
const router = express.Router();

const { Url } = require('../model/YoutubeUrl');

var YouTube = require('youtube-node');
var youTube = new YouTube();
youTube.setKey(process.env.YOUTUBE_KEY);

router.post('/getId', async (req, res) => {
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
