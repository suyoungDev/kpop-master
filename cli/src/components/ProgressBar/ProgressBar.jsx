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
  width: 0%;
  height: 100%;
  position: absolute;
  left: 0;
  align-items: flex-start;
  border-radius: 10px;
  background: rgb(238, 174, 202);
  background: linear-gradient(
    153deg,
    ${COLORS.lavender} 0%,
    ${COLORS.babyPink} 100%
  );
  transition: all 10s;
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
