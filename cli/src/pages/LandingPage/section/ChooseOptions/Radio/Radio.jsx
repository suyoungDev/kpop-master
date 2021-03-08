import styled from 'styled-components';
import { FONT, COLORS, SIZES, SCREEN } from '../../../../../constants/theme';

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 1rem;

  border-radius: ${SIZES.radiusMini};
  border: 1px solid ${COLORS.shadowLight};

  font-size: 14px;
  font-family: ${FONT.korean};
  color: ${COLORS.contentGrayLight};
  cursor: pointer;
  transition: all 0.3s ease;
  word-break: keep-all;

  :hover {
    border: 1px solid ${COLORS.primaryTwo};
    color: ${COLORS.primaryTwo};
  }
`;

export const Radio = styled.input`
  display: none;

  &:checked + ${RadioLabel} {
    background-color: ${COLORS.lightSkyGray};
    color: ${COLORS.primaryTwo};
    font-weight: bold;
  }
`;

export const RadioContainer = styled.div``;

export const RadioRowContainer = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: ${({ getWith }) =>
    getWith ? '1fr 1fr' : '1fr 1fr 1fr'};
  grid-auto-flow: column;
  align-items: center;
  justify-content: space-between;

  @media ${SCREEN.tablet} {
    grid-auto-flow: column;
  }
`;

export const TextInput = styled.input`
  background-color: ${COLORS.lightSkyGray};
  border: none;
  outline: none;
  padding: 1rem 1.5rem;
  border-radius: ${SIZES.radiusMini};
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;

  font-family: ${FONT.korean};
  color: ${COLORS.headingDarkGray};
  width: 90%;

  & + button {
    outline: none;
    width: 45px;
    border-radius: ${SIZES.radiusMini};
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;

    background-color: ${COLORS.lightSkyGray};
    border: none;
    color: ${COLORS.headingDarkGray};
    cursor: pointer;

    & :hover {
      color: ${COLORS.primaryTwo};
    }
  }
`;
