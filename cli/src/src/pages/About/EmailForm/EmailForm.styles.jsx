import styled from 'styled-components';
import { COLORS, SIZES, FONT, SCREEN } from '../../../constants/theme';

export const Form = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  position: relative;
`;

export const Input = styled.input`
  width: 100%;
  height: ${({ message }) => (message ? '100px' : '1rem')};
  padding: 1.2rem 1rem;

  margin: 1rem 0;

  border-radius: ${SIZES.radiusSmall};
  border: 1px solid ${COLORS.primary};

  font-size: 0.8rem;
  font-family: ${FONT.korean};
  font-weight: 200;
  color: ${COLORS.headingDarkGray};

  &:focus {
    outline: none;
  }

  @media ${SCREEN.tablet} {
    margin: ${({ userInfo }) => (userInfo ? '0 1rem 0 0' : '1.3rem 0 0 0')};
    margin: ${({ userMail }) => userMail && '0 0 0 0'};
  }
`;

export const Label = styled.label`
  font-size: 0.7rem;
  position: absolute;
  left: 15px;
  top: 13px;
  background-color: white;
  padding: 0 7px;

  color: ${COLORS.primary};
  font-family: ${FONT.english};
  text-transform: uppercase;

  @media ${SCREEN.tablet} {
    top: ${({ firstRow }) => (firstRow ? '-8px' : '18px')};
  }
`;

export const SubmitButton = styled.input`
  width: 100%;
  height: 50px;
  border: none;
  border-radius: ${SIZES.radiusSmall};
  margin-top: 1rem;

  font-size: 0.7rem;
  background: linear-gradient(20deg, #fff3d6 0%, ${COLORS.secondaryDark} 100%);
  color: ${COLORS.primaryDark};
  letter-spacing: 1px;
  font-weight: 600;
  font-family: ${FONT.english};
  text-transform: uppercase;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media ${SCREEN.tablet} {
    flex-direction: row;
  }
`;
