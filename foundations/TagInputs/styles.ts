import styled from '@emotion/styled';
import { flex } from '@styles/index';

export const Wrapper = styled.div`
  ${flex({ dir: 'row' })};
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
