import React, { useState, useEffect } from 'react';

import { RiTimer2Line } from 'react-icons/ri';
import { FiCheckCircle } from 'react-icons/fi';
import { FiX } from 'react-icons/fi';

import Accordion from '../Accordion/Accordion';
import {
  TableContainer,
  TableContext,
  TitleContainer,
  TitleList,
} from './CurrentRecord.styles';

const CurrentRecord = ({ gameResult, averageResponseTime }) => {
  const [quantityOfCorrect, setquantityOfCorrect] = useState(0);
  const [quantityOfWrong, setQuantitiyOfWrong] = useState(0);

  useEffect(() => {
    const correct = gameResult.filter((game) => game.result === 'correct')
      .length;
    setquantityOfCorrect(correct);

    const wrong = gameResult.filter((game) => game.result === 'wrong').length;
    setQuantitiyOfWrong(wrong);
    // eslint-disable-next-line
  }, []);

  const title = (
    <TitleContainer>
      <ul id='list-container'>
        <TitleList>
          <FiCheckCircle className='icon' />
          {quantityOfCorrect}개
        </TitleList>
        <TitleList>
          <FiX className='icon' />
          {quantityOfWrong}개
        </TitleList>
        <TitleList>
          <RiTimer2Line className='icon' />
          평균 {averageResponseTime}초
        </TitleList>
      </ul>
    </TitleContainer>
  );

  const content = (
    <TableContainer>
      <tbody>
        {gameResult.map((song) => (
          <tr key={song.id}>
            <TableContext id='index' isWorng={song.result}>
              {song.roundIndex + 1}
            </TableContext>
            <TableContext isWorng={song.result} id='trackName'>
              {song.trackName} - {song.artistName}
            </TableContext>
            <TableContext isWorng={song.result}>
              {(song.responseTime / 1000).toFixed(2)}
            </TableContext>
            <TableContext isWorng={song.result}>
              {song.result === 'wrong' ? <FiX /> : <FiCheckCircle />}
            </TableContext>
          </tr>
        ))}
      </tbody>
    </TableContainer>
  );

  return <Accordion title={title} content={content} />;
};

export default CurrentRecord;
