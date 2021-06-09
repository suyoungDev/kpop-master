import { useEffect, useState } from 'react';
import axios from 'axios';

import { useSelector } from 'react-redux';
import { GameResultContext } from '../../context/GameResultContext';
import { TrackListToPlayContext } from '../../context/TrackListToPlayContext';
import { AuthContext } from '../../context/AuthContext';

const useOutroPage = () => {
  const [userRankList, setUserRankList] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [averageResponseTime, setAverageResponseTime] = useState(0);
  const [myBestRecord, setMyBestRecord] = useState(0);
  const [countAnswers, setCountAnswers] = useState({});

  const { userData } = useSelector((state) => state.user);
  const [gameResult] = useContext(GameResultContext);
  const [trackListToPlay] = useContext(TrackListToPlayContext);
  const [isLoggedIn] = useContext(AuthContext);

  useEffect(() => {
    getAllGameRecords();
    getNumberOfAnswers();

    if (isLoggedIn) {
      uploadRecordToDB();
      getMyBestRecord();
    }
  }, [isLoggedIn]);

  const getMyBestRecord = () => {
    if (!isLoggedIn) return;
    const myRecord = userRankList.filter(
      (record) => record._id === userData._id
    )[0].record;

    setMyBestRecord(myRecord);
  };

  const getAllGameRecords = async () => {
    setIsLoading(true);
    const response = await axios.get('/api/game/getRecords');
    const data = response.data.gameRecordList;
    setUserRankList(data);
    setIsLoading(false);
  };

  const getAverageTime = () => {
    const totalResponseTime = gameResult
      .map((item) => item.responseTime)
      .reduce((previous, currrent) => previous + currrent, 0);
    const averageTime = (totalResponseTime / 5000).toFixed(2);

    setAverageResponseTime(averageTime);

    return averageTime;
  };

  const getCorrectAnswer = () => {
    const correctAnswers = gameResult
      .filter((game) => game.result === 'correct')
      .map((song) => song.trackName);

    return correctAnswers;
  };

  const getWrongAnswers = () => {
    const wrongAnswers = gameResult
      .filter((game) => game.result === 'wrong')
      .map((song) => song.trackName);
    return wrongAnswers;
  };

  const getNumberOfAnswers = () => {
    const correct = getCorrectAnswer();
    const wrong = getWrongAnswers();

    setCountAnswers({ correct: correct.length, wrong: wrong.length });
  };

  const uploadRecordToDB = async () => {
    const correctAnswers = getCorrectAnswer();
    const wrongAnswers = getWrongAnswers();
    const averageTime = getAverageTime();

    const gameData = {
      player: userData._id,
      record: averageTime,
      correctTrackName: correctAnswers,
      wrongTrackName: wrongAnswers,
      gameResult: gameResult,
      theme: trackListToPlay.theme,
    };

    await axios.post('/api/game/upload', gameData);
  };

  return {
    isLoading,
    userRankList,
    averageResponseTime,
    myBestRecord,
    countAnswers,
  };
};

export default useOutroPage;
