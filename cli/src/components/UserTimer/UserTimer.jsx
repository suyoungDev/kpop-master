import React, { useState, useEffect } from 'react';
// import ProgressBar from '../ProgressBar/ProgressBar';

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

    let seconds = diff / 1000;
    let milliseconds = diff % 1000;
  };

  return (
    <div>
      <p>
        {seconds}.{milliseconds}초 지남
      </p>
      <button onClick={onClick}>click here</button>
    </div>
  );
};

export default UserTimer;
