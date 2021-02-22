import React, { useState, createContext } from 'react';

export const GamePlayContext = createContext(() => {});

export const GamePlayProvider = (props) => {
  const [gamePlay, setGamePlay] = useState({
    currentRound: 0,
  });

  return (
    <GamePlayContext.Provider value={[gamePlay, setGamePlay]}>
      {props.children}
    </GamePlayContext.Provider>
  );
};
