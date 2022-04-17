const mongoose = require('mongoose');

const songSchema = mongoose.Schema(
  {
    year: Number,
    rank: Number,
    trackName: String,
    artistName: String,
  },
  { timestamps: true }
);

const year2021 = mongoose.model('Song_of_2021', songSchema);
const year2020 = mongoose.model('Song_of_2020', songSchema);
const year2010 = mongoose.model('Song_of_2010', songSchema);
const year2000 = mongoose.model('Song_of_2000', songSchema);
const year1990 = mongoose.model('Song_of_1990', songSchema);

module.exports = { year2021, year2020, year2010, year2000, year1990 };
