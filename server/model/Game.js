const mongoose = require('mongoose');

const gameSchema = mongoose.Schema(
  {
    userName: { type: String, unique: true, maxLength: 10 },
    record: Number,
    correctTrackName: Array,
    wrongTrackName: Array,
    gameResult: Array,
    theme: Array,
  },
  { timestamps: true }
);

const Game = mongoose.model('Game', gameSchema);

module.exports = { Game };
