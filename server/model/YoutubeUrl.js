const mongoose = require('mongoose');

const UrlSchema = mongoose.Schema({
  trackName: { type: String, required: true },
  artistName: { type: String, required: true },
  videoId: { type: String, required: true },
});

const Url = mongoose.model('Url', UrlSchema);

module.exports = { Url };
