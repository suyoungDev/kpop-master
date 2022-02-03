import React from 'react';
import * as S from './styles';

export interface Props {
  message: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ChattingTextArea = ({ message, onChange }: Props): JSX.Element => {
  return <S.ChattingArea value={message} onChange={onChange} autoFocus />;
};

export default ChattingTextArea;
