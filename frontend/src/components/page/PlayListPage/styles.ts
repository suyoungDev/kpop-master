import { column, row } from '@/style';
import styled from '@emotion/styled/';

export const Wrapper = styled.div``;

export const ListWrapper = styled.div`
  ${column};

  > div:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

export const ButtonWrapper = styled.div`
  ${row}
`;
