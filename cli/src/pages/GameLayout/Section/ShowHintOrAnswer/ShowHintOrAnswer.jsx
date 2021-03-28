import React from 'react';

import { AiFillAlert } from 'react-icons/ai';

import Hint from '../Hint/Hint';
import Snippet from '../../../../components/Snippet/Snippet';
import {
  Wrapper,
  TextContainer,
  Title,
  Content,
  ArtistName,
} from './ShowHintOrAnswer.styles';

import Timer from '../Timer';

const HintContainer = ({ children, showHints, currentRound, timeOver }) => {
  return (
    <TextContainer>
      <Title>
        <Snippet
          hint
          className={`${showHints && 'hint'} ${timeOver && 'correct'}`}
        >
          <AiFillAlert id='icon' size='0.8rem' />
          {timeOver ? '정답' : 'hint'}
        </Snippet>

        <Timer
          currentRound={currentRound}
          timeOver={timeOver}
          showHints={showHints}
        />
      </Title>
      <Content>{children}</Content>
    </TextContainer>
  );
};

const ShowHintOrAnswer = ({
  trackName,
  artist,
  showHints,
  timeOver,
  ...otherProps
}) => {
  return (
    <Wrapper>
      <HintContainer showHints={showHints} timeOver={timeOver} {...otherProps}>
        {showHints && !timeOver && (
          <>
            <Hint trackName={trackName} />
            <ArtistName>{artist}</ArtistName>
          </>
        )}

        {timeOver && (
          <>
            {trackName}
            <ArtistName>{artist}</ArtistName>
          </>
        )}
      </HintContainer>
    </Wrapper>
  );
};

export default ShowHintOrAnswer;
