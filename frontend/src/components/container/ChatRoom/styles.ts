import { row, smallText, transition } from '@/style';
import styled from '@emotion/styled';

export const Form = styled.form`
  width: 100%;
  ${row};
  border: 1px solid ${({ theme }) => theme.ink.lighter};

  button {
    ${smallText};
    ${transition};
    word-break: keep-all;
    border-left: 1px solid ${({ theme }) => theme.ink.lighter};
    min-width: 150px;
    height: 70px;
    padding: 1rem;
    background-color: ${({ theme }) => theme.background.default};
    color: ${({ theme }) => theme.primary.default};

    &:hover {
      background-color: ${({ theme }) => theme.primary.lighter};
    }
    &:active {
      color: ${({ theme }) => theme.background.default};
      background-color: ${({ theme }) => theme.primary.default};
    }
  }
`;
