import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

import QuizLeft from '../../QuizLeft/QuizLeft';
import Player from '../../Player/Player';
import Session from '../../Session/Session';
import LogList from '../../LogList/LogList';

import correctSfx from '../../../constants/sounds/correct.mp3';
import wrongSfx from '../../../constants/sounds/wrong1.mp3';

const QuizWrapper = styled.div`
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

const GameLayout = ({ trackList }) => {
  const [inputValue, setInputValue] = useState('');
  const [givenAnswersList, setGivenAnswersList] = useState([]);
  const [resultList, setResultList] = useState([]);

  const [url, setUrl] = useState('');

  const [currentRound, setCurrentRound] = useState(0);
  const [isGameEnded, setIsGameEnded] = useState(false);

  const focusedInput = useRef(null);

  useEffect(() => {
    focusedInput.current.focus();
    // currentRound < 9 &&
    //   setTimeout(() => {
    //     setCurrentRound(currentRound + 1);
    //   }, 11000);
  }, []);

  const [playCorrect] = useSound(correctSfx, { volume: 0.15 });
  const [playWrong] = useSound(wrongSfx, { volume: 0.15 });

  const isCorrect = (answer) => {
    const regex = /[ '"-]+/g;
    const englishRegex = /\w/g;

    let givenAnswer = '';
    let correct = trackList[currentRound].trackName;
    let alterCorrect = trackList[currentRound].alterTrackName;

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
      trackName: trackList[currentRound].trackName,
      result: true,
    };

    setResultList([...resultList, newResult]);

    if (currentRound === 9) {
      setIsGameEnded(true);
      return setUrl('');
    }

    setCurrentRound(currentRound + 1);
    setUrl(trackList[currentRound].url);
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
    <>
      <Player url={url} />
      <QuizWrapper>
        <QuizLeft passed={currentRound + 1} left='10' />
      </QuizWrapper>
      <AnswerWrapper>
        <Session resultList={resultList} />
        <form onSubmit={answerSubmit}>
          <input
            placeholder='guess what?'
            type='text'
            value={inputValue}
            onChange={onChange}
            ref={focusedInput}
          />

          {trackList[currentRound].trackName}

          <LogList giveAnswers={givenAnswersList} />
        </form>
      </AnswerWrapper>
    </>
  );
};

export default GameLayout;
