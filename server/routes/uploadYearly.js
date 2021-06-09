//  saveMelonList로 저장한 데이터를 몽고디비에 올리기 위해 작성한 파일
// 애플리케이션에 더이상 필요없는 코딩 파일임
const mongoose = require('mongoose');

const {
  Song_of_2020,
  Song_of_2010,
  Song_of_2000,
  Song_of_1990,
} = require('../model/SongInfoYearly');

const melon2020 = require('./melonList_2020.json');
const melon2010 = require('./melonList_2010.json');
const melon2000 = require('./melonList_2000.json');
const melon1990 = require('./melonList_1990.json');

// 원래는 이거 안되서 하드코딩함
const mongo = process.env.MONGO_URI;

mongoose
  .connect(mongo, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log('MongoDB Connected...🌼'))
  .catch((err) => console.log(err));

const TARGET_YEAR = 1990;
const target_schema = {
  2020: Song_of_2020,
  2010: Song_of_2010,
  2000: Song_of_2000,
  1990: Song_of_1990,
};
const target_data = {
  2020: melon2020,
  2010: melon2010,
  2000: melon2000,
  1990: melon1990,
};

// 몽고디비에 저장할 데이터 리스트
let listToSave = [];

// 2000 ~ 2010 년도의 리스트 가져오기
const getList = () => {
  const listOfYears = [];
  for (let i = 0; i < 10; i++) {
    let newItem = TARGET_YEAR + i;
    listOfYears.push(newItem);
  }

  return listOfYears;
};

// 2020년도를 위한
const for2020 = () => {
  for (let i = 0; i < target_data.length; i++) {
    const target = target_data[TARGET_YEAR][i];
    const newSongInfo = new target_schema[TARGET_YEAR]({
      ...target,
      year: TARGET_YEAR,
    });
    listToSave.push(newSongInfo);
  }

  saveDataToMongo();
};

// 2020년대가 아닌
const forOthers = () => {
  const yearList = getList();

  for (let x of yearList) {
    for (let y of target_data[TARGET_YEAR][x]) {
      let newItem = { ...y, year: x };
      listToSave.push(newItem);
    }
  }
  saveDataToMongo();
};

const saveDataToMongo = () => {
  target_schema[TARGET_YEAR].insertMany([...listToSave], (err) => {
    err ? console.log(err) : console.log('성공');
  });
};

const saveListOfSongs = () => {
  if (TARGET_YEAR === 2020) for2020();
  else forOthers();
};

saveListOfSongs();
