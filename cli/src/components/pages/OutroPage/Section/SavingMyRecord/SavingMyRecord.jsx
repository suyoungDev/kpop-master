import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { AwesomeButtonProgress } from 'react-awesome-button';
import AwesomeButtonStyles from 'react-awesome-button/dist/themes/theme-blue.css';

import './SavingMyRecord.scss';

// 이전 데이터가 있으면 이거 자체가 안보이게
// 이전 데이터가 없으면 이름 입력 & db와 로컬에 기록 저장
const SavingMyRecord = ({ averageResponseTime, gameResult }) => {
  const [name, setName] = useState('');
  const [nameSaved, setNameSaved] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('_userName');
    setNameSaved(saved);
  }, []);

  const update = (event) => {
    setName(event.target.value);
  };

  const addName = (event) => {
    event.preventDefault();
    uploadRecordToLocal(name);
    uploadRecordToDB(name);
    setIsSaving(true);
  };

  const uploadRecordToLocal = (userName) => {
    localStorage.setItem('_userName', userName);
    localStorage.setItem('_personalRecord', averageResponseTime);
  };

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

  return (
    <div>
      {!nameSaved && (
        <div className='saving-records'>
          <div className='title-wrapper'>
            <h2>랭킹에 저장하시겠습니까?</h2>
          </div>
          <form onSubmit={addName}>
            <div className='name-input-wrapper'>
              <input
                placeholder='your name'
                type='text'
                value={name}
                onChange={update}
                minLength='3'
                maxLength='10'
                title='3 to 10 charactor avaiable'
                autoComplete='off'
              />

              <AwesomeButtonProgress
                size='small'
                type='primary'
                cssModule={AwesomeButtonStyles}
                loadingLabel='기록 남기는 중...'
                resultLAbel='성공!'
                fakePress='true'
                disabled={isSaving && 'true'}
                action={(elem, next) => addName()}
                ripple
              >
                기록 남기기
              </AwesomeButtonProgress>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default SavingMyRecord;
