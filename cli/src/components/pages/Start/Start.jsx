import React, { useState, useEffect, useRef } from 'react';
import useSound from 'use-sound';

import QuizLeft from '../../QuizLeft/QuizLeft';
import styled from 'styled-components';
import Logging from '../../Logging/Logging';
import Player from '../../Player/Player';

import { blackpinkData } from '../../../data/blackpink';

import correctSfx from '../../../sounds/correct.mp3';
import wrongSfx from '../../../sounds/wrong1.mp3';

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
  const [url, setUrl] = useState('');

  const focusedInput = useRef(null);

  useEffect(() => {
    let result = blackpinkData.sort(() => Math.random() - 0.5).slice(0, 10);
    if (currentRound === 0) {
      setShuffled(result);
    }

    setUrl(shuffled[currentRound].url);

    focusedInput.current.focus();

    // currentRound < 9 &&
    //   setTimeout(() => {
    //     setCurrentRound(currentRound + 1);
    //   }, 11000);
  }, [currentRound]);

  const [playCorrect] = useSound(correctSfx);
  const [playWrong] = useSound(wrongSfx);

  const isCorrect = (answer) => {
    const regex = /\W/g;
    let givenAnswer = answer.toLowerCase().replace(regex, '');

    let correct = shuffled[currentRound].trackName
      .toLowerCase()
      .replace(regex, '');
    let alterCorrect = shuffled[currentRound].alterTrackName
      .toLowerCase()
      .replace(regex, '');

    if (givenAnswer === correct || givenAnswer === alterCorrect) {
      goNextRound();
      playCorrect();
    } else {
      playWrong();
    }
  };

  const goNextRound = () => {
    if (currentRound === 9) {
      return setUrl('');
    }

    setCurrentRound(currentRound + 1);
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
      <Wrapper>
        <QuizLeft passed={currentRound + 1} left='10' />
      </Wrapper>

      <Player url={url} />

      <p>answer: {shuffled[currentRound].trackName}</p>
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
