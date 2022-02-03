import { column, row } from '@/style';
import styled from '@emotion/styled/';

export const Wrapper = styled.div`
  form {
    > button {
      margin-top: 3rem;
    }
  }
`;

export const ListWrapper = styled.div`
  ${column};

  > div:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

export const ButtonWrapper = styled.div`
  ${row}
`;

export const TagListWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 40px 1fr;
  grid-template-areas: 'label tags';
  grid-gap: 1rem;

  border-bottom: 1px solid ${({ theme }) => theme.ink.lighter};
  margin-bottom: 2rem;

  > div {
    cursor: default;
    padding: 0.3rem 0.8rem;
    grid-area: label;
    span {
      user-select: none;
      color: ${({ theme }) => theme.ink.default};
      ${({ theme }) => theme.font.small};
    }
  }
`;
