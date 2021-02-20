import React, { useState, useEffect, useRef, useContext } from 'react';
import useSound from 'use-sound';
import checkImg from '../../constants/image/checkImg.svg';

import Player from './Section/Player/Player';
import Session from './Section/Session/Session';
import LogList from './Section/LogList/LogList';
import ShowHintOrAnswer from './Section/ShowHintOrAnswer/ShowHintOrAnswer';
import Center from '../../components/Center/Center';
import RoundContainer from '../../components/RoundContainer/RoundContainer';
import InputContainer from '../../components/InputContainer/InputContainer';
import CleanCard from '../../components/Card/CleanCard';
import AnswerCard from './Section/AnswerCard/AnswerCard';

import correctSfx from '../../constants/sounds/correct.mp3';
import wrongSfx from '../../constants/sounds/wrong1.mp3';

import { GameEndContext } from '../../context/GamEndContext/GameEndContext';
import { GameResultContext } from '../../context/GameResultContext/GameResultContext';
import { COLORS } from '../../constants/theme';

const GameLayout = ({ trackList }) => {
  const [isGameEnd, setIsGameEnd] = useContext(GameEndContext);
  const [gameResult, setGameResult] = useContext(GameResultContext);

  const [inputValue, setInputValue] = useState('');
  const [givenAnswersList, setGivenAnswersList] = useState([]);

  const [currentRound, setCurrentRound] = useState(0);
  const [url, setUrl] = useState('');
  const [showHints, setShowHints] = useState(false);
  const [timeOver, setTimeOver] = useState(false);
  const [startTime, setStartTime] = useState(Date.now());

  const focusedInput = useRef(null);

  const [playCorrect] = useSound(correctSfx, { volume: 0.15 });
  const [playWrong] = useSound(wrongSfx, { volume: 0.15 });

  useEffect(() => {
    focusedInput.current.focus();
    setStartTime(Date.now());
    setUrl(trackList[currentRound].url);
    setShowHints(false);

    const giveHints = setTimeout(() => {
      setShowHints(true);
    }, 10000);

    const timer = setTimeout(() => {
      setInputValue('');
      setTimeOver(true);
    }, 20000);

    const setOver = setTimeout(() => {
      setTimeOver(false);
      if (!isGameEnd) {
        goNextRound();
      }
    }, 23000);

    return () => {
      clearTimeout(timer);
      clearTimeout(giveHints);
      clearTimeout(setOver);
    };
    // eslint-disable-next-line
  }, [currentRound]);

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
      id: Math.random().toString(36).substr(2, 4),
      roundIndex: currentRound,
      trackName: trackList[currentRound].trackName,
      result: answerResult === 'correct' ? 'correct' : 'wrong',
      responseTime: answerResult === 'correct' ? timeOut() : 10000,
    };

    setGameResult([...gameResult, newResult]);

    if (currentRound === 9) {
      setIsGameEnd(true);
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
    <Center bgcolor={`${COLORS.primaryDark}`} inGame>
      <Player url={url} />

      <Session id='first' />
      <CleanCard inGame>
        <AnswerCard id='four'>
          <img src={checkImg} alt='귀여운 체크' />
          <InputContainer>
            <form onSubmit={answerSubmit}>
              <input
                placeholder='guess what?'
                type='text'
                value={inputValue}
                onChange={onChange}
                ref={focusedInput}
                disabled={timeOver}
              />
            </form>
          </InputContainer>
          <LogList giveAnswers={givenAnswersList} />
        </AnswerCard>

        <RoundContainer id='second'>
          <ShowHintOrAnswer
            trackName={trackList[currentRound].trackName}
            showHints={showHints}
            timeOver={timeOver}
            className='inputWrapper'
          />
        </RoundContainer>
      </CleanCard>
    </Center>
  );
};

export default GameLayout;
