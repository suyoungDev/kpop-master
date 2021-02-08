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

router.get('/getRecords', (req, res) => {
  let userRecordList = [];

  User.find().exec((err, userData) => {
    if (err) return res.status(400).send(err);

    userRecordList = userData
      .sort((a, b) => {
        return a.record - b.record;
      })
      .map(({ userName: userName, record: record, _id: _id }) => ({
        userName,
        record,
        _id,
      }));

    return res.status(200).json({ success: true, userRecordList });
  });
});

module.exports = router;
