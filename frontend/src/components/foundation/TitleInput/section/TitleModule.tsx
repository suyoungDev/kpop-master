import React from 'react';
import styled from '@emotion/styled';
import { BiPencil } from 'react-icons/bi';
import IconButton from '@F/IconButton';
import { row } from '@/style';

interface Props {
  title: string;
  onClick: () => void;
  changeTitle: () => void;
}

const TitleModule = ({ title, onClick, changeTitle }: Props): JSX.Element => {
  return (
    <Wrapper onDoubleClick={changeTitle}>
      <h2>{title}</h2>
      <IconButton onClick={onClick} title="작성하기">
        <BiPencil />
      </IconButton>
    </Wrapper>
  );
};

export default TitleModule;

const Wrapper = styled.div`
  ${row}
`;
