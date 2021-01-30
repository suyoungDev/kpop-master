import React, { useState, useEffect } from 'react';

import OutroPage from '../OutroPage/OutroPage';
import GameLayout from '../../GameLayout/GameLayout';

import { blackpinkData } from '../../../data/blackpink';

const Start = () => {
  const [shuffled, setShuffled] = useState(blackpinkData);

  useEffect(() => {
    let result = blackpinkData.sort(() => Math.random() - 0.5).slice(0, 10);
    setShuffled(result);
  }, []);

  if (isGameEnded) {
    return <OutroPage resultList={resultList} />;
  }

  return <GameLayout trackList={shuffled} />;
};

export default Start;
