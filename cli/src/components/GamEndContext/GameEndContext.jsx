import React, { useState, createContext } from 'react';

export const GameEndContext = createContext();

export const GameEndProvider = (props) => {
  const [isGameEnd, setIsGameEnd] = useState(0);

  return (
    <GameEndContext.Provider value={[isGameEnd, setIsGameEnd]}>
      {props.children}
    </GameEndContext.Provider>
  );
};
