import React, { useContext } from 'react';
import styled from 'styled-components';
import { COLORS, SIZES, FONTS } from '../../constants/theme';
import { FiCheckCircle } from 'react-icons/fi';
import { FiX } from 'react-icons/fi';

import { GameResultContext } from '../GameResultContext/GameResultContext';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  padding: 0.5rem 1.3rem;
  width: 17rem;
  height: 2rem;
`;

const Log = styled.p`
  margin-top: ${SIZES.base}px;
  color: black;
  font-family: ${FONTS.engBody};
  font-size: ${SIZES.font}px;
  padding: 2px;
`;

const Session = () => {
  // eslint-disable-next-line
  const [gameResult, setGameResult] = useContext(GameResultContext);

  return (
    <Wrapper>
      {gameResult.map((song, idx) => (
        <Log key={song.id}>
          {song.result === 'correct' ? (
            <FiCheckCircle size='1.2rem' color='white' />
          ) : (
            <FiX size='1.2rem' color='rgba(255,255,255,0.4)' />
          )}
        </Log>
      ))}
    </Wrapper>
  );
};

export default Session;
