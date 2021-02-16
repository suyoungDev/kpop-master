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
    width: 100%;
    height: 100%;
    padding: 1.5rem;

    background: rgb(32, 34, 38);
    background: linear-gradient(
      190deg,
      ${COLORS.primaryMiddle} 0%,
      ${COLORS.primary} 100%
    );
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
      width: 140px;
    }
  }
`;
export default AnswerCard;
