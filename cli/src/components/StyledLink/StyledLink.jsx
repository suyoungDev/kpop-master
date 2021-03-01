import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { COLORS, FONT } from '../../constants/theme';

const LinkContainer = styled(Link)`
  text-transform: capitalize;
  text-decoration: none;
  cursor: pointer;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }

  display: flex;
  align-items: center;
  margin: 0 28px 0 0;
  font-family: ${FONT.english};
  font-weight: 300;
  color: ${COLORS.contentGray};
  font-size: 1rem;
  position: relative;

  .icon {
    margin-right: 10px;
  }

  ::before {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 3px;
    border-radius: 5px;
    bottom: -15px;
    background: linear-gradient(
      to right,
      ${COLORS.primaryOne} 0%,
      ${COLORS.primaryTwo} 100%
    );
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  :hover {
    color: ${COLORS.primaryTwo};
    transition: color 0.2s ease-in-out;

    ::before {
      opacity: 1;
    }
  }

  @media (max-width: 1023px) {
    color: ${COLORS.headingDarkGray};
    font-size: 1rem;
    margin: 1rem 0;

    ::before {
      bottom: -10px;
    }
  }
`;

const StyledLink = ({ children, ...props }) => {
  return <LinkContainer {...props}>{children}</LinkContainer>;
};

export default StyledLink;
