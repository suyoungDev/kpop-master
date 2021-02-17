import React from 'react';
import styled, { css } from 'styled-components';
import { COLORS, FONT, SIZES, SCREEN } from '../../constants/theme';

const inGameCardStyle = css`
  @media ${SCREEN.tablet} {
    width: ${SIZES.gameLayoutWidth};
    height: 600px;

    border: 1px solid ${COLORS.grayMiddle};
    box-shadow: 0 4px 8px 0 ${COLORS.grayMiddle};
    background: white;

    display: grid;
    grid-gap: 10px;
    grid-template-rows: 200px 400px;
    grid-template-areas:
      'hint hint'
      'answer answer';

    text-align: start;

    font-family: ${FONT.korean};
    font-weight: 200;
    color: ${COLORS.textDark};

    #four {
      grid-area: answer;
    }

    #second {
      grid-area: hint;
    }
  }
`;

const savingCardStyle = css`
  padding: 1rem;
  border-radius: 10px;

  border: 1px solid ${COLORS.grayMiddle};
  box-shadow: 0 4px 8px 0 ${COLORS.grayMiddle};
  background: white;

  margin-bottom: 2rem;
  height: auto;

  @media ${SCREEN.tablet} {
    width: ${SIZES.tabletWidth};
  }

  &.saved {
    display: none;
  }
`;

const getCardStyles = (props) => {
  if (props.inGame) {
    return inGameCardStyle;
  }
  return props.savingRecord && savingCardStyle;
};

const CleanCard = styled.div`
  width: 100%;
  height: 100%;
  transition: 0.3s ease;

  ${getCardStyles}
`;

const CleanCardContainer = ({ children, ...props }) => {
  return <CleanCard {...props}>{children}</CleanCard>;
};

export default CleanCardContainer;
