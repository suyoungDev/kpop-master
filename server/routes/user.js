const express = require('express');
const router = express.Router();

const { User } = require('../model/User');

router.post('/upload', (req, res) => {
  const userData = new User(req.body);
  userData.save((err, doc) => {
    if (err) return res.json({ DBsuccess: false, err });
    return res.status(200).json({ DBsuccess: true });
  });
});

module.exports = router;
