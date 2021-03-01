import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

import { SIZES } from '../../constants/theme';
import StyledLink from '../../components/StyledLink/StyledLink';

import { AuthContext } from '../../context/AuthContext';

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

const RightMenu = ({ open, history }) => {
  const [isLoggedIn, getIsLoggedIn] = useContext(AuthContext);

  const logOut = async () => {
    await axios.get('/api/user/logout');
    getIsLoggedIn();
    history.push('/');
  };

  return (
    <LinkContainer open={open}>
      <StyledLink to='/'>home</StyledLink>
      <StyledLink to='/rank'>명예의 전당</StyledLink>
      <StyledLink to='/about'>About</StyledLink>

      {isLoggedIn ? (
        <StyledLink as='div' onClick={logOut}>
          로그아웃
        </StyledLink>
      ) : (
        <StyledLink to='/register'>회원가입 / 로그인</StyledLink>
      )}
    </LinkContainer>
  );
};

export default withRouter(RightMenu);
