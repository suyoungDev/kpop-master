import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { COLORS, FONT, SIZES } from '../../constants/theme';

const warnning = keyframes`
from{
  background-color: rgba(255, 158, 158, 0.14);
}
to{
  background-color: rgba(255, 158, 158, 0.3);
}
`;

const hintStyles = css`
  width: 90px;
  letter-spacing: 1px;
  opacity: 0;

  &.hint {
    opacity: 100;
    font-family: ${FONT.english};
    font-weight: 600;
    background-color: ${COLORS.primaryLight};
  }

  &.correct {
    opacity: 100;
    background-color: ${COLORS.secondary};
    font-family: ${FONT.korean};
    font-weight: 700;
  }
`;

const secondaryStyles = css`
  background-color: ${COLORS.secondary};
  color: ${COLORS.primaryDark};
`;

const timerStyles = css`
  width: 35px;
  height: 35px;
  border-radius: 50px;
  font-size: 12px;
  font-weight: 200;
  letter-spacing: 1px;

  &.notShow {
    opacity: 0;
  }

  &.emergency {
    background-color: rgba(255, 158, 158, 0.3);
    color: red;
    font-weight: bold;
    animation: ${warnning} 2s linear infinite;
  }

  transition: all 0.3s ease;
  ${secondaryStyles}
`;

const getStyles = (props) => {
  if (props.timer) return timerStyles;
  if (props.hint) return hintStyles;
  if (props.secondary) return secondaryStyles;
};

const Container = styled.div`
  width: 120px;
  height: 36px;
  border-radius: ${SIZES.radiusSmall};

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: ${FONT.korean};
  font-size: 0.7rem;
  text-align: center;
  font-weight: 800;
  letter-spacing: 0.1rem;

  background-color: ${COLORS.primaryLight};
  color: ${COLORS.primaryDark};

  ${getStyles}
`;

const Snippet = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};

export default Snippet;
