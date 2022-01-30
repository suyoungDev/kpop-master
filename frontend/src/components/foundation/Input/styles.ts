import styled from '@emotion/styled/';
import { row } from '@/style';

export const Wrapper = styled.div`
  ${row}
`;

export const Label = styled.label`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.ink.default};
  margin-right: 0.245rem;
`;

export const Input = styled.input`
  outline: none;
  width: 100%;
  padding: 0.72rem 1.25rem;
  color: ${({ theme }) => theme.ink.default};
  border: 1px solid ${({ theme }) => theme.ink.lighter};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.background.default};

  :hover {
    border-color: ${({ theme }) => theme.primary.lighter};
  }
  :focus {
    border-color: ${({ theme }) => theme.primary.light};
  }
  :disabled {
    border-color: ${({ theme }) => theme.ink.lighter};
    background: ${({ theme }) => theme.background.light};
    cursor: not-allowed;
  }

  transition: border-color 0.3s ease;
`;
