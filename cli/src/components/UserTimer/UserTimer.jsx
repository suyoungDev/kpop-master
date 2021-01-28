import React, { useState, useRef, useEffect } from 'react';
import ProgressBar from '../../ProgressBar/ProgressBar';

const UserTimer = () => {
  const [distance, setdistance] = useState(initialState);
  const startTime = useRef(0);
  const endTime = useRef(0);

  let now = new Date().toLocalseString();

  return (
    <div>
      <p>{distance}초 지남</p>
      <ProgressBar done={distance} />
    </div>
  );
};

export default UserTimer;
