const { Url } = require('../model/Url');

const getExistTrack = async (query) => {
  return await Url.find(query).exec();
};

const isExistTrack = async (query) => {
  return await Url.exists(query);
};

module.exports = { getExistTrack, isExistTrack };
