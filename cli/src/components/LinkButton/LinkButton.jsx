import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { COLORS, FONT, SCREEN } from '../../constants/theme';

const LinkContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 0.75em 2.7em;
  border-radius: 100px;
  margin: 1rem 0;

  background: linear-gradient(
    30deg,
    #ced0ff 0%,
    ${COLORS.primaryMiddle} 40%,
    ${COLORS.primaryDark} 100%
  );

  color: white;
  font-family: ${FONT.englishButton};
  font-style: italic;
  font-weight: 700;
  font-size: 1.5rem;
  letter-spacing: 3px;
  text-transform: capitalize;
  text-decoration: none;
  transition: width 1s ease;

  :hover {
    background: ${COLORS.primaryDark};
    color: white;
  }

  &.secondary {
    font-size: 1.2rem;
    color: ${COLORS.primaryDark};

    background: linear-gradient(
      30deg,
      #fff3d6 0%,
      ${COLORS.secondaryDark} 100%
    );

    :hover {
      background: ${COLORS.secondaryDark};
    }
  }

  @media ${SCREEN.tablet} {
    font-size: 2rem;
    align-self: ${({ outro }) => (outro ? 'center' : 'flex-start)')};
  }
`;

const LinkButton = ({ children, links, ...otherprops }) => {
  return (
    <LinkContainer to={links} {...otherprops}>
      {children}
    </LinkContainer>
  );
};

export default LinkButton;
