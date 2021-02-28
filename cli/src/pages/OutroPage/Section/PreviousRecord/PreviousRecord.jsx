import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { COLORS, SIZES, FONT } from '../../../../constants/theme';
import { BiRocket } from 'react-icons/bi';

const Wrapper = styled.div`
  width: 100%;
  height: 2.5rem;
  padding: 1rem;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  border: 1px solid ${COLORS.shadowLight};
  box-shadow: 0 4px 8px 0 ${COLORS.shadowLight};
  border-radius: ${SIZES.radiusSmall};
`;

const Title = styled.span`
  font-size: 16px;
  font-weight: 200;
  font-family: ${FONT.korean};
  display: flex;
  align-items: center;
  color: ${COLORS.contentGrayLight};
`;

const Content = styled.span`
  font-size: 16px;
  color: ${COLORS.primaryThree};
  font-family: ${FONT.english};
  font-weight: bold;
`;

const Bold = styled.span`
  font-weight: bold;
  margin-left: 0.3rem;
  color: black;
`;

const PreviousRecord = ({ userRankList, userName, userId }) => {
  const [myBestRecord, setMyBestRecord] = useState();

  useEffect(() => {
    const filtered = userRankList.filter((record) => record._id === userId)[0]
      .record;
    setMyBestRecord(filtered);
    // eslint-disable-next-line
  }, []);

  return (
    <Wrapper>
      <Title>
        <BiRocket /> <Bold>{userName}</Bold>
        님의 이전 최고 기록
      </Title>
      <Content>{myBestRecord} 초</Content>
    </Wrapper>
  );
};

export default PreviousRecord;
