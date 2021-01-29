import React, { useState, useEffect, useRef } from 'react';
import useSound from 'use-sound';

import QuizLeft from '../../QuizLeft/QuizLeft';
import styled from 'styled-components';
import LogList from '../../LogList/LogList';
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
  top: 0;
  padding-top: 2rem;
  padding-left: 3rem;
`;

const Test = () => {
  const [shuffled, setShuffled] = useState(blackpinkData);
  const [currentRound, setCurrentRound] = useState(0);
  const [url, setUrl] = useState('');

  const [inputValue, setInputValue] = useState('');
  const [givenAnswersList, setGivenAnswersList] = useState([]);
  const [checkingAnswer, setCheckingAnswer] = useState(false);

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

  const [playCorrect] = useSound(correctSfx, { volume: 0.15 });
  const [playWrong] = useSound(wrongSfx, { volume: 0.15 });

  const isCorrect = (answer) => {
    const regex = /\W/g;
    const givenAnswer = answer.toLowerCase().replace(regex, '');

    const correct = shuffled[currentRound].trackName
      .toLowerCase()
      .replace(regex, '');
    const alterCorrect = shuffled[currentRound].alterTrackName
      .toLowerCase()
      .replace(regex, '');

    if (givenAnswer === correct || givenAnswer === alterCorrect) {
      playCorrect();
      setCheckingAnswer(true);
      goNextRound();
    } else {
      setCheckingAnswer(false);
      return playWrong();
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
            <LogList key={idx} answer={answer} />
          ))}
      </form>
    </Container>
  );
};

export default Test;
