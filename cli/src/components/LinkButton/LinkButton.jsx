import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { COLORS, FONT, SCREEN } from '../../constants/theme';

const LinkContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 200px;
  height: 70px;
  border-radius: 100px;

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
  font-size: 1.8rem;
  letter-spacing: 3px;
  text-transform: capitalize;
  text-decoration: none;
  transition: width 1s ease;

  :hover {
    background: ${COLORS.primaryDark};
    box-shadow: 0px 22px 13px -12px ${COLORS.primaryShaodw};
    color: white;
  }

  &.secondary {
    background: linear-gradient(
      30deg,
      #fff3d6 0%,
      ${COLORS.secondaryDark} 100%
    );
    color: ${COLORS.primaryMiddle};

    :hover {
      background: ${COLORS.secondaryDark};
    }
  }

  @media ${SCREEN.tablet} {
    padding: 1rem 2.7rem;
    font-size: 1.4rem;
    width: 300px;
    align-self: flex-start;
  }
  @media ${SCREEN.tablet} {
    padding: 1rem 2.7rem;
  }
`;

const LinkButton = ({ children, links, name, ...otherprops }) => {
  return (
    <LinkContainer to={links} {...otherprops} className={name}>
      {children}
    </LinkContainer>
  );
};

export default LinkButton;
