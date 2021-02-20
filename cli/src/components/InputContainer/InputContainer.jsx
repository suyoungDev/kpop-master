import styled from 'styled-components';
import { SCREEN, FONT, COLORS, SIZES } from '../../constants/theme';

const InputContainer = styled.div`
  width: 100%;
  font-family: ${FONT.english};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  input {
    font-size: 1rem;
    padding: 1.3rem;
    width: 360px;
    height: 1.5rem;
    border: none;
    border-radius: ${SIZES.radiusBig};
    background-color: ${COLORS.primaryMiddle};

    font-size: 1rem;
    font-family: ${FONT.korean};
    font-weight: 200;
    color: ${COLORS.textDark};

    &:focus {
      outline: none;
      background-color: ${COLORS.primaryLight};
    }
  }

  & ::placeholder {
    color: ${COLORS.textWhiteMid};
    font-size: 1rem;
    font-family: ${FONT.english};
    font-weight: 300;
  }

  @media ${SCREEN.tablet} {
    width: 100%;
    margin: 0;

    input {
      width: ${SIZES.gameLayoutMediumWidth};
      border-radius: 0;
      background-color: transparent;
      border-bottom: 3px solid ${COLORS.textWhiteMid};
      color: white;

      &:focus {
        background-color: transparent;
        border-bottom: 3px solid #ffffff;
      }
    }

    & ::placeholder {
      color: ${COLORS.textWhiteMid};
    }
  }
`;

export default InputContainer;
