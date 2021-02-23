import React, { useContext, useEffect } from 'react';
import { Prompt } from 'react-router-dom';

import GameLayout from '../GameLayout/GameLayout';
import OutroPage from '../OutroPage/OutroPage';

import { GameEndContext } from '../../context/GameEndContext';
import { TrackListToPlayContext } from '../../context/TrackListToPlayContext';

const Start = () => {
  // eslint-disable-next-line
  const [isGameEnd, setIsGameEnd] = useContext(GameEndContext);
  // eslint-disable-next-line
  const [trackListToPlay, setTrackListToPlay] = useContext(
    TrackListToPlayContext
  );

  useEffect(() => {
    window.addEventListener('beforeunload', alertUser);

    return () => {
      window.removeEventListener('beforeunload', alertUser);
    };
  }, []);

  const alertUser = (e) => {
    e.preventDefault();
    e.returnValue = '';
  };

  if (isGameEnd) {
    return <OutroPage />;
  }

  return (
    <>
      <Prompt message='플레이 도중에 나갈 경우, 플레이 기록을 잃습니다.' />
      <GameLayout trackList={trackListToPlay.trackList} />
    </>
  );
};

export default Start;
