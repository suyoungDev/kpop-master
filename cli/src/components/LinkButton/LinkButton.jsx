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

const getStyles = (props) => {
  return primaryStyle;
};

const LinkContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 0.75em 2.7em;
  border-radius: ${SIZES.radiusMini};

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
    padding: 0.5em 2.7em;
  }

  ${getStyles};
`;

const LinkButton = ({ children, links }) => {
  return <LinkContainer to={links}>{children}</LinkContainer>;
};

export default LinkButton;
