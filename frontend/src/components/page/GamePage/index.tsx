import React, { useEffect } from 'react';
import * as S from './styles';
import { io } from 'socket.io-client';

const GamePage = (): JSX.Element => {
  const connect = () => {
    const socket = io('http://localhost:5000');
  };
  useEffect(() => {
    connect();
  }, []);

  return <S.Wrapper>GamePage Foundation</S.Wrapper>;
};

export default GamePage;
