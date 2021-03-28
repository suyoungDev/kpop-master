import styled from 'styled-components';
import { COLORS, SIZES, FONT } from '../../../../constants/theme';

export const Wrapper = styled.div`
  width: 100%;
  height: 2.5rem;
  padding: 1rem;
  margin: 1rem 0 2rem 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  border: 1px solid ${COLORS.shadowLight};
  box-shadow: 0 4px 8px 0 ${COLORS.shadowLight};
  border-radius: ${SIZES.radiusSmall};
`;

export const Title = styled.span`
  font-size: 16px;
  font-weight: 200;
  font-family: ${FONT.korean};
  display: flex;
  align-items: center;
  color: ${COLORS.contentGrayLight};

  .icon {
    margin-right: 7px;
  }
`;

export const Content = styled.span`
  font-size: 16px;
  color: ${COLORS.primaryThree};
  font-family: ${FONT.english};
  font-weight: bold;
`;

export const Bold = styled.span`
  font-weight: bold;
  margin-left: 0.3rem;
  color: black;
`;
