import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
`;

const LinkContainer = styled(Link)`
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 1rem 2.7rem;
  text-decoration: none;

  background: rgb(12, 5, 149);
  background: linear-gradient(
    30deg,
    rgba(158, 81, 73, 1) 0%,
    rgb(235, 173, 164) 100%
  );
  box-shadow: 0px 15px 25px rgba(223, 132, 117, 0.5);

  color: white;
  font-family: 'Josefin Sans', sans-serif;
  font-style: italic;
  font-size: 1.4rem;
  font-weight: bold;
  letter-spacing: 1px;

  :hover {
    background: transparent;
    background: linear-gradient(
      30deg,
      rgba(255, 255, 255, 0.7) 0%,
      rgba(255, 255, 255, 0.4) 100%
    );

    color: #df8475;
  }
`;

const Button = ({ children, links }) => {
  return (
    <ButtonWrapper>
      <LinkContainer to={links}>{children}</LinkContainer>
    </ButtonWrapper>
  );
};

export default Button;
