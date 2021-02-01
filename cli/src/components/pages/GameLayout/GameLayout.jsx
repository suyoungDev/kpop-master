import React, { useState, useEffect, useRef, useContext } from 'react';
import styled from 'styled-components';
import useSound from 'use-sound';

import QuizLeft from '../../QuizLeft/QuizLeft';
import Player from '../../Player/Player';
import Session from '../../Session/Session';
import Hint from '../../Hint/Hint';
import LogList from '../../LogList/LogList';

import correctSfx from '../../../constants/sounds/correct.mp3';
import wrongSfx from '../../../constants/sounds/wrong1.mp3';

import { GameEndContext } from '../../GamEndContext/GameEndContext';
import { GameResultContext } from '../../GameResultContext/GameResultContext';

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
  const [isGameEnd, setIsGameEnd] = useContext(GameEndContext);
  const [gameResult, setGameResult] = useContext(GameResultContext);

  const [inputValue, setInputValue] = useState('');
  const [givenAnswersList, setGivenAnswersList] = useState([]);

  const [currentRound, setCurrentRound] = useState(0);
  const [url, setUrl] = useState('');

  const focusedInput = useRef(null);

  const [startTime, setStartTime] = useState(Date.now());

  useEffect(() => {
    focusedInput.current.focus();
    setStartTime(Date.now());
    setUrl(trackList[currentRound].url);

    const timer = setTimeout(() => {
      goNextRound();
      setInputValue('');
    }, 10200);

    return () => clearTimeout(timer);
  }, [currentRound]);

  const [playCorrect] = useSound(correctSfx, { volume: 0.15 });
  const [playWrong] = useSound(wrongSfx, { volume: 0.15 });

  const timeOut = () => {
    const endTime = Date.now();
    const diff = endTime - startTime;
    setStartTime(endTime);
    return diff;
  };

  const isCorrect = (answer) => {
    const regex = /[ '"-_]+/g;
    const englishRegex = /\w/g;

    let givenAnswer = answer;
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
      let answerResult = 'correct';
      goNextRound(answerResult);
    } else {
      playWrong();
    }
  };

  const goNextRound = (answerResult) => {
    const newResult = {
      id: Math.random().toString(36).substr(2, 9),
      roundIndex: currentRound,
      trackName: trackList[currentRound].trackName,
      result: answerResult === 'correct' ? 'correct' : 'wrong',
      duration: answerResult === 'correct' ? timeOut() : 10000,
    };

    setGameResult([...gameResult, newResult]);

    if (currentRound === 9) {
      setIsGameEnd(1);
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
    <div style={{ height: '100%', display: 'flex', justifyContent: 'center' }}>
      <QuizWrapper>
        <QuizLeft passed={currentRound + 1} left='10' />
      </QuizWrapper>

      <AnswerWrapper>
        {trackList[currentRound].trackName}
        <br />
        <Hint trackName={trackList[currentRound].trackName} />
        <br />
        <form onSubmit={answerSubmit}>
          <input
            placeholder='guess what?'
            type='text'
            value={inputValue}
            onChange={onChange}
            ref={focusedInput}
          />
          <Session />
          <br />
          <LogList giveAnswers={givenAnswersList} />
        </form>
      </AnswerWrapper>
    </div>
  );
};

export default GameLayout;
