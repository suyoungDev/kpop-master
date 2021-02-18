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
  font-size: 1.1rem;
  position: relative;

  .icon {
    margin-right: 10px;
  }

  ::before {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 3px;
    border-radius: 5px;
    bottom: -15px;
    background: linear-gradient(
      to right,
      ${COLORS.primaryLight} 0%,
      ${COLORS.primaryMiddle} 100%
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

  @media (max-width: 1023px) {
    color: ${COLORS.textBlack};
    font-size: 1.3rem;
    margin: 1rem 0;

    ::before {
      bottom: -10px;
    }
  }
`;

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

const RightMenu = ({ open }) => {
  return (
    <LinkContainer open={open}>
      <StyledLink to='/'>
        <GiBarracksTent className='icon' />
        첫화면으로
      </StyledLink>
      <StyledLink to='/rank'>
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
