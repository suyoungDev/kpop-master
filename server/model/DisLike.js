const mongoose = require('mongoose');

const dislikeSchema = mongoose.Schema(
  {
    fromWhom: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    toWhat: { type: mongoose.Schema.Types.ObjectId, ref: 'Comment' },
  },
  { timestamps: true }
);

const Dislike = mongoose.model('Dislike', dislikeSchema);

module.exports = { Dislike };
