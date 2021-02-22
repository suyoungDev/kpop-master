import React, { useContext } from 'react';
import styled from 'styled-components';

import { COLORS, SCREEN, SIZES } from '../../../../constants/theme';

import { GameResultContext } from '../../../../context/GameResultContext/GameResultContext';

const Wrapper = styled.div`
  width: 100%;
  height: 0.4rem;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: ${COLORS.primaryMiddle};
  margin-bottom: 1.5rem;

  @media ${SCREEN.tablet} {
    max-width: ${SIZES.gameLayoutWidth};
    background-color: ${COLORS.shadowLight};
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
    background-color: ${COLORS.headingDarkGray};
  }

  @media ${SCREEN.tablet} {
    &.wrong {
      background-color: ${COLORS.contentGrayLight};
    }
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
          key={item.id}
        />
      ))}
    </Wrapper>
  );
};

export default Session;
