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
  margin-top: -0.2rem;
`;

const Tablehead = styled.th`
  color: black;
  padding: 10px;
  height: 1rem;
  font-weight: bold;
`;

const TableContext = styled.th`
  color: ${({ isWorng }) => (isWorng === 'correct' ? 'black' : 'red')};
  font-weight: 200;
  overflow: hidden;
  padding: 0.3rem 1rem;
`;

const CurrentRecord = ({ gameResult }) => {
  const content = useRef(null);

  const [isActivate, setIsActivate] = useState(false);
  const [tableHeight, setTableHeight] = useState('0rem');

  const toggleAccordion = () => {
    setIsActivate(!isActivate);
    setTableHeight(isActivate ? '0rem' : `${content.current.scrollHeight}px`);
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
    <div className='current-record-table'>
      <button className='table-title-wrapper' onClick={toggleAccordion}>
        <div className='table-title'>
          <ul id='explain-count-list'>
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
        </div>
        <FiChevronRight
          className={`${isActivate && 'rotate'} accordion-icon`}
          size='1.2rem'
        />
      </button>

      <div
        className='current-record-content'
        style={{ height: tableHeight }}
        ref={content}
      >
        <TableContainer>
          <Tablehead id='index'>순서</Tablehead>
          <Tablehead>노래 제목</Tablehead>
          <Tablehead>초</Tablehead>
          <Tablehead>결과</Tablehead>

          {gameResult.map((song) => (
            <tr key={song.id}>
              <TableContext id='index' isWorng={song.result}>
                {song.roundIndex + 1}
              </TableContext>
              <TableContext isWorng={song.result} id='trackName'>
                {song.trackName}
              </TableContext>
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
    </div>
  );
};

export default CurrentRecord;
