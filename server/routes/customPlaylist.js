const express = require('express');
const router = express.Router();
const { Playlist } = require('../model/Playlist');
const { successResponse, failResponse } = require('../function/response');

// TODO: themeTitle 중복 제거, playlist 스키마 수정(trackName, artistName 만 저장 가능)
router.post('/', async (req, res) => {
  // NOTE: playlist: [{_id: '...'}] 형식
  const { themeTitle, playlist } = req.body;
  const newTheme = new Playlist({ themeTitle, playlist });
  newTheme.save((error) => {
    if (error) return failResponse(res, error);
    return successResponse(res)();
  });
});

router.get('/', async (req, res) => {
  const { themeTitle } = req.body;
  const result = await Playlist.find({ themeTitle })
    .populate('playlist')
    .exec();
  return successResponse(res)(result);
});

module.exports = router;
