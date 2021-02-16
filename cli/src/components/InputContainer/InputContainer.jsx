import styled from 'styled-components';
import { SCREEN, FONT, COLORS, SIZES } from '../../constants/theme';

const InputContainer = styled.div`
  width: 100%;
  height: 120px;
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
    height: auto;
    width: 100%;
    margin: 0;
    padding: 1rem;
    background: rgb(32, 34, 38);
    background: linear-gradient(
      190deg,
      ${COLORS.primaryMiddle} 0%,
      ${COLORS.primary} 100%
    );

    input {
      padding: 0.2rem;
      border-radius: 0;
      background-color: transparent;
      border-bottom: 3px solid ${COLORS.textWhiteMid};
      color: white;

      &:focus {
        background-color: transparent;
      }
    }

    & ::placeholder {
      color: ${COLORS.textWhiteMid};
    }
  }
`;

export default InputContainer;
