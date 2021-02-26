const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();

const { User } = require('../model/User');
const { auth } = require('../middleware/auth');

router.post('/register', (req, res) => {
  const newUser = new User(req.body);
  newUser.save((error, doc) => {
    if (error) return res.json({ DBsuccess: false, error });
    return res.status(200).json({ DBsuccess: true });
  });
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (!existingUser)
      return res.json({
        loginSuccess: false,
        message: '존재하지 않는 메일입니다. 다시 확인해주세요.',
      });

    const isCorrect = await bcrypt.compare(password, existingUser.password);
    if (!isCorrect)
      return res.json({
        loginSuccess: false,
        message: '비밀번호가 틀립니다. 다시 확인해주세요.',
      });

    const token = jwt.sign({ user: existingUser._id }, process.env.TOKEN_KEY);
    res.cookie('token', token, { httpOnly: true }).status(200).json({
      loginSuccess: true,
      userId: existingUser._id,
      displayName: existingUser.displayName,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
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

router.delete('/delete', auth, async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.user);
    res.json(deletedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
