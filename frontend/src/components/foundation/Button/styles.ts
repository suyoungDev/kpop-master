import styled from '@emotion/styled';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.125rem;
  min-width: 80px;

  outline: none;
  border: none;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.primary.default};

  color: ${({ theme }) => theme.ink.lighter};
  transition: all 0.3s ease;

  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.primary.light};
  }
  &:active {
    background-color: ${({ theme }) => theme.primary.dark};
  }
  &:disabled {
    color: ${({ theme }) => theme.ink.light};
    background-color: ${({ theme }) => theme.background.light};
  }
`;
