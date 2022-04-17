const express = require('express');
const router = express.Router();
const { Url } = require('../model/Url');
const { isExistTrack, getExistTrack } = require('../function/url');
const { successResponse, failResponse } = require('../function/response');
const getVideoId = require('../function/youtube');

const saveNewTrack = (response, trackInfo) => (videoId) => {
  const newVideoId = new Url({ ...trackInfo, videoId });
  newVideoId.save((error, doc) => {
    if (error) throw new Error(error);
    return successResponse(response)(doc);
  });
};

/**
 * 1. req.body로 받은 정보의 트랙이 존재하는지 확인
 * 2. 없을 경우, videoId를 받아서 새로운 url로 저장 후 정보 전달
 */
router.post('/', async (req, res) => {
  try {
    const isExist = await isExistTrack(req.body);
    if (isExist) return failResponse(res, 'already exist');
    return await getVideoId(req.body, saveNewTrack(res, req.body));
  } catch (error) {
    return failResponse(res, error);
  }
});

router.get('/', async (req, res) => {
  try {
    const doc = await getExistTrack(req.body);
    if (doc.length) return successResponse(res)(doc);
    else return failResponse(res);
  } catch (error) {
    return failResponse(res, error);
  }
});

module.exports = router;
