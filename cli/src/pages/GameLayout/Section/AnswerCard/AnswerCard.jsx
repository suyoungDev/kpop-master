import styled from 'styled-components';
import { COLORS, SIZES, SCREEN } from '../../../../constants/theme';

const AnswerCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  img {
    width: 90px;
    position: absolute;
    right: 1rem;
    bottom: 0;
    z-index: 2;
  }

  @media ${SCREEN.tablet} {
    position: relative;
    display: flex;
    flex-direction: column;

    width: 350px;
    height: 400px;

    margin-top: 3rem;
    padding: 0;
    border-radius: ${SIZES.radiusMid};
    border: 1px solid ${COLORS.grayMiddle};

    box-shadow: 0 4px 8px 0 ${COLORS.grayMiddle};
    img {
      width: 140px;
    }

    .input-wrapper {
      grid-area: input;
      position: absolute;
      top: 0;
    }

    .log-list {
      grid-area: log;
    }
  }
`;
export default AnswerCard;
