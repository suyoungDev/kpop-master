const { Url } = require('../model/Url');

// TODO: regex로 검색하기
const getExistTrack = (query) => {
  return Url.find(query).exec();
};

const isExistTrack = (query) => {
  return Url.exists(query);
};

module.exports = { getExistTrack, isExistTrack };
