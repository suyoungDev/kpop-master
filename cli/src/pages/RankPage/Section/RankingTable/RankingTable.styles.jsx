import styled from 'styled-components';
import { COLORS, FONT } from '../../../../constants/theme';

export const MyRecordButton = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  font-size: 14px;
  font-weight: bold;
  font-family: ${FONT.korean};
  color: ${COLORS.contentGrayLight};
  letter-spacing: 1px;
  cursor: pointer;

  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 0.7rem;

  .icon {
    margin-right: 0.3rem;
  }

  :hover {
    color: ${COLORS.primaryThree};
    transition: all 0.3s ease;
  }
`;

export const NoDataSpan = styled.span`
  color: ${COLORS.contentGrayLight};
  width: 100%;
  display: flex;
  text-align: center;
  justify-content: center;
`;
