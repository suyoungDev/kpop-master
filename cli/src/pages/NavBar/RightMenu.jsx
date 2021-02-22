import React from 'react';
import styled from 'styled-components';
import { SIZES } from '../../constants/theme';
import { GiRank3, GiBalloonDog, GiBarracksTent } from 'react-icons/gi';
import StyledLink from '../../components/StyledLink/StyledLink';

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
