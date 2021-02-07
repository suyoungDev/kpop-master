import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { RiTimer2Line } from 'react-icons/ri';
import { FONTS } from '../../../../../constants/theme';
import { FiCheckCircle } from 'react-icons/fi';
import { FiX } from 'react-icons/fi';
import { FiChevronRight } from 'react-icons/fi';

import './CurrentRecord.scss';

const TableContainer = styled.table`
  width: 100%;
  font-family: ${FONTS.korBody};
  font-size: 16px;
  font-weight: 200;
  overflow: hidden;
`;

const Tablehead = styled.th`
  color: black;
  padding: 10px;
`;

const TableContext = styled.th`
  color: ${({ isWorng }) => (isWorng === 'correct' ? 'black' : 'red')};
  padding: 4px;
  font-weight: 200;
`;

const CurrentRecord = ({ gameResult }) => {
  const [isActivate, setIsActivate] = useState(false);
  const [tableHeight, setTableHeight] = useState('2rem');

  const toggleAccordion = () => {
    setIsActivate(!isActivate);
    setTableHeight(isActivate ? '2rem' : '26rem');
  };

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
    <div className='current-record-table' style={{ height: `${tableHeight}` }}>
      <button className='table-explain' onClick={toggleAccordion}>
        <ul id='explain-count'>
          <li>
            <span>
              <FiCheckCircle id='icon' />
              맞춘 곡 {quantityOfCorrect}개
            </span>
          </li>
          <li>
            <span>
              <FiX id='icon' />
              틀린 곡 {quantityOfWrong}개
            </span>
          </li>
          <li>
            <span>
              <RiTimer2Line id='icon' />
              평균 {averageResponseTime} 초
            </span>
          </li>
        </ul>

        <FiChevronRight
          className={`${isActivate && 'rotate'} accordion-icon`}
          size='1.2rem'
        />
      </button>

      <TableContainer>
        <Tablehead>순서</Tablehead>
        <Tablehead>노래 제목</Tablehead>
        <Tablehead>초</Tablehead>
        <Tablehead>결과</Tablehead>
        {gameResult.map((song) => (
          <tr key={song.id}>
            <TableContext isWorng={song.result}>
              {song.roundIndex + 1}
            </TableContext>
            <TableContext isWorng={song.result}>{song.trackName}</TableContext>
            <TableContext isWorng={song.result}>
              {(song.responseTime / 1000).toFixed(2)}
            </TableContext>
            <TableContext isWorng={song.result}>
              {song.result === 'wrong' ? <FiX /> : <FiCheckCircle />}
            </TableContext>
          </tr>
        ))}
      </TableContainer>
    </div>
  );
};

export default CurrentRecord;
