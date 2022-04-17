import styled from '@emotion/styled/';
import { row } from '@/style';
import { Props } from './index';

export const Wrapper = styled.div`
  ${row};
  width: 100%;
`;

export const Label = styled.label`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.ink.default};
  margin-right: 0.245rem;
`;

export const Input = styled.input<Pick<Props, 'variant'>>`
  outline: none;
  width: 100%;
  padding: 0.72rem 1.25rem;
  color: ${({ theme }) => theme.ink.default};
  background-color: ${({ theme }) => theme.background.default};

  ${({ variant, theme }) =>
    variant === 'default'
      ? `
      border: 1px solid ${theme.ink.lighter};
      border-radius: 4px;
        `
      : `
      border-bottom: 2px solid ${theme.ink.lighter};
      `};

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

export const TextArea = Input.withComponent('textarea');
