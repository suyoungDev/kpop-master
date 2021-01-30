import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FONTS } from '../../constants/theme';
import './Button.css';

const LinkContainer = styled(Link)`
  display: flex;
`;

const Label = styled.p`
  position: relative;
  align-items: center;
  font-family: '${FONTS.gameTitle}';
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 5px;
  line-height: 1.3rem;
  text-align: center;
  color: rgba(244, 192, 211, 0.9);
  text-shadow: 1px 1px 0px #fff, -1px -1px 0px rgba(192, 145, 161, 0.8);
`;
// 깜빡이는 애니메이션도 넣고싶고.. 음.. 글고 이폰트에 저 sleek한 디자인은 안어울리는 듯?ㅜㅠ 하아,,

const Button = ({ child, links }) => {
  return (
    <LinkContainer className='container' to={links}>
      <Label>{child}</Label>
    </LinkContainer>
  );
};

export default Button;
