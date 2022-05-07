import styled from '@emotion/styled';
import { flex, transition } from '@styles/index';

export const Wrapper = styled.div`
  ${flex({ dir: 'row', jc: 'sb' })};
  background-color: ${({ theme }) => theme.secondary.default};
  padding: 0.3rem 0.8rem;
  border-radius: 1rem;
  margin-bottom: 0.2rem;
  span {
    font-size: 0.8rem;
    margin-right: 0.3rem;
    color: ${({ theme }) => theme.background.default};
  }

  button {
    ${flex({})};
    ${transition({})};
    cursor: pointer;
    svg {
      fill: rgba(255, 255, 255, 0.6);
    }
    &:hover {
      svg {
        fill: white;
      }
    }
  }
  &:hover {
    ${transition({ property: 'background-color' })};
    background-color: ${({ theme }) => theme.secondary.dark};
  }
`;
