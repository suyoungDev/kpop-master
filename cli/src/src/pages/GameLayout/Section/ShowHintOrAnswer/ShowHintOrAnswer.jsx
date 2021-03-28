import React from 'react';
import styled from 'styled-components';

import { AiFillAlert } from 'react-icons/ai';

import Hint from '../Hint/Hint';
import Snippet from '../../../../components/Snippet/Snippet';

import { COLORS, FONT, SCREEN, SIZES } from '../../../../constants/theme';

const Wrapper = styled.div`
  width: 90%;
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
  margin-bottom: 1.1rem;

  @media ${SCREEN.tablet} {
    width: ${SIZES.gameLayoutMediumWidth};
    margin-bottom: 0;
  }
`;

const Content = styled.div`
  height: 100%;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: ${COLORS.headingDarkGray};
  font-family: ${FONT.english};
  font-size: 1.6rem;
  font-weight: 800;
  text-align: center;
  letter-spacing: 2px;
  flex-wrap: nowrap;
  color: ${COLORS.headingDarkGray};

  @media ${SCREEN.tablet} {
    width: ${SIZES.gameLayoutMediumWidth};
    font-size: 1.7rem;
  }
`;

const ArtistName = styled.span`
  font-size: 12px;
  color: ${COLORS.contentGrayLight};
  text-align: center;
  margin-top: 0.5rem;
  font-weight: 200;
  letter-spacing: 0;

  @media ${SCREEN.tablet} {
    margin-top: 1rem;
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

const ShowHintOrAnswer = ({ trackName, artist, showHints, timeOver }) => {
  return (
    <Wrapper>
      {showHints && !timeOver && (
        <HintContainer hint showHints>
          <Hint trackName={trackName} />
          <ArtistName>{artist}</ArtistName>
        </HintContainer>
      )}
      {timeOver && (
        <HintContainer>
          {trackName}
          <ArtistName>{artist}</ArtistName>
        </HintContainer>
      )}
    </Wrapper>
  );
};

export default ShowHintOrAnswer;
