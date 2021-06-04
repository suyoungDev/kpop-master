var melon = require('melon-chart-parser');
var fs = require('fs');

const regex = /[(]/g;

const filtering = (data) => {
  const result = data.map((song) => ({
    trackName: song.trackName.split(regex)[0],
    artistName: song.artistName.split(regex)[0],
  }));

  return result;
};

const finished = () => {
  console.log('finished!');
};

const saveFile = async () => {
  try {
    const data = await loggin();
    const string = JSON.stringify(data);
    fs.writeFile('melonList1990.json', string, finished);
  } catch (err) {
    console.log(err);
  }
};

const loggin = async () => {
  let result = [];
  let year = 1990;
  let finallYear = year === 2020 ? 2020 : Number(year) + 10;

  for (let i = year; i <= finallYear; i++) {
    const opts = {
      limit: 100,
      type: 'year',
      year: i,
    };

    try {
      const data = await melon.parse(opts);
      let filtered = await filtering(data);
      result.push(...filtered);
    } catch (err) {
      console.log(err);
    }
  }

  return result;
};

saveFile();
