var melon = require('melon-chart-parser');
var fs = require('fs');

const TARGET_YEAR = 2020;
const CUTTER = /[(]/g;

const finished = () => {
  console.log('finished!');
};

const filtering = (data) => {
  const result = data.map((song) => ({
    rank: song.rank,
    trackName: song.trackName.split(CUTTER)[0],
    artistName: song.artistName.split(CUTTER)[0],
  }));

  return result;
};

const loggin = async () => {
  let result = {};
  let finallYear = TARGET_YEAR === 2020 ? 2020 : Number(TARGET_YEAR) + 10;

  for (let i = TARGET_YEAR; i < finallYear; i++) {
    const opts = {
      limit: 100,
      type: 'year',
      year: i,
    };

    try {
      const data = await melon.parse(opts);
      let filtered = await filtering(data);
      result[i] = filtered;
    } catch (err) {
      console.log(err);
    }
  }

  return result;
};

const saveFile = async () => {
  try {
    const data = await loggin();
    const dataJson = JSON.stringify(data);
    fs.writeFile(`melonList_${TARGET_YEAR}.json`, dataJson, finished);
  } catch (err) {
    console.log(err);
  }
};

saveFile();
