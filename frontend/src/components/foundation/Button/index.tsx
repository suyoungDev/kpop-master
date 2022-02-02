import React from 'react';
import * as S from './styles';

export interface Props {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'submit' | 'button' | 'reset';
  title?: string;
}

const Button = ({ label, type = 'button', disabled = false, ...props }: Props): JSX.Element => {
  return (
    <S.Button disabled={disabled} type={type} {...props}>
      {label}
    </S.Button>
  );
};

export default Button;
