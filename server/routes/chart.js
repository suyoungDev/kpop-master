const express = require('express');
const router = express.Router();
var melon = require('melon-chart-parser');

var opts = {
  limit: 25,
  type: 'artist',
  genre: 'KPOP',
  term: 'BLACKPINK',
};

router.get('/getSongs', async (req, res) => {
  var result = await melon
    .parse(opts)
    .then(function (res) {
      return res;
    })
    .catch(function (err) {
      console.log(err);
    });

  res.status(200).json({ success: true, result });
});

module.exports = router;
