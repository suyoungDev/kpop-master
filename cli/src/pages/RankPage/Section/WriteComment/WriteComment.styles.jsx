import styled from 'styled-components';
import { COLORS, FONT, SCREEN, SIZES } from '../../../../constants/theme';

export const Form = styled.form`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: ${({ origin }) => (origin ? '0.7rem 0' : '0.4rem 0')};

  @media ${SCREEN.tablet} {
    width: ${({ reply }) => (reply ? '460px' : '500px')};
  }
`;

export const Button = styled.button`
  display: none;
  font-family: ${FONT.korean};
  font-weight: 200;

  @media ${SCREEN.tablet} {
    width: 100px;
    height: ${({ reply }) => (reply ? '30px' : 'auto')};
    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    border-radius: ${SIZES.radiusMini};

    background-color: ${({ cancel }) =>
      cancel ? `${COLORS.lightSkyGray}` : `${COLORS.headingDarkGray}`};

    color: ${({ cancel }) =>
      cancel ? `${COLORS.contentGray}` : `${COLORS.textWhiteMid}`};
    font-size: 14px;
    letter-spacing: 2px;

    :hover {
      background-color: ${({ cancel }) =>
        cancel ? `${COLORS.primaryLight}` : `${COLORS.primaryDark}`};
      color: ${({ cancel }) => (cancel ? `${COLORS.primaryThree}` : `white`)};
    }

    :focus {
      outline: none;
    }

    :first-child {
      margin: ${({ reply }) => (reply ? '0 0 .4rem 0' : '0 .4rem 0 0')};
    }
  }
`;

export const ButtonContainer = styled.div`
  display: none;

  @media ${SCREEN.tablet} {
    display: flex;
    flex-direction: row;
    width: 150px;
  }
`;

export const CommentBox = styled.textarea`
  font-size: 14px;
  width: 100%;
  padding: 0.7rem 0.7rem;
  outline: none;
  border: 1px solid ${COLORS.lightSkyGray};
  border-radius: ${SIZES.radiusMini};
  background-color: ${({ reply }) => reply && `${COLORS.lightSkyGray}`};
  font-family: ${FONT.korean};

  @media ${SCREEN.tablet} {
    margin-right: 0.7rem;
    font-size: 14px;
  }
`;
