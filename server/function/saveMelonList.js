/*
  멜론 parser을 통해 해당 년도의 top 100 을 가져옴
  애플리케이션에 더이상 필요없는 파일임
  직접 이 파일 루트를 타고 들어와서 실행해야 함
*/

var melon = require('melon-chart-parser');
var fs = require('fs');

const regex = /[(]/g;

const filtering = (data) => {
  return data.map((song) => ({
    rank: song.rank,
    trackName: song.trackName.split(regex)[0],
    artistName: song.artistName.split(regex)[0],
  }));
};

const finished = () => {
  console.log('finished!');
};

const getMelonRankListByYear = async (targetYear) => {
  let result = [];
  let finalYear =
    targetYear === 2020 || targetYear === 2021
      ? targetYear
      : Number(targetYear) + 9;

  for (let i = targetYear; i <= finalYear; i++) {
    const options = {
      limit: 100,
      type: 'year',
      year: i,
    };

    try {
      const data = await melon.parse(options);
      let filtered = await filtering(data);
      result.push(...filtered);
    } catch (err) {
      console.log(err);
    }
  }

  return result;
};

const saveToJSONFile = async (targetYear) => {
  try {
    const data = await getMelonRankListByYear(targetYear);
    console.log(data);
    const stringData = JSON.stringify(data);
    fs.writeFile(`melonList${targetYear}.json`, stringData, finished);
  } catch (err) {
    console.log(err);
  }
};

saveToJSONFile(2021);
