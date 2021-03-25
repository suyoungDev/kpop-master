import styled from 'styled-components';
import { COLORS, FONT, SIZES } from '../../../../constants/theme';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;

  span {
    width: 80%;
    color: ${COLORS.primaryThree};
    font-family: ${FONT.korean};
    text-align: center;
  }
`;

export const Descript = styled.div`
  width: 95%;
  max-width: ${SIZES.tabletWidth};
  margin-top: 0.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 16px;
  color: ${COLORS.headingDarkGray};
  line-height: 23px;
  text-align: center;
  font-family: 'nanum gothic';
`;
