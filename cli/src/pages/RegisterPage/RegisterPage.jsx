import React from 'react';
import styled from 'styled-components';
import { SCREEN } from '../../constants/theme';
import LogIn from './Section/LogIn';
import Register from './Section/Register';

const Wrapper = styled.div`
  width: 90%;
  margin: 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${SCREEN.tablet} {
    width: 95%;
    flex-direction: row;
    margin-top: 5rem;
    justify-content: space-around;
  }

  @media ${SCREEN.laptop} {
    flex-direction: row;
    width: 900px;
    justify-content: space-between;
    margin: 5rem auto;
  }
`;

const RegisterPage = () => {
  return (
    <Wrapper>
      <LogIn /> <Register />
    </Wrapper>
  );
};

export default RegisterPage;
