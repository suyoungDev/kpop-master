import React, { useCallback, useEffect, useState } from 'react';
import { Socket, io } from 'socket.io-client';
import ChatInput from './Input';

let socket: Socket<ServerToClientEvents, ClientToServerEvents> = io();

const Chat = () => {
  const [msg, setMsg] = useState<string>('???');
  const [name, setName] = useState('');
  const [goodBye, setGoodBye] = useState('');

  const socketInitializer = async () => {
    await fetch('/api/socket');
    socket = io();

    socket.onAny((event, ...args) => {
      console.log(event, args);
    });

    socket.on('connect', () => {
      socket.emit('hello', socket.id);
      socket.on('hello', (id) => console.log(id));
      socket.on('updateChat', (message) => {
        setMsg(message);
      });
      socket.on('newBuddy', (id) => {
        setName(id);
      });
    });
  };
  useEffect(() => {
    socketInitializer();
  }, []);

  const emitMessage = useCallback((message: string) => {
    socket.emit('chat', message);
  }, []);

  return (
    <div>
      <h1>{goodBye} has left</h1>
      <h2>{name} has entered</h2>
      <p>{msg}</p>
      <ChatInput onEmitMessage={emitMessage} />
    </div>
  );
};

export default Chat;
