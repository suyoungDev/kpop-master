import { Props } from './index';
import styled from '@emotion/styled';
import { row } from '@/style';

export const Wrapper = styled.div<Pick<Props, 'isReceived'>>`
  ${row};
  ${({ theme }) => theme.font.default};
  padding: 0.7rem;
  border-radius: 10px;
  border: 1px solid transparent;
  max-width: 500px;

  ${({ theme, isReceived }) =>
    isReceived
      ? `background: ${theme.background.light}`
      : `border-color: ${theme.ink.light};
        text-align: end;
    `};

  span {
    margin-right: 0.8rem;
    ${({ theme }) => theme.font.small};
    color: ${({ theme }) => theme.ink.default};
  }
  p {
    color: ${({ theme }) => theme.ink.dark};
  }
`;
