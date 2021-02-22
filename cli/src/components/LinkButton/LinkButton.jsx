import React from 'react';
import styled, { css } from 'styled-components';

import { Link } from 'react-router-dom';
import { COLORS, FONT, SCREEN, SIZES } from '../../constants/theme';

const primaryStyle = css`
  color: white;

  background: linear-gradient(
    90deg,
    ${COLORS.primaryOne} 0%,
    ${COLORS.primaryTwo} 100%
  );

  :hover {
    background: linear-gradient(
      90deg,
      ${COLORS.primaryTwo} 0%,
      ${COLORS.primaryOne} 100%
    );
    color: white;
  }
`;

const secondaryStyle = css`
  font-size: 1.2rem;
  color: ${COLORS.primaryDark};

  background: linear-gradient(20deg, #fff3d6 0%, ${COLORS.secondaryDark} 100%);

  :hover {
    background: ${COLORS.secondaryDark};
  }

  @media ${SCREEN.tablet} {
    margin-bottom: 1rem;
  }
`;

const getStyles = (props) => {
  if (props.secondary) {
    return secondaryStyle;
  }
  return primaryStyle;
};

const LinkContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 0.75em 2.7em;
  border-radius: ${SIZES.radiusMini};
  margin: 1rem 0;

  font-family: ${FONT.englishButton};
  font-weight: 400;
  font-size: 1.3rem;
  letter-spacing: 0.6px;
  text-transform: capitalize;
  text-decoration: none;
  transition: width 1s ease;

  @media ${SCREEN.tablet} {
    font-size: 1.6rem;
    align-self: ${({ outro }) => (outro ? 'center' : 'flex-start)')};
    margin: 0 0 2rem 0;
    padding: 0.5em 2.7em;
  }

  ${getStyles};
`;

const LinkButton = ({ children, links, ...otherprops }) => {
  return (
    <LinkContainer to={links} {...otherprops}>
      {children}
    </LinkContainer>
  );
};

export default LinkButton;
