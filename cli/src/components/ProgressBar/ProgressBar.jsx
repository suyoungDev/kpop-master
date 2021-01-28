import React from 'react';
import styled, { css } from 'styled-components';
import { COLORS, SIZES, FONTS } from '../../constants/theme';

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
  height: 100%;
  width: ${(props) => props.done}%;
  border-radius: 10px;
  background: rgb(238, 174, 202);
  background: linear-gradient(
    153deg,
    ${COLORS.lavender} 0%,
    ${COLORS.babyPink} 100%
  );
  align-items: flex-start;
`;

const ProgressBar = (props) => {
  return (
    <div style={{ height: '15px' }}>
      <Wrapper>
        <Progress done={props.done} />
      </Wrapper>
    </div>
  );
};

export default ProgressBar;
