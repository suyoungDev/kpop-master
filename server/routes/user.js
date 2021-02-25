const express = require('express');
const router = express.Router();

const { User } = require('../model/User');
const { auth } = require('../middleware/auth');

router.post('/register', (req, res) => {
  const newUser = new User(req.body);

  newUser.save((err, doc) => {
    if (err) return res.json({ DBsuccess: false, err });
    return res.status(200).json({ DBsuccess: true });
  });
});

router.post('/login', (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user) {
      return res.json({
        loginSuccess: false,
        message: '이메일에 해당되는 유저가 없습니다.',
      });
    }

    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch)
        return res.json({
          loginSuccess: false,
          message: '비밀번호가 틀립니다.',
        });

      user.generateToken((err, user) => {
        if (err) return res.status(400).send(err);

        res
          .cookie('_auth', user.token)
          .status(200)
          .json({ loginSuccess: true, userId: user._id });
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
