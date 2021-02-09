import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { COLORS } from '../../../../constants/theme';

const Wrapper = styled.div`
  position: relative;
  width: 400px;
  height: 15px;
  border-radius: 10px;
  background-color: ${COLORS.lightGray};
`;

const Progress = styled.div`
  position: absolute;
  left: 0;
  width: 0%;
  height: 100%;
  border-radius: 10px;
  align-items: flex-start;

  background-color: rgb(238, 174, 202);
  background: linear-gradient(
    153deg,
    ${COLORS.lavender} 0%,
    ${COLORS.babyPink} 100%
  );
  transition: all 10s linear;
`;

const ProgressBar = ({ currentRound }) => {
  const [style, setStyle] = useState('0%');

  useEffect(() => {
    console.log('이게 되면 리랜더되는거임');

    const returnToZero = { width: '0%' };

    const timer = setTimeout(() => {
      const newStyle = '100%';
      setStyle(newStyle);
    }, 100);

    return () => {
      clearTimeout(timer);
      setStyle(returnToZero);
    };
  }, [currentRound]);

  return (
    <Wrapper>
      <Progress width={style} />
    </Wrapper>
  );
};

export default ProgressBar;
