const express = require('express');
const router = express.Router();

const { Like } = require('../model/Like');
const { Dislike } = require('../model/Dislike');

//////////////////////
//                 //
//       UP        //
//                 //
////////////////////

router.post('/upLike', (req, res) => {
  const newLike = new Like(req.body);

  newLike.save((err, doc) => {
    if (err) return res.json({ success: false, err });

    Dislike.findOneAndDelete(req.body).exec((err, result) => {
      if (err) return res.status(400).json({ success: false, err });
      res.status(200).json({ success: true });
    });
  });
});

router.post('/upDislike', (req, res) => {
  const newDislike = new Dislike(req.body);

  newDislike.save((err, doc) => {
    if (err) return res.json({ success: false, err });

    Like.findOneAndDelete(req.body).exec((err, result) => {
      if (err) return res.status(400).json({ success: false, err });

      res.status(200).json({ success: true });
    });
  });
});

//////////////////////
//                 //
//      Down       //
//                 //
////////////////////

router.post('/downLike', (req, res) => {
  Like.findOneAndDelete(req.body).exec((err, result) => {
    if (err) return res.status(400).json({ success: false, err });
    res.status(200).json({ success: true });
  });
});

router.post('/downDislike', (req, res) => {
  Dislike.findOneAndDelete(req.body).exec((err, result) => {
    if (err) return res.status(400).json({ success: false, err });

    res.status(200).json({ success: true });
  });
});

//////////////////////
//                 //
//      GET        //
//                 //
////////////////////

router.post('/getLike', (req, res) => {
  const { toWhat } = req.body;
  Like.find({ toWhat: toWhat }).exec((err, likes) => {
    if (err) return res.status(400).send(err);
    res.status(200).json({ success: true, likes });
  });
});

router.post('/getDislike', (req, res) => {
  const { toWhat } = req.body;

  Dislike.find({ toWhat: toWhat }).exec((err, dislikes) => {
    if (err) return res.status(400).send(err);

    res.status(200).json({ success: true, dislikes });
  });
});

module.exports = router;
