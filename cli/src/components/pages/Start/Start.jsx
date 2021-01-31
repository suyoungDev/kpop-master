import React, { useContext } from 'react';

import GameLayout from '../GameLayout/GameLayout';
import OutroPage from '../OutroPage/OutroPage';

import { blackpinkData } from '../../../data/blackpink';

import { GameEndContext } from '../../GamEndContext/GameEndContext';

const Start = () => {
  const [isGameEnd, setIsGameEnd] = useContext(GameEndContext);

  const result = blackpinkData.sort(() => Math.random() - 0.5).slice(0, 10);

  if (isGameEnd === 1) {
    return <OutroPage />;
  }

  return <GameLayout trackList={result} />;
};

export default Start;
