import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { RiSave2Fill } from 'react-icons/ri';

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
    setName('');
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
    <>
      {!nameSaved && (
        <div className={`saving-records ${isSaving && 'saved'}`}>
          <div className='title-wrapper'>
            <span>
              <RiSave2Fill id='icon' />
              기록을 저장하시겠습니까?
            </span>
            <span id='record-alert'>
              저장하지 않으면 랭킹에 기록되지 않습니다.
            </span>
          </div>
          <form onSubmit={addName}>
            <div className='name-input-wrapper'>
              <input
                placeholder='your name'
                type='text'
                value={name}
                onChange={update}
                minLength='3'
                maxLength='15'
                title='3 to 10 charactor avaiable'
                autoComplete='off'
                required
                disabled={isSaving && 'true'}
              />
              <button disabled={isSaving && 'true'}>기록 남기기</button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default SavingMyRecord;
