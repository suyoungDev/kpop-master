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
  margin-top: 1.4rem;

  background: linear-gradient(
    30deg,
    #ced0ff 0%,
    ${COLORS.primaryMiddle} 40%,
    ${COLORS.primaryDark} 100%
  );
  box-shadow: 0 28px 13px -12px ${COLORS.primaryShaodw};

  color: white;
  font-family: ${FONT.englishButton};
  font-style: italic;
  font-weight: 700;
  font-size: 1.5rem;
  letter-spacing: 3px;
  text-transform: capitalize;
  text-decoration: none;
  transition: width 1s ease;
  text-shadow: -5px 10px 10px #3339c3;

  :hover {
    background: ${COLORS.primaryDark};
    box-shadow: 0px 22px 13px -12px ${COLORS.primaryShaodw};
    color: white;
  }

  &.secondary {
    font-size: 1.2rem;
    color: ${COLORS.primaryMiddle};
    text-shadow: none;

    background: linear-gradient(
      30deg,
      #fff3d6 0%,
      ${COLORS.secondaryDark} 100%
    );
    box-shadow: 0 22px 13px -12px rgba(255, 236, 187, 0.3);
    text-shadow: -5px 5px 8px #ebb734;

    :hover {
      background: ${COLORS.secondaryDark};
    }
  }

  @media ${SCREEN.tablet} {
    font-size: 2rem;
    align-self: flex-start;
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
