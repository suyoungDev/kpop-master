import React from 'react';
import styled from 'styled-components';

import { AiFillAlert } from 'react-icons/ai';

import Hint from '../Hint/Hint';
import Snippet from '../../../../components/Snippet/Snippet';

import { COLORS, FONT, SIZES } from '../../../../constants/theme';

const Wrapper = styled.div`
  width: 100%;
  max-width: 400px;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-family: ${FONT.korean};
  font-size: 2rem;
  font-weight: bold;
  color: ${COLORS.textDark};
  letter-spacing: 3px;
`;

const TextContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  font-family: 'Montserrat', sans-serif;

  .showHints {
    display: flex;
    align-self: flex-start;
    margin-bottom: 2rem;
  }

  #icon {
    margin-right: 5px;
  }
`;

const Alarm = styled.div`
  display: flex;
  width: 100%;
  height: 36px;
  align-items: flex-start;
`;
const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const HintContainer = ({ children, hint, showHints }) => {
  return (
    <TextContainer>
      <Alarm>
        <Snippet tips className={`showHints ${showHints ? 'hint' : 'correct'}`}>
          <AiFillAlert id='icon' size='1rem' />
          {hint ? 'hint' : '정답'}
        </Snippet>
      </Alarm>
      <Content>{children}</Content>
    </TextContainer>
  );
};

const ShowHintOrAnswer = ({ trackName, showHints, timeOver }) => {
  return (
    <Wrapper>
      {showHints && timeOver === false && (
        <HintContainer hint showHints>
          <Hint trackName={trackName} />
        </HintContainer>
      )}
      {timeOver && <HintContainer>{trackName}</HintContainer>}
    </Wrapper>
  );
};

export default ShowHintOrAnswer;
