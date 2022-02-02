import styled from '@emotion/styled/macro';
import { row, spaceBetween } from '@/style';

export const Wrapper = styled.div`
  ${row}
  ${spaceBetween};

  > button {
    &:first-of-type {
      margin-left: 1.5rem;
    }
    &:not(:last-of-type) {
      margin-right: 0.4rem;
    }
  }
`;

export const ChildrenWrapper = styled.div`
  ${row};
`;

export const InputWrapper = styled.div`
  ${row};
  width: 100%;
  > div {
    width: 100%;
    &:nth-of-type(2) {
      width: 150%;
    }
    &:not(:last-child) {
      padding-right: 0.5rem;
    }
  }
`;
