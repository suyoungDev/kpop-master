import styled from 'styled-components';
import { COLORS, FONT, SIZES, SCREEN } from '../../constants/theme';

const CleanCard = styled.div`
  width: 90%;
  max-width: 450px;
  height: 250px;
  padding: 1rem;

  border-bottom-left-radius: ${SIZES.radiusMid};
  border-bottom-right-radius: ${SIZES.radiusMid};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: start;

  font-family: ${FONT.korean};
  font-weight: 200;
  color: ${COLORS.textDark};

  @media ${SCREEN.tablet} {
    background: white;
    border: 1px solid ${COLORS.grayMiddle};
    box-shadow: 0 4px 8px 0 ${COLORS.grayMiddle};
    transition: 0.3s ease;
  }
`;

export default CleanCard;
