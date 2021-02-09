import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 90%;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0.5rem;
  border-top: 1px solid rgba(0, 0, 0, 0.3);
`;

const Title = styled.span`
  font-weight: 200;
  font-size: 18px;

  background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  background-repeat: no-repeat;
  background-size: 100% 0.3em;
  background-position: 0 80%;
  transition: background-size 0.25s ease-in;

  &:hover {
    background-size: 100% 88%;
  }
`;

const Content = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.8);
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
        <Em>{existingUserName}</Em>
        님의 최고 기록
      </Title>
      <Content>{existingUserRecord}초</Content>
    </Wrapper>
  );
};

export default PreviousRecord;
