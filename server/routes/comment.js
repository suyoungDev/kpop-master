const express = require('express');
const router = express.Router();

const { Comment } = require('../model/Comment');

router.post('/saveComment', (req, res) => {
  const newComment = new Comment(req.body);
  newComment.save((err, doc) => {
    if (err) return res.json({ success: false, err });

    Comment.find({ _id: doc._id })
      .populate('writer')
      .exec((err, result) => {
        if (err) return res.json({ success: false, err });
        res.status(200).json({ success: true, result });
      });
  });
});

module.exports = router;
