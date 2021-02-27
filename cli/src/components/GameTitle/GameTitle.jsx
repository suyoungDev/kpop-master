import React from 'react';

import styled, { css } from 'styled-components';
import { COLORS, SCREEN, FONT } from '../../constants/theme';

const landingStyles = css`
  width: 300px;
  color: white;

  @media ${SCREEN.tablet} {
    font-size: 5.4rem;
    width: 500px;
    color: rgba(108, 99, 255, 0.8);
    text-shadow: 5px -5px 7px #fff, 0 0 0 ${COLORS.primaryDark};
  }
`;

const centerStyles = css`
  margin-top: 1rem;
  color: rgba(108, 99, 255, 0.8);
  text-shadow: 5px -5px 7px #fff, 0 0 0 ${COLORS.primaryDark};
`;

const getTitleStyles = (props) => {
  if (props.center) return centerStyles;
  if (props.landing) return landingStyles;
};

const TitleWrapper = styled.div`
  text-align: left;
  font-size: 3.2rem;
  font-family: ${FONT.englishTitleCurv};
  font-weight: 700;
  letter-spacing: 2px;
  word-wrap: break-word;
  word-break: keep-all;

  ${getTitleStyles}

  @media ${SCREEN.tablet} {
    font-size: 5.4rem;
  }
`;

const GameTitle = ({ children, ...props }) => {
  return <TitleWrapper {...props}>{children}</TitleWrapper>;
};

export default GameTitle;
