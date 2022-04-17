import { Props } from './index';
import styled from '@emotion/styled';
import { defaultText, row, smallText } from '@/style';

export const Wrapper = styled.div<Pick<Props, 'isReceived'>>`
  ${row};
  ${defaultText};
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
    ${smallText};
    color: ${({ theme }) => theme.ink.default};
  }
  p {
    color: ${({ theme }) => theme.ink.dark};
  }
`;
