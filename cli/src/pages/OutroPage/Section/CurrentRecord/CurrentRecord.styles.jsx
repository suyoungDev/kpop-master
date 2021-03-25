import styled from 'styled-components';
import { COLORS } from '../../../../constants/theme';

export const TableContainer = styled.table`
  width: 100%;
  font-size: 16px;
  font-weight: 200;
  margin-top: -0.2rem;
  border-radius: 10px;
  text-align: center;
  color: ${COLORS.headingDarkGray};
`;

export const TableContext = styled.td`
  color: ${({ isWorng }) =>
    isWorng === 'correct' ? `${COLORS.headingDarkGray}` : 'red'};
  font-weight: 200;
  overflow: hidden;
  padding: 0.3rem 1rem;
  font-size: 14px;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 2rem;
  font-size: 16px;
  color: black;

  #list-container {
    display: flex;
    flex-direction: row;
  }
`;

export const TitleList = styled.li`
  margin-right: 1rem;
  list-style: none;

  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: 200;
  color: ${COLORS.headingDarkGray};

  .icon {
    color: ${COLORS.contentGrayLight};
    margin-right: 7px;
  }
`;
