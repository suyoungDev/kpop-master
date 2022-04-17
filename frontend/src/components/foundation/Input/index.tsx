import React from 'react';
import * as S from './styles';

export interface Props {
  id?: string;
  label?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  isLabelExist?: boolean;
  disabled?: boolean;
  variant?: 'default' | 'underLine';
  autoFocus?: boolean;
  required?: boolean;
}

const Input = ({
  id,
  label,
  isLabelExist = false,
  disabled = false,
  variant = 'default',
  ...props
}: Props): JSX.Element => {
  return (
    <S.Wrapper>
      {isLabelExist && <S.Label htmlFor={id}>{label}</S.Label>}
      <S.Input type="text" name={id} id={id} disabled={disabled} variant={variant} {...props} />
    </S.Wrapper>
  );
};

export default Input;
