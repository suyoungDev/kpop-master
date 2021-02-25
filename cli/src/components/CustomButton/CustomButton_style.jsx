import styled, { css } from 'styled-components';
import { COLORS, FONT, SCREEN } from '../../constants/theme';

const buttonStyles = css`
  background-color: ${COLORS.headingDarkGray};
  color: white;
  border: none;

  &:hover {
    background-color: white;
    color: ${COLORS.headingDarkGray};
    border: 1px solid ${COLORS.headingDarkGray};
  }
`;

const invertedButtonStyles = css`
  background-color: white;
  color: ${COLORS.primaryTwo};
  border: none;
  &:hover {
    background-color: ${COLORS.primaryTwo};
    color: white;
    border: none;
  }
`;

const googleButtonStyles = css`
  background-color: ${COLORS.primaryTwo};
  color: white;
  border: none;

  &:hover {
    background-color: white;
    color: ${COLORS.primaryTwo};
    border: 1px solid ${COLORS.primaryTwo};
  }
`;

const getButtonStyles = (props) => {
  if (props.isGoogleSignIn) {
    return googleButtonStyles;
  }

  return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  width: auto;
  min-width: 130px;
  height: 50px;
  padding: 0 20px;
  display: flex;
  justify-content: center;
  
  font-size: 15px;
  letter-spacing: 0.5px;
  line-height: 50px;
  font-family: ${FONT.english};
  text-transform: uppercase;
  font-weight: bolder;
  
  cursor: pointer;

  ${getButtonStyles}

  @media ${SCREEN.tablet}{
  min-width: 120px;
  padding: 0 10px;
  }
`;
