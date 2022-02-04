const express = require('express');
const router = express.Router();
const { Url } = require('../model/YoutubeUrl');
const { isExistTrack, getExistTrack } = require('../function/url');

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
        return res.status(200).json({ success: true });
      });
    }
  } catch (error) {
    return res
      .status(400)
      .json({ success: false, message: 'something went wrong' });
  }
});

router.get('/', async (req, res) => {
  const doc = await getExistTrack(req.body);
  if (doc.length) res.status(200).json({ success: true, result: doc });
  else return res.status(400).json({ success: false });
});

module.exports = router;
