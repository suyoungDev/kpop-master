import styled from 'styled-components';
import { SCREEN, FONT, COLORS, SIZES } from '../../constants/theme';

const InputContainer = styled.div`
  width: 100%;
  height: auto;
  line-height: 70px;
  font-family: ${FONT.english};
  margin: 1rem 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  input {
    width: 310px;
    height: 3.4rem;
    border: none;
    border-radius: ${SIZES.radiusSmall};
    padding: 1.2rem;

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
    color: white;
    font-size: 1.4rem;
    font-family: ${FONT.english};
    font-weight: 300;
  }

  @media ${SCREEN.tablet} {
    margin: 2rem 2rem;
    input {
      background-color: ${COLORS.primaryShaodw};
    }
    & ::placeholder {
      color: ${COLORS.textBlack};
    }
  } ;
`;

export default InputContainer;
