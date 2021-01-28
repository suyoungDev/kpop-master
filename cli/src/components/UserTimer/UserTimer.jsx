import React, { useState, useEffect } from 'react';
import ProgressBar from '../ProgressBar/ProgressBar';

const UserTimer = () => {
  const [startTime, setStartTime] = useState();

  const [diff, setDiff] = useState(0);

  useEffect(() => {
    setStartTime(Date.now());
  }, []);

  const onClick = () => {
    const endTime = Date.now();
    setDiff(endTime - startTime);
    setStartTime(endTime);
  };

  return (
    <div>
      <p>{diff}milliseconds passed</p>
      <button onClick={onClick}>click here</button>
    </div>
  );
};

export default UserTimer;
