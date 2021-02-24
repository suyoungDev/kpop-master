import React, { useState, createContext } from 'react';

export const GameResultContext = createContext();

export const GameResultProvider = (props) => {
  const [gameResult, setGameResult] = useState({ theme: '', gameResult: [] });

  return (
    <GameResultContext.Provider value={[gameResult, setGameResult]}>
      {props.children}
    </GameResultContext.Provider>
  );
};
