const mongoose = require('mongoose');

const likeSchema = mongoose.Schema(
  {
    fromWhom: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    toWhat: { type: mongoose.Schema.Types.ObjectId, ref: 'Comment' },
  },
  { timestamps: true }
);

const Like = mongoose.model('Like', likeSchema);

module.exports = { Like };
