import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  padding: 1rem;
  margin-bottom: 2rem;

  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;

  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.2) 0%,
    rgba(255, 255, 255, 0.8) 100%
  );
  box-shadow: 0 8px 20px 0 rgba(251, 128, 165, 0.2);
  backdrop-filter: blur(14.5px);
  -webkit-backdrop-filter: blur(14.5px);
  border-radius: 9px;
  border: 1px solid rgba(255, 255, 255, 0.3);
`;

const Title = styled.span`
  font-weight: 200;
  font-size: 18px;
`;

const Content = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: black;
`;

const Em = styled.span`
  font-weight: bold;
`;

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
    <Wrapper>
      <Title>
        ✨ <Em>{existingUserName}</Em>
        님의 이전 최고 기록
      </Title>
      <Content>{existingUserRecord}초</Content>
    </Wrapper>
  );
};

export default PreviousRecord;
