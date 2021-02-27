const mongoose = require('mongoose');

const gameSchema = mongoose.Schema(
  {
    displayName: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
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
