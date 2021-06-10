import React, { useContext } from 'react';

import { RiTimer2Line } from 'react-icons/ri';
import { FiCheckCircle, FiX } from 'react-icons/fi';

import Accordion from '../../../../components/Accordion/Accordion';
import {
  TableContainer,
  TableContext,
  TitleContainer,
  TitleList,
} from './CurrentRecord.styles';
import useOutroPage from '../../../../hook/useOutroPage';
import { GameResultContext } from '../../../../context/GameResultContext';

const CurrentRecord = ({ averageResponseTime }) => {
  const { countAnswer } = useOutroPage();
  const [gameResult] = useContext(GameResultContext);

  const title = (
    <TitleContainer>
      <ul id='list-container'>
        <TitleList>
          <FiCheckCircle />
          {countAnswer.correct}개
        </TitleList>
        <TitleList>
          <FiX />
          {countAnswer.wrong}개
        </TitleList>
        <TitleList>
          <RiTimer2Line />
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
