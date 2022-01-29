import React from 'react';
import * as S from './styles';

export interface Props {
  label: string;
  onClick: () => void;
  disabled: boolean;
}

const Button = ({ label, ...props }: Props): JSX.Element => {
  return <S.Button {...props}>{label}</S.Button>;
};

export default Button;
