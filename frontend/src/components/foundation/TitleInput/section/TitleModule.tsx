import React from 'react';
import styled from '@emotion/styled';
import { BiPencil } from 'react-icons/bi';
import IconButton from '@F/IconButton';
import { row } from '@/style';

interface Props {
  title: string;
  changeTitle: () => void;
}

const TitleModule = ({ title, changeTitle }: Props): JSX.Element => {
  return (
    <Wrapper onDoubleClick={changeTitle}>
      <h2>{title}</h2>
      <IconButton onClick={changeTitle} title="작성하기">
        <BiPencil />
      </IconButton>
    </Wrapper>
  );
};

export default TitleModule;

const Wrapper = styled.div`
  ${row};
  align-items: center;
  justify-content: space-between;
  width: 100%;

  h2 {
    padding: 0 1.25rem;
  }
  :hover {
    h2 {
      color: ${({ theme }) => theme.ink.darker};
    }
    svg {
      fill: ${({ theme }) => theme.primary.darker};
    }
  }
`;
