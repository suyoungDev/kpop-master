/*
  saveMelonList.js로 저장한 데이터를 몽고디비에 올리기 위해 작성한 파일
  애플리케이션에 더이상 필요없는 파일임
  직접 이 파일 루트를 타고 들어와서 실행해야 함
*/
require('dotenv').config();

const mongoose = require('mongoose');
const {
  year2021,
  year2020,
  year2010,
  year2000,
  year1990,
} = require('../model/SongsOfYear');

const melon2021 = require('./melonList2021.json');
// const melon2020 = require('./melonList2020.json');
// const melon2010 = require('./melonList2010.json');
// const melon2000 = require('./melonList2000.json');
// const melon1990 = require('./melonList1990.json');

const mongo = process.env.MONGO_URI;
mongoose
  .connect(mongo, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log('MongoDB Connected...🌼'))
  .catch((err) => console.log(err));

const targetSchema = {
  2021: year2021,
  2020: year2020,
  2010: year2010,
  2000: year2000,
  1990: year1990,
};
const targetData = {
  2021: melon2021,
  // 2020: melon2020,
  // 2010: melon2010,
  // 2000: melon2000,
  // 1990: melon1990,
};

// 몽고디비에 저장할 데이터 리스트
let listToSave = [];

// 해당 era의 숫자 array 가져오기
const getListOfYears = (targetYear) => {
  const listOfYears = [];
  for (let i = 0; i < 10; i++) {
    listOfYears.push(targetYear + i);
  }
  return listOfYears;
};

const forSpecificYear = (targetYear) => {
  for (const songInfo of targetData[targetYear]) {
    const newSongInfo = new targetSchema[targetYear]({
      ...songInfo,
      year: targetYear,
    });
    listToSave.push(newSongInfo);
  }

  uploadListToMongo();
};

const forEra = (targetYear) => {
  const yearList = getListOfYears(targetYear);
  for (const year of yearList) forSpecificYear(year);
  uploadListToMongo();
};

const uploadListToMongo = (targetYear) => {
  targetSchema[targetYear].insertMany(listToSave, (err) => {
    err ? console.error(err) : console.log('성공');
  });
};

const saveListOfSongs = (targetYear) => {
  if (targetYear === 2020 || targetYear === 2021) forSpecificYear(targetYear);
  else forEra(targetYear);
};

saveListOfSongs(2021);
