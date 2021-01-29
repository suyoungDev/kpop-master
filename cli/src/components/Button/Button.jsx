import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { SIZES, FONTS } from '../../constants/theme';
import './Button.css';

const LinkContainer = styled(Link)`
  display: flex;
`;

const Label = styled.p`
  position: relative;
  align-items: center;
  font-family: ${FONTS.engTitle};
  font-size: ${SIZES.body1}px;
  font-weight: bold;
  letter-spacing: 5px;
  color: rgba(244, 192, 211, 0.9);
  text-shadow: 1px 1px 0px #fff, -1px -1px 0px rgba(192, 145, 161, 0.8);
`;

const Button = ({ child, links }) => {
  return (
    <LinkContainer className='container' to={links}>
      <Label>{child}</Label>
    </LinkContainer>
  );
};

export default Button;
