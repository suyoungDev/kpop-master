import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LinkContainer = styled(Link)`
  border-radius: 6px;
  border: none;
  align-items: center;
  justify-content: center;
  padding: 25px;
  background-color: #f8a5c2;
  color: white;
  font-size: bold;
  text-decoration: none;
  margin-top: 50px;
`;

const Button = ({ child, links }) => {
  return <LinkContainer to={links}>{child}</LinkContainer>;
};

export default Button;
