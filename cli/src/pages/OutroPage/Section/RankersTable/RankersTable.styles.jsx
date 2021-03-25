import styled from 'styled-components';
import { COLORS, FONT, SCREEN, SIZES } from '../../../../constants/theme';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TableContainer = styled.table`
  width: 100%;
  font-family: ${FONT.korean};
  font-weight: 200;
  overflow: hidden;
  padding: 0 0 0.8rem 0;
  border-bottom: 1px solid ${COLORS.lightSkyGray};

  td {
    padding: 6px;
    text-align: center;
    font-size: 14px;
  }

  .ranking {
    width: 7%;
    text-align: center;
    color: ${COLORS.contentGray};
  }
  .name {
    width: 40%;
    color: ${COLORS.contentGray};
  }
  .record {
    width: 20%;
    text-align: right;
    font-size: 13px;
    color: ${COLORS.headingDarkGray};
  }

  .myRecord {
    color: ${COLORS.primaryThree};
    font-weight: bold;
  }

  .value {
    width: 16%;
    background-color: ${COLORS.lightSkyGray};
    color: ${COLORS.primaryThree};
    padding: 0 4px;
    border-radius: ${SIZES.radiusSmall};
    font-size: 11px;
  }

  @media ${SCREEN.tablet} {
    td {
      font-size: 15px;
    }
    .record {
      width: 12%;
    }
  }
`;
