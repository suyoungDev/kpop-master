import IconButton from '@F/IconButton';
import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import * as S from './styles';

export interface Props {
  label: string;
  deleteTag: () => void;
}

const Tag = ({ label, deleteTag }: Props): JSX.Element => {
  return (
    <S.Wrapper>
      <span>{label}</span>
      <button onClick={deleteTag}>
        <AiOutlineClose />
      </button>
    </S.Wrapper>
  );
};

export default Tag;
