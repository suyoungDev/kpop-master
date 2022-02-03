import { row } from '@/style';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  ${row};
  flex-wrap: wrap;
  width: 100%;

  > div {
    &:not(:last-of-type) {
      margin-right: 0.2rem;
    }
  }

  padding-bottom: 0.2rem;
`;

export const Input = styled.input`
  margin-left: 0.2rem;
  padding: 0.4rem;
  color: ${({ theme }) => theme.ink.default};
`;
