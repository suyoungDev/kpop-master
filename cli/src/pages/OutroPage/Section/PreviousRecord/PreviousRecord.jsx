import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { COLORS, SIZES, FONT } from '../../../../constants/theme';

const Wrapper = styled.div`
  width: 100%;
  padding: 1rem;
  margin-bottom: 2rem;

  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;

  border: 1px solid ${COLORS.grayMiddle};
  box-shadow: 0 4px 8px 0 ${COLORS.grayMiddle};
  border-radius: ${SIZES.radiusSmall};
`;

const Title = styled.span`
  font-weight: 200;
  font-size: 18px;
  font-family: ${FONT.korean};
`;

const Content = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: black;
`;

const Bold = styled.span`
  font-weight: bold;
`;

// 이전 기록이 있을 경우, 자동으로 DB에 저장하기
// 이전 기록과 비교해서 지금이 더 나으면 local에 저장하기
const PreviousRecord = ({ averageResponseTime, gameResult }) => {
  const [existingUserName, setExistingUserName] = useState('');
  const [existingUserRecord, setExistingUserRecord] = useState('');

  useEffect(() => {
    const userName = localStorage.getItem('_userName');

    if (userName) {
      if (averageResponseTime > 0) {
        uploadRecordToDB(userName);
        setExistingUserName(userName);

        const previousRecord = localStorage.getItem('_personalRecord');
        setExistingUserRecord(previousRecord);

        const comparedResult = compareRecord(
          previousRecord,
          averageResponseTime
        );
        if (comparedResult === 'better now') {
          uploadRecordToLocal(averageResponseTime);
        }
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
        ✨ <Bold>{existingUserName}</Bold>
        님의 이전 최고 기록
      </Title>
      <Content>{existingUserRecord}초</Content>
    </Wrapper>
  );
};

export default PreviousRecord;
