const mongoose = require('mongoose');

const songSchema = mongoose.Schema({
  year: Number,
  rank: Number,
  trackName: String,
  artistName: String,
});

const Song_of_2020 = mongoose.model('Song_of_2020', songSchema);
const Song_of_2010 = mongoose.model('Song_of_2010', songSchema);
const Song_of_2000 = mongoose.model('Song_of_2000', songSchema);
const Song_of_1990 = mongoose.model('Song_of_1990', songSchema);

module.exports = { Song_of_2020, Song_of_2010, Song_of_2000, Song_of_1990 };
