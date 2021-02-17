import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS, FONT, SIZES } from '../../constants/theme';
import { GiRank3, GiBalloonDog, GiBarracksTent } from 'react-icons/gi';

const StyledLink = styled(Link)`
  text-decoration: none;

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
  font-family: ${FONT.korean};
  font-weight: 500;
  color: ${COLORS.textMid};
  font-size: 0.8rem;
  position: relative;

  .icon {
    margin-right: 10px;
  }

  ::before {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 5px;
    border-radius: 5px;
    bottom: -22px;
    background: linear-gradient(
      to right,
      ${COLORS.primaryMiddle} 0%,
      ${COLORS.primary} 100%
    );
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  :hover {
    color: black;
    transition: color 0.2s ease-in-out;

    ::before {
      opacity: 1;
    }
  }

  @media (max-width: 1024px) {
    color: ${COLORS.textBlack};
    font-size: 1rem;
    margin: 1rem 0;

    ::before {
      bottom: -10px;
    }
  }
`;

const LinkContainer = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  width: 85%;
  max-width: ${SIZES.laptopWidth};

  @media (max-width: 1024px) {
    height: 100vh;
    width: 300px;
    flex-flow: column nowrap;
    justify-content: flex-start;
    z-index: 10;
    list-style: none;
    position: fixed;
    top: 0;
    right: 0;
    padding: 3rem 0 0 2rem;
    background-color: white;
    border-left: 1px solid #ccc;

    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    transition: transform 0.3s ease-in-out;
  }
`;

const RightMenu = ({ open }) => {
  return (
    <LinkContainer open={open}>
      <StyledLink to='/'>
        <GiBarracksTent className='icon' />
        첫화면으로
      </StyledLink>
      <StyledLink to='/outro'>
        <GiRank3 className='icon' />
        순위
      </StyledLink>
      <StyledLink to='/about'>
        <GiBalloonDog className='icon' />
        About
      </StyledLink>
    </LinkContainer>
  );
};

export default RightMenu;
