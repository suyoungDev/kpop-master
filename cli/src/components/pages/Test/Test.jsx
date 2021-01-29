import React, { useState, useEffect, useRef } from 'react';
import _, { random } from 'lodash';
import Player from '../../Player/Player';
import QuizLeft from '../../QuizLeft/QuizLeft';
import styled from 'styled-components';
import Logging from '../../Logging/Logging';

import { blackpinkData } from '../../../data/blackpink';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  position: fixed;
  bottom: 0;
`;

const Test = () => {
  const [shuffled, setShuffled] = useState(blackpinkData);
  const [currentRound, setCurrentRound] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [givenAnswersList, setGivenAnswersList] = useState([]);
  const focusedInput = useRef(null);

  useEffect(() => {
    const randomNumber = random(0, blackpinkData.length);
    setShuffled(blackpinkData[randomNumber]);
    focusedInput.current.focus();
  }, []);

  const isCorrect = (answer) => {
    const regex = /\W/g;
    let givenAnswer = answer.toLowerCase().replace(/\W/g, '');

    let correct = shuffled.trackName.toLowerCase().replace(regex, '');
    let alterCorrect = shuffled.alterTrackName.toLowerCase().replace(regex, '');

    if (givenAnswer === correct || givenAnswer === alterCorrect) {
      goNextSong();
    }
    return;
  };

  const goNextSong = () => {
    setCurrentRound(currentRound + 1);
    const randomNumber = random(0, blackpinkData.length);
    setShuffled(blackpinkData[randomNumber]);
  };

  const onChange = (event) => {
    setInputValue(event.target.value);
  };

  const answerSubmit = (event) => {
    event.preventDefault();
    setGivenAnswersList([inputValue, ...givenAnswersList]);
    isCorrect(inputValue);
    setInputValue('');
  };

  return (
    <Container>
      <Player url={shuffled.url} />
      <Wrapper>
        <QuizLeft
          styled={{ position: 'fix', left: 0, top: 0, marginTop: '-50px' }}
          passed={currentRound + 1}
          left='10'
        />
      </Wrapper>

      <p>answer: {shuffled.trackName}</p>

      <form onSubmit={answerSubmit}>
        <input
          placeholder='guess what?'
          type='text'
          value={inputValue}
          onChange={onChange}
          ref={focusedInput}
        />
        {givenAnswersList
          .filter((item, idx) => idx < 5)
          .map((answer, idx) => (
            <Logging key={idx} answer={answer} />
          ))}
      </form>
    </Container>
  );
};

export default Test;
