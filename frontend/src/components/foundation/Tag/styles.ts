import { center, row, spaceBetween, transition } from '@/style';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  ${row};
  ${spaceBetween}
  background-color: ${({ theme }) => theme.secondary.default};
  min-width: 50px;
  padding: 0.3rem 0.8rem;
  border-radius: 1rem;

  span {
    font-weight: 300;
    font-size: 0.8rem;
    margin-right: 0.3rem;
    color: ${({ theme }) => theme.background.default};
  }

  button {
    ${center};
    ${transition};
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
    ${transition};
    background-color: ${({ theme }) => theme.secondary.dark};
  }
`;
