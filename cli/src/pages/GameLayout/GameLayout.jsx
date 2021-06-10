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

const TOTAL_ROUND = 5;

const GameLayout = ({ trackList }) => {
  // eslint-disable-next-line
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

  const saveUrl = async (props) => {
    try {
      const variable = {
        trackName: trackList[currentRound].trackName,
        artistName: trackList[currentRound].artistName,
        videoId: props,
      };
      await axios.post('/api/youtube/saveUrl', variable);
    } catch (error) {
      console.log(error);
    }
  };

  const downloadUrl = async () => {
    try {
      const variable = {
        trackName: trackList[currentRound].trackName,
        artistName: trackList[currentRound].artistName,
      };
      const response = await axios.post('/api/youtube/getUrl', variable);
      const videoId = response.data.doc[0].videoId;
      return videoId;
    } catch (error) {
      return false;
    }
  };

  useEffect(() => {
    focusedInput.current.focus();
    setStartTime(Date.now());
    setShowHints(false);

    const getUrl = async () => {
      const downloadedUrl = await downloadUrl();
      if (downloadedUrl) {
        setUrl(downloadedUrl);
      } else {
        const variable = {
          trackName: `${trackList[currentRound].trackName} ${trackList[currentRound].artistName}`,
        };
        try {
          axios
            .post('/api/youtube/getId', variable)
            .then((response) => {
              const videoId = response.data.items[0].id.videoId;
              setUrl(videoId);
              return videoId;
            })
            .then((videoId) => {
              saveUrl(videoId);
            });
        } catch (error) {
          alert(
            '사용량 초과때문에 더이상 플레이하실 수 없습니다. 내일 다시 시도해주세요.'
          );
        }
      }
    };

    getUrl();

    const giveHints = setTimeout(() => {
      setShowHints(true);
    }, 10000);

    const timer = setTimeout(() => {
      resetInput();
      showCorrectAnswer();
    }, 20000);

    return () => {
      clearTimeout(timer);
      clearTimeout(giveHints);
    };
    // eslint-disable-next-line
  }, [currentRound]);

  const timeOut = () => {
    const endTime = Date.now();
    const diff = endTime - startTime;

    return diff;
  };

  const isCorrect = (givenAnswer) => {
    const regex = /[^\w가-힣]/g;
    const dotSpliter = /[.]/g;

    const modifiedGivenAnswer = givenAnswer.toLowerCase().replace(regex, '');

    const correctTrackName = trackList[currentRound].trackName;
    let modifiedCorrectTrackName;

    if (correctTrackName.match(dotSpliter)) {
      modifiedCorrectTrackName = correctTrackName
        .toLowerCase()
        .split(dotSpliter)[0]
        .replace(regex, '');
    } else {
      modifiedCorrectTrackName = correctTrackName
        .toLowerCase()
        .replace(regex, '');
    }

    if (modifiedGivenAnswer === modifiedCorrectTrackName) {
      playCorrect();
      showCorrectAnswer('correct');
    } else {
      playWrong();
    }
  };

  const showCorrectAnswer = (isCorrect) => {
    setTimeOver(true);
    setTimeout(() => {
      goNextRound(isCorrect);
      setTimeOver(false);
      if (currentRound < TOTAL_ROUND - 1) focusedInput.current.focus();
    }, 3000);
  };

  const forceNextRound = () => {
    resetInput();
    showCorrectAnswer();
  };

  const goNextRound = (answerResult) => {
    const newResult = {
      id: Math.random().toString(36).substr(2, 4),
      roundIndex: currentRound,
      artistName: trackList[currentRound].artistName,
      trackName: trackList[currentRound].trackName,
      result: answerResult === 'correct' ? 'correct' : 'wrong',
      responseTime: answerResult === 'correct' ? timeOut() : 20000,
    };

    setGameResult([...gameResult, newResult]);

    if (currentRound === TOTAL_ROUND - 1) {
      setIsGameEnd(true);
      setUrl('');
    } else {
      setCurrentRound(currentRound + 1);
    }
  };

  const answerSubmit = (event) => {
    event.preventDefault();
    setGivenAnswersList([inputValue, ...givenAnswersList]);

    if (inputValue === '!!') {
      forceNextRound();
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
            currentRound={currentRound}
          />
        </RoundContainer>
      </CleanCard>
    </Center>
  );
};

export default GameLayout;
