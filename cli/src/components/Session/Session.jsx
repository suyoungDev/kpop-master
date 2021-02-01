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

  return (
    <Wrapper>
      {gameResult.map((song, idx) => (
        <Log key={song.id}>{song.result === 'correct' ? '🌼' : '✖'}</Log>
      ))}
    </Wrapper>
  );
};

export default Session;
