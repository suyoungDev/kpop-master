import styled from 'styled-components';
import { COLORS, FONT, SCREEN, SIZES } from '../../../../constants/theme';

export const ColumnWrapper = styled.div`
  width: ${({ likes }) => (likes ? '30px' : '100%')};
  height: ${({ likes }) => (likes ? '70px ' : 'auto')};
  display: flex;
  flex-direction: column;
  justify-content: ${({ likes }) => (likes ? 'space-around' : 'flex-start')};
  align-items: ${({ likes }) => (likes ? 'center' : 'flex-start')};
  margin: ${({ likes }) => (likes ? '0 0.8rem 0 0 ' : '0 0 0 0')};
`;

export const Writer = styled.span`
  font-size: 14px;
  font-weight: 200;
  font-family: ${FONT.korean};
  color: ${COLORS.contentGray};
`;

export const Content = styled.div`
  font-size: 16px;
  font-weight: 200;
  font-family: ${FONT.korean};
  color: ${COLORS.headingDarkGray};
`;

export const RowBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: ${({ start }) => (start ? 'flex-start' : 'space-between')};

  :not(:last-child) {
    margin-bottom: ${({ start }) => (start ? '' : '0.6rem')};
  }

  .icon {
    display: flex;
    color: ${COLORS.contentGrayLight};
    align-self: center;
    margin: 0 0.2rem;
  }
`;

export const When = styled.span`
  font-size: 12px;
  font-weight: 200;
  color: ${COLORS.contentGrayLight};
  font-family: ${FONT.korean};
`;

export const RowContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 0.6rem;
  border: 1px solid ${COLORS.lightSkyGray};
  border-radius: ${SIZES.radiusMini};
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
  font-size: 12px;
  font-weight: 200;
  cursor: pointer;

  .icon {
    margin-right: 0.2rem;
  }
`;

export const ReplyContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${({ column }) => column && 'column'};
  align-items: center;
  justify-content: flex-end;
  padding: ${({ rereply }) => (rereply ? '0.3rem 0 0.3rem 38px' : '')};

  @media ${SCREEN.tablet} {
    width: 460px;
    display: flex;
    margin-top: 0.4rem;
    flex-direction: ${({ column }) => column && 'column'};
    border: ${({ reply }) => (reply ? '' : `1px solid ${COLORS.lightSkyGray}`)};

    padding: ${({ reply }) => (reply ? '' : '0.6rem')};
    border-radius: ${SIZES.radiusMini};
    margin-left: 2rem;
    justify-content: space-between;
    align-items: stretch;
  }
`;

export const CommentWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 1rem;

  @media ${SCREEN.tablet} {
    max-width: 500px;
  }
`;

export const Column = styled.div`
  display: none;

  @media ${SCREEN.tablet} {
    display: flex;
    flex-direction: column;
  }
`;
