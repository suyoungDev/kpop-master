import React from 'react';
import styled from 'styled-components';

import { FiAlertCircle } from 'react-icons/fi';

import Hint from '../Hint/Hint';

const Wrapper = styled.div`
  width: 80%;
  height: 3rem;
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-display: column;
`;

const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;

    margin-bottom: 0.3rem;

    font-size: 14px;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.5);
    text-align: left;
    // margin: 0.33rem;
    letter-spacing: 1px;
  }

  #icon {
    margin-right: 5px;
  }
`;

const HintContainer = ({ children, hint }) => {
  return (
    <TextContainer hint>
      <span>
        <FiAlertCircle id='icon' />
        {hint ? 'hint' : '정답'}
      </span>
      {children}
    </TextContainer>
  );
};

const ShowHintOrAnswer = ({ trackName, showHints, timeOver }) => {
  return (
    <Wrapper>
      {showHints && timeOver === false && (
        <HintContainer hint>
          <Hint trackName={trackName} />
        </HintContainer>
      )}

      {timeOver && <HintContainer>{trackName}</HintContainer>}
    </Wrapper>
  );
};

export default ShowHintOrAnswer;
