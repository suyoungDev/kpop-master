import React, { useState, useRef, useEffect } from 'react';
// import ProgressBar from '../ProgressBar/ProgressBar';

const UserTimer = () => {
  const [startTime, setStartTime] = useState(new Date().getTime());
  const [endTime, setEndTime] = useState(0);
  const [diff, setDiff] = useState(0);

  const onClick = () => {
    setEndTime(Date.now());
    setDiff(endTime - startTime);
    setStartTime(endTime);
  };
  useEffect(() => {
    let now = new Date();
    setStartTime(now.getTime());
    console.log('👉' + startTime);
  }, []);

  return (
    <div>
      <p>{diff}milliseconds passed</p>
      <button onClick={onClick}>click here</button>
    </div>
  );
};

export default UserTimer;
