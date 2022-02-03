import styled from '@emotion/styled';

export const ChattingArea = styled.input`
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
`;
