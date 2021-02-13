import React from 'react';
import styled from 'styled-components';
import { COLORS, FONT, SIZES } from '../../constants/theme';

const Container = styled.div`
  width: ${({ tips }) => (tips ? '60px' : '120px')};
  height: 34px;
  border-radius: ${SIZES.radiusSmall};

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 0.1rem;
  font-family: ${FONT.korean};

  background-color: ${({ secondary }) =>
    secondary ? `${COLORS.secondary}` : `${COLORS.primaryLight}`};
  color: ${COLORS.primaryDark};
`;

const Snippet = ({ children, ...otherProps }) => {
  return <Container {...otherProps}>{children}</Container>;
};

export default Snippet;
