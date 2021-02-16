import styled from 'styled-components';
import { COLORS, FONT, SIZES, SCREEN } from '../../constants/theme';

const CleanCard = styled.div`
  width: 100%;
  height: 100%;

  @media ${SCREEN.tablet} {
    width: ${SIZES.gameLayoutWidth};
    height: 600px;

    display: grid;
    grid-gap: 10px;
    grid-template-rows: 200px 400px;
    grid-template-areas:
      'hint hint'
      'answer answer';

    text-align: start;

    background: white;
    border: 1px solid ${COLORS.grayMiddle};
    transition: 0.3s ease;

    font-family: ${FONT.korean};
    font-weight: 200;
    color: ${COLORS.textDark};

    #four {
      grid-area: answer;
    }

    #second {
      grid-area: hint;
    }
  }
`;

export default CleanCard;
