import React, { useContext } from 'react';

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

  if (isGameEnd) {
    return <OutroPage />;
  }
  console.log(trackListToPlay.trackList);
  return <GameLayout trackList={trackListToPlay.trackList} />;
};

export default Start;
