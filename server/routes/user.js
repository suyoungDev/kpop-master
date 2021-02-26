const express = require('express');
const router = express.Router();
require('dotenv').config();

const { User } = require('../model/User');
const { auth } = require('../middleware/auth');

router.post('/register', (req, res) => {
  const newUser = new User(req.body);
  newUser.save((error, doc) => {
    if (error) return res.json({ success: false, error });
    return res.status(200).json({ success: true });
  });
});

router.post('/login', async (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user)
      return res.json({
        success: false,
        message: '해당하는 이메일이 없습니다.',
      });

    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch)
        return res.json({
          success: false,
          message: '비밀번호가 틀립니다. 다시 확인해주세요.',
        });

      user.generateToken((err, user) => {
        if (err) return res.status(400).send(err);
        res.cookie('token', user.token).status(200).json({
          success: true,
          userId: user._id,
        });
      });
    });
  });
});

router.get('/auth', auth, (req, res) => {
  res.status(200).json({
    _id: req.user._id,
    isAuth: true,
    email: req.user.email,
    displayName: req.user.displayName,
  });
});

router.get('/logout', auth, (req, res) => {
  User.findOneAndUpdate({ _id: req.user._id }, { token: '' }, (err, user) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({ success: true });
  });
});

module.exports = router;
