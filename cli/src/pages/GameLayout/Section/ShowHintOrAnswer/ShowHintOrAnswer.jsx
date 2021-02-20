import React from 'react';
import styled from 'styled-components';

import { AiFillAlert } from 'react-icons/ai';

import Hint from '../Hint/Hint';
import Snippet from '../../../../components/Snippet/Snippet';

import { COLORS, FONT, SCREEN, SIZES } from '../../../../constants/theme';

const Wrapper = styled.div`
  width: 360px;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${SCREEN.tablet} {
    width: 100%;
  }
`;

const TextContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  .showHints {
    display: flex;
    align-self: flex-start;
    margin-bottom: 2rem;
  }

  #icon {
    margin-right: 5px;
  }
`;

const Title = styled.div`
  display: flex;
  width: 100%;
  height: 36px;
  align-items: flex-start;
  margin-bottom: 1.5rem;

  @media ${SCREEN.tablet} {
    width: ${SIZES.gameLayoutMediumWidth};
    margin-bottom: 0;
  }
`;

const Content = styled.div`
  display: flex;
  width: ${SIZES.gameLayoutMediumWidth};
  height: 100%;
  justify-content: center;
  align-items: center;

  color: ${COLORS.textDark};
  font-family: ${FONT.english};
  font-size: 1.6rem;
  font-weight: 800;
  text-align: center;
  letter-spacing: 2px;
  flex-wrap: nowrap;
  color: ${COLORS.textDark};

  @media ${SCREEN.tablet} {
    font-size: 1.7rem;
  }
`;

const HintContainer = ({ children, hint, showHints }) => {
  return (
    <TextContainer>
      <Title>
        <Snippet tips className={`showHints ${showHints ? 'hint' : 'correct'}`}>
          <AiFillAlert id='icon' size='0.8rem' />
          {hint ? 'hint' : '정답'}
        </Snippet>
      </Title>
      <Content>{children}</Content>
    </TextContainer>
  );
};

const ShowHintOrAnswer = ({ trackName, showHints, timeOver }) => {
  return (
    <Wrapper>
      {showHints && !timeOver && (
        <HintContainer hint showHints>
          <Hint trackName={trackName} />
        </HintContainer>
      )}
      {timeOver && <HintContainer>{trackName}</HintContainer>}
    </Wrapper>
  );
};

export default ShowHintOrAnswer;
