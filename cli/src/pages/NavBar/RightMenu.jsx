import React, { useContext } from 'react';
import styled from 'styled-components';
import { SIZES } from '../../constants/theme';
import { GiRank3, GiBalloonDog, GiBarracksTent } from 'react-icons/gi';
import { FiPower } from 'react-icons/fi';
import StyledLink from '../../components/StyledLink/StyledLink';
import { auth } from '../../firebase/firebase.utils';

const LinkContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  width: 85%;
  max-width: ${SIZES.laptopWidth};

  @media (max-width: 1023px) {
    height: 100vh;
    width: 250px;
    flex-flow: column nowrap;
    justify-content: flex-start;
    z-index: 10;
    list-style: none;
    position: fixed;
    top: 0;
    right: 0;
    padding: 3.4rem 0 0 2rem;
    background-color: white;
    border-left: 1px solid #ccc;

    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    transition: transform 0.3s ease-in-out;
  }
`;

const RightMenu = ({ open, currentUser }) => {
  return (
    <LinkContainer open={open}>
      <StyledLink to='/'>home</StyledLink>
      <StyledLink to='/rank'>Rank</StyledLink>
      <StyledLink to='/about'>About</StyledLink>

      {currentUser ? (
        <StyledLink as='div' onClick={() => auth.signOut()}>
          Sign Out
        </StyledLink>
      ) : (
        <StyledLink to='/register'>SIGN IN</StyledLink>
      )}
    </LinkContainer>
  );
};

export default RightMenu;
