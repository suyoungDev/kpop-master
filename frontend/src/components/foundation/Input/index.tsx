import React from 'react';
import * as S from './styles';

export interface Props {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  isLabelExist?: boolean;
  disabled?: boolean;
}

const Input = ({
  id,
  label,
  disabled = false,
  isLabelExist = false,
  ...props
}: Props): JSX.Element => {
  return (
    <S.Wrapper>
      {isLabelExist && <S.Label htmlFor={id}>{label}</S.Label>}
      <S.Input type='text' name={id} id={id} disabled={disabled} {...props} />
    </S.Wrapper>
  );
};

export default Input;
