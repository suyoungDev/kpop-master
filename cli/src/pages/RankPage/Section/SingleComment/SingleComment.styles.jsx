import styled from 'styled-components';
import { COLORS, FONT, SIZES } from '../../../../constants/theme';

export const ColumnWrapper = styled.div`
  width: ${({ likes }) => (likes ? '30px' : '100%')};
  height: ${({ likes }) => (likes ? '70px ' : 'auto')};
  display: flex;
  flex-direction: column;
  justify-content: ${({ likes }) => (likes ? 'space-around' : 'center')};
  align-items: ${({ likes }) => (likes ? 'center' : 'flex-start')};
  margin: ${({ likes }) => (likes ? '0 0.4rem 0 0 ' : '0 0 0 0')};
`;

export const ReplyButton = styled.button`
  outline: none;
  border: none;
  padding: 0.3rem 0.7rem;
  border-radius: ${SIZES.radiusMini};
  background-color: ${COLORS.lightSkyGray};
  align-self: baseline;
  cursor: pointer;
`;

export const Writer = styled.span`
  font-size: 15px;
  font-weight: bold;
  color: ${COLORS.headingDarkGray};
`;

export const Content = styled.div`
  font-size: 16px;
  font-weight: 200;
  font-family: ${FONT.korean};
  color: ${COLORS.contentGray};
`;

export const RowBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${({ start }) => (start ? 'flex-start' : 'space-between')};

  margin-bottom: 0.2rem;
`;

export const When = styled.span`
  font-size: 12px;
  font-weight: 200;
  color: ${COLORS.contentGray};
  margin-left: 0.5rem;
`;

export const RowContainer = styled.div`
  width: 500px;
  display: flex;
  flex-direction: row;
  margin: 1rem 0 0 0;
`;

export const Likes = styled.span`
  font-size: 14px;
  font-weight: 200;
  color: ${COLORS.contentGray};
`;

export const SeeMore = styled.button`
  outline: none;
  border: none;
  display: flex;
  align-items: center;
  color: ${COLORS.primaryPoint};
  background-color: transparent;
  cursor: pointer;
  .icon {
    margin-right: 0.2rem;
  }
`;
