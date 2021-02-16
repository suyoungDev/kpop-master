import React from 'react';
import styled from 'styled-components';
import { COLORS, FONT, SIZES } from '../../constants/theme';

const Container = styled.div`
  width: ${({ tips }) => (tips ? '90px' : '120px')};
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

  background-color: ${({ secondary }) =>
    secondary ? `${COLORS.secondary}` : `${COLORS.primaryLight}`};
  color: ${COLORS.primaryDark};

  &.showhints {
    letter-spacing: 1px;
  }
  &.hint {
    font-family: ${FONT.english};
    font-weight: 600;
    background-color: ${COLORS.primaryLight};
  }
  &.correct {
    background-color: ${COLORS.secondary};
    font-family: ${FONT.korean};
    font-weight: 700;
  }
`;

const Snippet = ({ children, ...otherProps }) => {
  return <Container {...otherProps}>{children}</Container>;
};

export default Snippet;
