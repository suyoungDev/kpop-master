import React from 'react';
import styled from 'styled-components';
import { COLORS, SCREEN } from '../../constants/theme';

import Burger from './Burger';

const Nav = styled.div`
  width: 100%;
  height: 40px;
  padding: 0 20px;
  background-color: ${COLORS.primaryDark};

  display: flex;
  justify-content: center;
  align-items: center;

  @media ${SCREEN.tablet} {
    height: 60px;
    background: white;
  }
`;

const NavBar = () => {
  return (
    <Nav>
      <Burger />
    </Nav>
  );
};

export default NavBar;
