import React, { useState } from 'react';
import styled from 'styled-components';
import { COLORS, SCREEN } from '../../constants/theme';
import RightMenu from './RightMenu';

const StyledBurger = styled.div`
  width: 30px;
  height: 30px;
  position: fixed;
  top: 15px;
  right: 20px;

  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  z-index: 11;

  div {
    width: 30px;
    height: 2px;
    background-color: ${({ open }) =>
      open ? `${COLORS.primaryDark}` : '#ccc'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    &:nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }

  @media ${SCREEN.tablet} {
    div {
      background-color: ${({ open }) =>
        open ? `${COLORS.contentGrayLight}` : `${COLORS.primaryTwo}`};
    }
  }

  @media ${SCREEN.laptop} {
    display: none;
  }
`;

const Burger = ({ currentUser }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledBurger
        open={open}
        tabIndex='0'
        onClick={(e) => setOpen(!open)}
        onBlur={(e) => setOpen(false)}
      >
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightMenu
        open={open}
        onFocus={() => {
          console.log('hi');
        }}
        currentUser={currentUser}
      />
    </>
  );
};

export default Burger;
