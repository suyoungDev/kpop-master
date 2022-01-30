import styled from '@emotion/styled/macro';
import { row } from '@/style';

export const Wrapper = styled.div`
  ${row}
  > div {
    &:nth-of-type(2) {
      width: 300px;
    }
    &:not(:last-child) {
      padding-right: 0.5rem;
    }
  }
`;
