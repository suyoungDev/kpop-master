import React, { useContext } from 'react';
import styled from 'styled-components';
import { COLORS, SIZES, FONTS } from '../../constants/theme';

import { GameResultContext } from '../GameResultContext/GameResultContext';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
`;

const Log = styled.p`
  margin-top: ${SIZES.base}px;
  color: ${COLORS.darkGray};
  font-family: ${FONTS.engBody};
  font-size: ${SIZES.font}px;
`;

const Session = () => {
  const [gameResult, setGameResult] = useContext(GameResultContext);

  let resultList = gameResult.map((song) => song.result);

  return (
    <Wrapper key={resultList.id}>
      {resultList.map((item) => (
        <Log>{item === 'correct' ? '🌼' : '✖'}</Log>
      ))}
    </Wrapper>
  );
};

export default Session;
