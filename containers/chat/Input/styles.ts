import styled from '@emotion/styled';
import { flex, transition } from '@styles/index';

export const Form = styled.form`
  width: 100%;
  ${flex({ jc: 'center' })};
  border: 1px solid ${({ theme }) => theme.ink.lighter};
  label {
    display: none;
  }
  input {
    width: 100%;
    resize: none;
    outline: none;
    padding: 0.72rem 1.25rem;
    color: ${({ theme }) => theme.ink.default};
    background-color: ${({ theme }) => theme.background.default};
    :hover {
      border-color: ${({ theme }) => theme.primary.lighter};
    }
    :focus {
      border-color: ${({ theme }) => theme.primary.light};
      color: ${({ theme }) => theme.ink.dark};
    }
    :disabled {
      border-color: ${({ theme }) => theme.ink.lighter};
      background: ${({ theme }) => theme.background.light};
      cursor: not-allowed;
    }
    transition: border-color 0.3s ease;
  }

  button {
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
