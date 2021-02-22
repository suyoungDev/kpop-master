import React, { useContext } from 'react';

import GameLayout from '../GameLayout/GameLayout';
import OutroPage from '../OutroPage/OutroPage';

import { GameEndContext } from '../../context/GamEndContext/GameEndContext';
import { TrackListToPlayContext } from '../../context/TrackListToPlayContext/TrackListToPlayContext';

const Start = () => {
  // eslint-disable-next-line
  const [isGameEnd, setIsGameEnd] = useContext(GameEndContext);
  // eslint-disable-next-line
  const [trackListToPlay, setTrackListToPlay] = useContext(
    TrackListToPlayContext
  );

  console.log(trackListToPlay);

  if (isGameEnd) {
    return <OutroPage />;
  }

  return <GameLayout />;
};

export default Start;
