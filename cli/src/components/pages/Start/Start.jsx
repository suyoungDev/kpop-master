import React, { useState, useEffect, useRef } from 'react';
import useSound from 'use-sound';

import QuizLeft from '../../QuizLeft/QuizLeft';
import styled from 'styled-components';
import LogList from '../../LogList/LogList';
import Player from '../../Player/Player';
import Session from '../../Session/Session';

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

const AnswerWrapper = styled.div`
  position: absolute;
  width: auto;
  height: auto;
  margin-top: 50rem;
  align-self: center;
  justify-self: center;
  display: flex;
  flex-direction: column;
`;

const Test = () => {
  const [shuffled, setShuffled] = useState(blackpinkData);
  const [currentRound, setCurrentRound] = useState(0);
  const [url, setUrl] = useState('');

  const [inputValue, setInputValue] = useState('');
  const [givenAnswersList, setGivenAnswersList] = useState([]);

  const [resultList, setResultList] = useState([]);

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
    const regex = /[ '"-]+/g;
    const englishRegex = /\w/g;

    let givenAnswer = '';
    let correct = shuffled[currentRound].trackName;
    let alterCorrect = shuffled[currentRound].alterTrackName;

    englishRegex.test(answer)
      ? (givenAnswer = answer.toLowerCase().replace(regex, ''))
      : (givenAnswer = answer.replace(regex, ''));

    englishRegex.test(correct)
      ? (correct = correct.toLowerCase().replace(regex, ''))
      : (correct = correct.replace(regex, ''));

    englishRegex.test(alterCorrect)
      ? (alterCorrect = alterCorrect.toLowerCase().replace(regex, ''))
      : (alterCorrect = alterCorrect.replace(regex, ''));

    if (givenAnswer === correct || givenAnswer === alterCorrect) {
      playCorrect();
      goNextRound();
    } else {
      playWrong();
    }
  };

  const goNextRound = () => {
    const newResult = {
      id: Math.random().toString(36).substr(2, 9),
      title: shuffled[currentRound].trackName,
      result: true,
    };

    setResultList([...resultList, newResult]);

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

      <Session resultList={resultList} />
      <AnswerWrapper>
        <form onSubmit={answerSubmit}>
          <input
            placeholder='guess what?'
            type='text'
            value={inputValue}
            onChange={onChange}
            ref={focusedInput}
          />

          {shuffled[currentRound].trackName}

          <LogList giveAnswers={givenAnswersList} />
        </form>
      </AnswerWrapper>

      <Player url={url} />
    </Container>
  );
};

export default Test;
