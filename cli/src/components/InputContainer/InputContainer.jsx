import styled from 'styled-components';
import { SCREEN, FONT, COLORS, SIZES } from '../../constants/theme';

const InputContainer = styled.div`
  width: 100%;
  font-family: ${FONT.english};
  margin: 0.5rem 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  input {
    font-size: 1rem;
    padding: 1.3rem;
    width: 300px;

    height: 3.4rem;
    border: none;
    border-radius: ${SIZES.radiusSmall};
    background-color: ${COLORS.primaryMiddle};

    font-size: 1.3rem;
    font-family: ${FONT.korean};
    font-weight: 200;
    color: ${COLORS.textDark};

    &:focus {
      outline: none;
      background-color: ${COLORS.primaryLight};
    }
  }

  & ::placeholder {
    color: rgba(255, 255, 255, 0.7);
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
      color: #ffffff;
    }
  }
`;

export default InputContainer;
