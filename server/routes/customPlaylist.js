const express = require('express');
const router = express.Router();
const { Playlist } = require('../model/Playlist');

/** NOTE: theme api에서
 * urls 콜렉션안에 유무 확인 후, urls 저장하고
 * 그걸로 theme콜렉션에 저장하고 싶었지만..
 * node.js express 지식이 부족한 관계로 아쉽게 프론트엔드에서 위의 로직을 처리 후
 * theme 콜렉션에 저장하는 방향으로 수정.
 * */
router.post('/', async (req, res) => {
  const { themeTitle, playlist } = req.body;
  const newTheme = new Playlist({ themeTitle, playlist: playlist });
  newTheme.save((err) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({ success: true });
  });
});

router.get('/', async (req, res) => {
  const { themeTitle } = req.body;
  const result = await Playlist.find({ themeTitle })
    .populate('playlist')
    .exec();
  return res.status(200).json({ success: true, result });
});

module.exports = router;
