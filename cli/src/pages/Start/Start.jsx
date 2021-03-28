import React, { useContext, useEffect } from 'react';
import { Prompt } from 'react-router-dom';

import GameLayout from '../GameLayout/GameLayout';
import OutroPage from '../OutroPage/OutroPage';

import { GameEndContext } from '../../context/GameEndContext';
import { TrackListToPlayContext } from '../../context/TrackListToPlayContext';

const Start = () => {
  const [isGameEnd] = useContext(GameEndContext);
  const [trackListToPlay] = useContext(TrackListToPlayContext);

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

  if (!trackListToPlay.trackList.length) return <div>다시 시작해주세요</div>;

  return (
    <div>
      <Prompt message='플레이 도중에 나갈 경우, 플레이 기록을 잃습니다.' />
      <GameLayout trackList={trackListToPlay.trackList} />
    </div>
  );
};

export default Start;
