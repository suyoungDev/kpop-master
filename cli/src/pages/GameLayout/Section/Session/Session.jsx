import React, { useContext } from 'react';
import styled from 'styled-components';

import { COLORS, SCREEN, SIZES } from '../../../../constants/theme';

import { GameResultContext } from '../../../../context/GameResultContext/GameResultContext';

const Wrapper = styled.div`
  width: 100%;
  height: 1rem;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: ${COLORS.grayMiddle};
  margin-bottom: 2rem;

  @media ${SCREEN.tablet} {
    max-width: ${SIZES.gameLayoutWidth};
    height: 0.7rem;
    margin-bottom: 0;
  }
`;

const SessionBox = styled.div`
  width: 10%;
  height: 100%;
  border-right: 2px solid rgba(255, 255, 255, 0.45);

  &.correct {
    background-color: ${COLORS.secondaryDark};
  }
  &.wrong {
    background-color: ${COLORS.grayDeepDark};
  }
`;

const Session = () => {
  // eslint-disable-next-line
  const [gameResult, setGameResult] = useContext(GameResultContext);
  return (
    <Wrapper>
      {gameResult.map((item) => (
        <SessionBox
          className={`${item.result === 'correct' ? 'correct' : 'wrong'}`}
          id={item.id}
        />
      ))}
    </Wrapper>
  );
};

export default Session;
