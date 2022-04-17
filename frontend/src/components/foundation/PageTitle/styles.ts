import { row, transition } from '@/style';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  ${row};
  justify-content: space-between;
  width: 100%;

  h1 {
    color: ${({ theme }) => theme.ink.dark};
    margin-right: 1rem;
  }
  :hover {
    svg {
      fill: ${({ theme }) => theme.ink.light};
      ${transition};
    }
  }

  margin-bottom: 2.5rem;
`;
