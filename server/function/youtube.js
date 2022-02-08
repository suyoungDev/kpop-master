require('dotenv').config();
const YouTube = require('youtube-node');

const youTube = new YouTube();
youTube.setKey(process.env.YOUTUBE_KEY);

function getPromise(error, result) {
  if (error) throw new Error(error);
  return new Promise((resolve) => resolve(result));
}

async function getVideoId(searchTerm, callback) {
  return await youTube.search(searchTerm, 1, (error, result) =>
    getPromise(error, result).then((result) => {
      callback(result.items.pop().id.videoId);
    })
  );
}

module.exports = getVideoId;
