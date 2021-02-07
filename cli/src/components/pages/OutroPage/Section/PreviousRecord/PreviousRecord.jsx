import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PreviousRecord';

// 이전 기록과 비교해서 지금이 더 나으면 local에 저장하기
// 비교하지 않고 그냥 자동으로 DB에 저장하기
// 위의 두개 다 수행
const PreviousRecord = ({ averageResponseTime, gameResult }) => {
  const [existingUserName, setExistingUserName] = useState('');
  const [existingUserRecord, setExistingUserRecord] = useState('');

  useEffect(() => {
    const userName = localStorage.getItem('_userName');

    if (userName) {
      uploadRecordToDB(userName);
      setExistingUserName(userName);

      const previousRecord = localStorage.getItem('_personalRecord');
      setExistingUserRecord(previousRecord);

      const comparedResult = compareRecord(previousRecord, averageResponseTime);
      if (comparedResult === 'better now') {
        uploadRecordToLocal(averageResponseTime);
      }
    }
    // eslint-disable-next-line
  }, []);

  const uploadRecordToDB = (user) => {
    const correctAnswers = gameResult
      .filter((game) => game.result === 'correct')
      .map((song) => song.trackName);

    const wrongAnswers = gameResult
      .filter((game) => game.result === 'wrong')
      .map((song) => song.trackName);

    const userData = {
      userName: user,
      record: averageResponseTime,
      correctTrackName: correctAnswers,
      wrongTrackName: wrongAnswers,
      gameResult: gameResult,
    };

    axios.post('/api/user/upload', userData);
  };

  const uploadRecordToLocal = (currentRecord) => {
    localStorage.setItem('_personalRecord', currentRecord);
  };

  const compareRecord = (previousRecord, currentRecord) => {
    if (previousRecord > currentRecord) {
      return 'better now';
    }
    return 'not better';
  };

  if (!existingUserName) {
    return <div></div>;
  }

  return (
    <div className='previous-record-div'>
      <h3>{existingUserName}님의 최고 기록</h3>
      <h3>{existingUserRecord}초</h3>
    </div>
  );
};

export default PreviousRecord;
