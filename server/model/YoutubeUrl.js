const mongoose = require('mongoose');

const UrlSchema = mongoose.Schema({
  trackName: String,
  artistName: String,
  videoId: String,
});

const Url = mongoose.model('Url', UrlSchema);

module.exports = { Url };
