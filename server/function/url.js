const { Url } = require('../model/YoutubeUrl');

const getExistTrack = async (query) => {
  return await Url.find(query).exec();
};

const isExistTrack = async (query) => {
  return await Url.exists(query);
};

module.exports = { getExistTrack, isExistTrack };
