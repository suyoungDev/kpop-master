require('dotenv').config();
const YouTube = require('youtube-node');
const generateSearchTerm = require('../function/generateSearchTerm');

const youTube = new YouTube();
youTube.setKey(process.env.YOUTUBE_KEY);

function getPromise(error, result) {
  return new Promise((resolve, reject) => {
    if (error) return reject(error);
    return resolve(result);
  });
}

async function getVideoId(searchTerm, callback) {
  return await youTube.search(
    generateSearchTerm(searchTerm),
    1,
    (error, result) =>
      getPromise(error, result).then((result) => {
        callback(result.items.pop()?.id.videoId);
      })
  );
}

module.exports = getVideoId;
