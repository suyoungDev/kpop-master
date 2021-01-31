import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 5px;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: black;
  color: white;
  width: 100%;
  height: auto;
  font-weight: 400;
  padding: 5px;
  margin: 5px;
`;

const IndexDiv = styled.div`
  width: 70px;
`;

const TrackDiv = styled.div`
  width: 200px;
`;
const DurationDiv = styled.div`
  width: 100px;
  text-align: end;
`;

const ResultList = ({ resultList, wrong }) => {
  const [condition, setCondition] = useState(true);

  useEffect(() => {
    wrong ? setCondition('wrong') : setCondition('correct');
  }, []);

  return (
    <Container>
      <TitleWrapper>
        <IndexDiv>순서</IndexDiv>
        <TrackDiv>곡명</TrackDiv>
        <DurationDiv>기록(초)</DurationDiv>
      </TitleWrapper>
      {resultList
        .filter((song) => song.result === condition)
        .map((song) => (
          <ContentWrapper key={song.id}>
            <IndexDiv>{song.roundIndex + 1}</IndexDiv>
            <TrackDiv>{song.trackName}</TrackDiv>
            <DurationDiv>00.00</DurationDiv>
          </ContentWrapper>
        ))}
    </Container>
  );
};

export default ResultList;
