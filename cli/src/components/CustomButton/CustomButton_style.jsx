import styled, { css } from 'styled-components';
import { COLORS, FONT } from '../../constants/theme';

const buttonStyles = css`
  background-color: ${COLORS.primaryTwo};
  color: white;
  border: none;

  &:hover {
    background-color: white;
    color: ${COLORS.primaryTwo};
    border: 1px solid ${COLORS.primaryTwo};
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
  background-color: #4285f4;
  color: white;
  border: none;

  &:hover {
    background-color: #357ae8;
  }
`;

const getButtonStyles = (props) => {
  if (props.isGoogleSignIn) {
    return googleButtonStyles;
  }

  return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: ${FONT.english};
  font-weight: bolder;
  cursor: pointer;

  ${getButtonStyles}
`;
