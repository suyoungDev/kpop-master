import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { RiSave2Fill } from 'react-icons/ri';

import CleanCard from '../../../../components/Card/CleanCard';
import SavingWrapper from '../SavingWrapper/SavingWrapper';
import SavingInputcontainer from '../SavingInputcontainer/SavingInputcontainer';
import './SavingMyRecord.scss';

import { TrackListToPlayContext } from '../../../../context/TrackListToPlayContext';

import useInput from '../../../../hook/useInput';

// 이전 데이터가 있으면 이거 자체가 안보이게
// 이전 데이터가 없으면 이름 입력 & db와 로컬에 기록 저장
const SavingMyRecord = ({ averageResponseTime, gameResult }) => {
  const [name, setName] = useInput('');
  const [alreadySavedName, setAlreadySavedName] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  // eslint-disable-next-line
  const [trackListToPlay] = useContext(TrackListToPlayContext);

  useEffect(() => {
    const saved = localStorage.getItem('_userName');
    setAlreadySavedName(saved);
  }, []);

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

    const gameData = {
      userName: user,
      record: averageResponseTime,
      correctTrackName: correctAnswers,
      wrongTrackName: wrongAnswers,
      gameResult: gameResult,
      theme: trackListToPlay.theme,
    };

    axios.post('/api/game/upload', gameData);
  };

  return (
    <>
      {!alreadySavedName && (
        <CleanCard savingRecord className={`${isSaving && 'saved'}`}>
          <SavingWrapper>
            <div>
              <RiSave2Fill id='icon' />
              기록을 저장하시겠습니까?
            </div>
            <span>저장하지 않으면 랭킹에 기록되지 않습니다.</span>
          </SavingWrapper>
          <SavingInputcontainer onSubmit={addName}>
            <div className='name-input-wrapper'>
              <input
                placeholder='이름'
                type='text'
                value={name}
                onChange={setName}
                minLength='2'
                maxLength='10'
                autoComplete='off'
                required
                disabled={isSaving}
              />
              <button disabled={isSaving}>저장</button>
            </div>
          </SavingInputcontainer>
        </CleanCard>
      )}
    </>
  );
};

export default SavingMyRecord;
