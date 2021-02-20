import React from 'react';
import styled, { css } from 'styled-components';
import { COLORS, FONT, SIZES, SCREEN } from '../../constants/theme';

const hoverStyle = css`
  :hover {
    box-shadow: 0 8px 16px 0 ${COLORS.grayDark};
  }
`;

const borderAndShadow = css`
  border: 1px solid ${COLORS.grayMiddle};
  box-shadow: 0 4px 8px 0 ${COLORS.grayMiddle};
`;

const inGameCardStyle = css`
  @media ${SCREEN.tablet} {
    width: ${SIZES.gameLayoutWidth};
    height: 600px;

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

    ${borderAndShadow};
  }
`;

const savingCardStyle = css`
  border-radius: ${SIZES.radiusSmall};
  padding: 1rem;

  ${borderAndShadow};

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

const rankCardStyle = css`
  width: 90%;
  max-width: ${SIZES.gameLayoutWidth};
  margin-top: 2rem;
  border-radius: ${SIZES.radiusSmall};
  padding: 1rem;
  ${borderAndShadow};
  ${hoverStyle}
`;

const mailCardStyle = css`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 1.2rem;
  margin-bottom: 2rem;

  border-radius: ${SIZES.radiusBig};

  ${borderAndShadow};
  ${hoverStyle}

  @media ${SCREEN.tablet} {
    width: ${SIZES.gameLayoutWidth};
  }
`;

const getCardStyles = (props) => {
  if (props.inGame) {
    return inGameCardStyle;
  }
  if (props.rank) {
    return rankCardStyle;
  }
  if (props.mail) {
    return mailCardStyle;
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
