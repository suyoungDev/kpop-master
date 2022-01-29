import React from 'react';
import * as S from './styles';

export interface Props {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled: boolean;
}

const Input = ({ id, label, ...props }: Props): JSX.Element => {
  return (
    <S.Wrapper>
      <S.Label htmlFor={id}>{label}</S.Label>
      <S.Input type='text' id={id} {...props} />
    </S.Wrapper>
  );
};

export default Input;
