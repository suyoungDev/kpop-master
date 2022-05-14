import styled from '@emotion/styled';
import { flex, transition } from '@styles/index';

export const Wrapper = styled.div`
  ${flex({ dir: 'row', jc: 'sb' })};
  width: 100%;
  h1 {
    color: ${({ theme }) => theme.ink.dark};
    margin-right: 1rem;
  }
  :hover {
    svg {
      fill: ${({ theme }) => theme.ink.light};
      ${transition({})};
    }
  }
  margin-bottom: 2.5rem;
`;
