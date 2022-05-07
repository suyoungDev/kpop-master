import React from 'react';
import * as S from './styles';

type Props = {
  label: string;
  deleteTag?: () => void;
};

const Tag = ({ label, deleteTag }: Props): JSX.Element => {
  return (
    <S.Wrapper role="note" aria-labelledby={label}>
      <span id={label}>{label}</span>
      {deleteTag && (
        <button onClick={deleteTag} aria-label={`delete ${label} tag`}>
          x
        </button>
      )}
    </S.Wrapper>
  );
};

export default Tag;
