import React, { useState, useEffect, useRef, useContext } from 'react';
import useSound from 'use-sound';

import './GameLayout.scss';

import QuizLeft from './Section/QuizLeft/QuizLeft';
import Player from './Section/Player/Player';
import Session from './Section/Session/Session';
import LogList from './Section/LogList/LogList';
import Glass from '../../GlassContainer/Glass';
import ShowHintOrAnswer from './Section/ShowHintOrAnswer/ShowHintOrAnswer';

import correctSfx from '../../../constants/sounds/correct.mp3';
import wrongSfx from '../../../constants/sounds/wrong1.mp3';

import { GameEndContext } from '../../GamEndContext/GameEndContext';
import { GameResultContext } from '../../GameResultContext/GameResultContext';

const GameLayout = ({ trackList }) => {
  const [isGameEnd, setIsGameEnd] = useContext(GameEndContext);
  const [gameResult, setGameResult] = useContext(GameResultContext);

  const [inputValue, setInputValue] = useState('');
  const [givenAnswersList, setGivenAnswersList] = useState([]);

  const [currentRound, setCurrentRound] = useState(0);
  const [url, setUrl] = useState('');
  const [showHints, setShowHints] = useState(false);
  const [timeOver, setTimeOver] = useState(false);

  const focusedInput = useRef(null);

  const [startTime, setStartTime] = useState(Date.now());

  useEffect(() => {
    focusedInput.current.focus();
    setStartTime(Date.now());
    setUrl(trackList[currentRound].url);
    setShowHints(false);

    const giveHints = setTimeout(() => {
      setShowHints(true);
    }, 6000);

    const timer = setTimeout(() => {
      setInputValue('');
      setTimeOver(true);
    }, 10000);

    const setOver = setTimeout(() => {
      setTimeOver(false);
      if (isGameEnd === 'onGoing') {
        goNextRound();
      }
    }, 13000);

    return () => {
      clearTimeout(timer);
      clearTimeout(giveHints);
      clearTimeout(setOver);
    };
    // eslint-disable-next-line
  }, [currentRound]);

  const [playCorrect] = useSound(correctSfx, { volume: 0.15 });
  const [playWrong] = useSound(wrongSfx, { volume: 0.15 });

  const timeOut = () => {
    const endTime = Date.now();
    const diff = endTime - startTime;

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
      responseTime: answerResult === 'correct' ? timeOut() : 10000,
    };

    setGameResult([...gameResult, newResult]);

    if (currentRound === 9) {
      setIsGameEnd('end');
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
    <div className='center'>
      <Player url={url} />
      <QuizLeft passed={currentRound + 1} left='10' />
      <Session />

      <Glass width='20' height='17.5'>
        <ShowHintOrAnswer
          trackName={trackList[currentRound].trackName}
          showHints={showHints}
          timeOver={timeOver}
        />

        <div className='input-wrapper'>
          <form onSubmit={answerSubmit}>
            <input
              placeholder='guess what?'
              type='text'
              value={inputValue}
              onChange={onChange}
              ref={focusedInput}
              disabled={timeOver}
            />
            <span className='input-highlight'>
              {inputValue.replace(/ /g, '\u00a0')}
            </span>
          </form>
        </div>
        <LogList giveAnswers={givenAnswersList} />
      </Glass>
    </div>
  );
};

export default GameLayout;
