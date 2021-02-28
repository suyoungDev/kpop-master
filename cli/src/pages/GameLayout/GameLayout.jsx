import React, { useState, useEffect, useRef, useContext } from 'react';
import axios from 'axios';
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

import { GameEndContext } from '../../context/GameEndContext';
import { GameResultContext } from '../../context/GameResultContext';
import useInput from '../../hook/useInput';

import { COLORS } from '../../constants/theme';

const GameLayout = ({ trackList }) => {
  const [isGameEnd, setIsGameEnd] = useContext(GameEndContext);
  const [gameResult, setGameResult] = useContext(GameResultContext);

  const [inputValue, onChange, resetInput] = useInput('');
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
    setShowHints(false);

    const getUrl = async () => {
      const variable = { trackName: trackList[currentRound].trackName };
      const response = await axios.post('/api/youtube/getId', variable);
      const videoId = response.data.items[0].id.videoId;
      setUrl(videoId);
    };

    getUrl();

    const giveHints = setTimeout(() => {
      setShowHints(true);
    }, 10000);

    const timer = setTimeout(() => {
      resetInput();
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
    const regex = /[^\w가-힣]/g;

    let givenAnswer = answer.toLowerCase().replace(regex, '');
    let correct = trackList[currentRound].trackName
      .toLowerCase()
      .replace(regex, '');

    if (givenAnswer === correct) {
      playCorrect();
      goNextRound('correct');
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
      responseTime: answerResult === 'correct' ? timeOut() : 20000,
    };

    setGameResult([...gameResult, newResult]);

    if (currentRound === 4) {
      setIsGameEnd(true);
      setUrl('');
    }

    setCurrentRound(currentRound + 1);
  };

  const answerSubmit = (event) => {
    event.preventDefault();
    setGivenAnswersList([inputValue, ...givenAnswersList]);

    if (inputValue === '!ㅂ' || inputValue === '!q') {
      goNextRound();
    }

    isCorrect(inputValue);
    resetInput();
  };

  return (
    <Center bgcolor={`${COLORS.primaryTwo}`} inGame>
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
            artist={trackList[currentRound].artistName}
          />
        </RoundContainer>
      </CleanCard>
    </Center>
  );
};

export default GameLayout;
