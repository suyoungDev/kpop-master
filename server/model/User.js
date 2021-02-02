const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    userName: String,
    record: Number,
    correctTrackName: Array,
    wrongTrackName: Array,
    gameResult: Array,
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

module.exports = { User };
