import React from 'react';
import styled from 'styled-components';
import { COLORS, SCREEN } from '../../constants/theme';

import Burger from './Burger';

const Nav = styled.div`
  width: 100%;
  height: 55px;
  padding: 0 20px;
  background-color: ${COLORS.primaryTwo};

  display: flex;
  justify-content: center;
  align-items: center;

  @media ${SCREEN.tablet} {
    height: 60px;
    background: white;
  }
`;

const NavBar = ({ currentUser }) => {
  return (
    <Nav>
      <Burger currentUser={currentUser} />
    </Nav>
  );
};

export default NavBar;
