import styled from '@emotion/styled';
import { center, transition } from '@/style';

export const Button = styled.button`
  ${center};
  ${transition};

  outline: none;
  background-color: transparent;
  padding: 0.2rem;
  border-radius: 50%;
  width: 40px;
  height: 40px;

  svg {
    fill: ${({ theme }) => theme.ink.lighter};
  }

  :hover {
    background-color: ${({ theme }) => theme.background.light};
    svg {
      fill: ${({ theme }) => theme.primary.darker} !important;
    }
  }
  :active {
    background-color: ${({ theme }) => theme.primary.lighter};
    svg {
      fill: ${({ theme }) => theme.primary.darker};
    }
  }
`;
