import React from 'react';
import * as S from './styles';

export interface Props {
  userName: string;
  message: string;
  isReceived: boolean;
  userColor: string;
}
// TODO: userColor 받아서 span 색상으로 수정하기

const Chat = ({ userName, message, isReceived }: Props): JSX.Element => {
  return (
    <S.Wrapper isReceived={isReceived}>
      {isReceived && <span>{userName}</span>}
      <p>{message.trim()}</p>
    </S.Wrapper>
  );
};

export default Chat;
