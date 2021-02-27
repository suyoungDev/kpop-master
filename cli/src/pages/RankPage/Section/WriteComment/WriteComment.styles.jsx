import styled from 'styled-components';
import { COLORS, SIZES } from '../../../../constants/theme';

export const Form = styled.form`
  width: ${({ reply }) => (reply ? '450px' : '500px')};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Button = styled.button`
  width: 100px;
  height: ${({ reply }) => reply && '30px'};
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: ${SIZES.radiusMini};

  background-color: ${({ cancel }) =>
    cancel ? `${COLORS.lightSkyGray}` : `${COLORS.secondaryDark}`};

  color: ${COLORS.primaryDark};
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 0.9px;

  :hover {
    background-color: ${({ cancel }) =>
      cancel ? `${COLORS.shadowLight}` : `${COLORS.secondary}`};
  }

  :focus {
    outline: none;
  }

  :first-child {
    margin: ${({ reply }) => (reply ? '0 0 .4rem 0' : '0 .4rem 0 0')};
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 150px;
`;

export const CommentBox = styled.textarea`
  width: 100%;
  padding: 0.7rem 0.7rem;
  margin-right: 0.7rem;
  outline: none;
  border: 1px solid ${COLORS.lightSkyGray};
  border-radius: ${SIZES.radiusMini};
  background-color: ${({ reply }) => reply && `${COLORS.lightSkyGray}`};
`;
