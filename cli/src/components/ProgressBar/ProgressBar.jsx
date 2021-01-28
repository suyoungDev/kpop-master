import React, { useState } from 'react';
import styled from 'styled-components';
import { COLORS } from '../../constants/theme';

const Wrapper = styled.div`
  position: relative;
  width: 400px;
  height: 15px;
  border-radius: 10px;
  background-color: ${COLORS.lightGray};
`;

const Progress = styled.div`
  position: absolute;
  width: 0%;
  background: rgb(238, 174, 202);
  background: linear-gradient(
    153deg,
    ${COLORS.lavender} 0%,
    ${COLORS.babyPink} 100%
  );
  left: 0;
  height: 100%;
  border-radius: 10px;
  align-items: flex-start;
  transition: all 10s ease;
`;

const ProgressBar = () => {
  const [style, setStyle] = useState({});

  window.setTimeout(() => {
    const newStyle = {
      width: '100%',
    };
    setStyle(newStyle);
  }, 20);

  return (
    <div style={{ height: '15px' }}>
      <Wrapper>
        <Progress style={style} />
      </Wrapper>
    </div>
  );
};

export default ProgressBar;
