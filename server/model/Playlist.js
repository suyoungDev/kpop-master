const mongoose = require('mongoose');

const playlistSchema = new mongoose.Schema(
  {
    themeTitle: { type: String, required: true },
    playlist: [
      { type: mongoose.Schema.Types.ObjectId, ref: 'Url', required: true },
    ],
  },
  { timestamps: true }
);

const Playlist = mongoose.model('Playlist', playlistSchema);

module.exports = { Playlist };
