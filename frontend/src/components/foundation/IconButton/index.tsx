import React from 'react';
import * as S from './styles';

export interface Props {
  children: React.ReactNode;
  onClick: () => void;
  title: string;
}

const IconButton = ({ children, ...props }: Props): JSX.Element => {
  return <S.Button {...props}>{children}</S.Button>;
};

export default IconButton;
