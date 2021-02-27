import styled from 'styled-components';
import { COLORS, SIZES } from '../../../../constants/theme';

export const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: row;
`;

export const Button = styled.button`
  width: 100px;

  border: none;
  border-radius: ${SIZES.radiusMini};

  background-color: ${({ cancel }) =>
    cancel ? `${COLORS.lightSkyGray}` : `${COLORS.secondaryDark}`};

  color: ${COLORS.primaryDark};
  font-weight: bold;
  letter-spacing: 0.3px;
  margin-right: ${({ cancel }) => (cancel ? '.4rem' : '')};

  :hover {
    background-color: ${({ cancel }) =>
      cancel ? `${COLORS.shadowLight}` : `${COLORS.secondary}`};
  }

  :focus {
    outline: none;
  }
`;

export const CommentBox = styled.textarea`
  width: 100%;
  padding: 0.7rem 0.7rem;
  margin-right: 0.7rem;
  outline: none;
  border: 1px solid ${COLORS.shadowDark};
  border-radius: ${SIZES.radiusMini};
`;
