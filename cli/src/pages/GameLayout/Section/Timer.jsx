import React, { useEffect, useState } from 'react';
import Snippet from '../../../components/Snippet/Snippet';

const Timer = ({ currentRound, timeOver, showHints }) => {
  const [seconds, setSeconds] = useState(20);

  useEffect(() => {
    setSeconds(20);

    const interval = setInterval(() => {
      setSeconds((seconds) => seconds - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [currentRound]);

  return (
    <Snippet
      timer
      className={`${timeOver && 'notShow'} ${showHints && 'emergency'}`}
    >
      {seconds}
    </Snippet>
  );
};

export default Timer;
