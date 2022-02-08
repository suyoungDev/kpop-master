const express = require('express');
const router = express.Router();
const { Url } = require('../model/Url');
const { isExistTrack, getExistTrack } = require('../function/url');
const { successResponse, failResponse } = require('../function/response');

/** NOTE: req.body의 정보를 토대로 Urls콜렉션에 존재유무 확인후, Urls에 저장함
 * videoId는 FE에서 req.body에 전달해줘야함 -_-
 */
router.post('/', async (req, res) => {
  try {
    const isExist = await isExistTrack(req.body);
    if (isExist) {
      return res.status(200).json({ success: true, message: 'already exist' });
    } else {
      const newVideoId = new Url(req.body);
      newVideoId.save((error, doc) => {
        if (error) throw new Error(error);
        return successResponse(res)(doc);
      });
    }
  } catch (error) {
    return failResponse(res);
  }
});

router.get('/', async (req, res) => {
  const doc = await getExistTrack(req.body);
  if (doc.length) return successResponse(res)(doc);
  else return failResponse(res);
});

module.exports = router;
