import React, { useContext } from 'react';
import styled from 'styled-components';

import { FiCheckCircle } from 'react-icons/fi';
import { FiX } from 'react-icons/fi';

import Glass from '../../../../GlassContainer/Glass';

import { GameResultContext } from '../../../../GameResultContext/GameResultContext';

const Wrapper = styled.div`
  width: 20rem;
  height: 2.5rem;
  padding: 5px 2.7rem 0 2.7rem;
  margin-bottom: 1rem;

  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;

  background: rgba(131, 127, 127, 0.082);
  backdrop-filter: blur(14.5px);
  -webkit-backdrop-filter: blur(4.5px);
  border-radius: 10px;
  border: 1px solid rgba(165, 165, 165, 0.233);
`;

const Log = styled.span`
  color: black;
  font-family: 'Raleway';
  padding-right: 0.4rem;
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
