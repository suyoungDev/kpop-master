import React from 'react';
import styled from 'styled-components';

const TableContainer = styled.table`
  width: 460px;
`;

const Tablehead = styled.th`
  background-color: gray;
  color: white;
  padding: 15px;
`;

const TableContext = styled.th`
  color: ${({ isWorng }) => (isWorng === 'correct' ? 'black' : 'red')};
`;

const CurrentRecord = ({ gameResult }) => {
  const quantityOfCorrect = gameResult.filter(
    (game) => game.result === 'correct'
  ).length;
  const quantityOfWrong = gameResult.filter((game) => game.result === 'wrong')
    .length;

  const totalResponseTime = gameResult
    .map((item) => item.responseTime)
    .reduce((previous, currrent) => previous + currrent, 0);

  const averageResponseTime = (totalResponseTime / 10000).toFixed(2);

  return (
    <div style={{ marginTop: '50px' }}>
      <div>
        <div style={{ textAlign: 'right' }}>
          <p>🧭 평균 {averageResponseTime} 초 걸림</p>
          <p>맞춘 곡 {quantityOfCorrect}개</p>
          <p>틀린 곡 {quantityOfWrong}개</p>
        </div>
        <TableContainer>
          <Tablehead>순서</Tablehead>
          <Tablehead>노래 제목</Tablehead>
          <Tablehead>초</Tablehead>
          <Tablehead>결과</Tablehead>
          {gameResult.map((song) => (
            <tr key={song.id}>
              <TableContext isWorng={song.result}>
                {song.roundIndex}
              </TableContext>
              <TableContext isWorng={song.result}>
                {song.trackName}
              </TableContext>
              <TableContext isWorng={song.result}>
                {(song.responseTime / 1000).toFixed(2)}
              </TableContext>
              <TableContext isWorng={song.result}>
                {song.result === 'wrong' ? '✖' : '✔'}
              </TableContext>
            </tr>
          ))}
        </TableContainer>
      </div>
    </div>
  );
};

export default CurrentRecord;
