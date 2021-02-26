const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const saltRounds = 10;

const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      trim: true,
      lowerCase: true,
      unique: true,
    },
    password: { type: String, minlength: 5, required: true, trim: true },
    displayName: { type: String, minLength: 2, maxLength: 10 },
    token: { type: String },
  },
  { timestamps: true }
);

userSchema.pre('save', function (next) {
  var user = this;
  bcrypt.genSalt(saltRounds, function (error, salt) {
    if (error) return next(error);

    bcrypt.hash(user.password, salt, function (error, hash) {
      if (error) return next(error);
      user.password = hash;
      next();
    });
  });
});

userSchema.statics.findByToken = function (token, callback) {
  var user = this;

  jwt.verify(token, process.env.TOKEN_KEY, function (error, decoded) {
    user.findOne({ _id: decoded, token: token }, function (error, user) {
      if (error) return callback(error);
      callback(null, user);
    });
  });
};

const User = mongoose.model('User', userSchema);

module.exports = { User };
