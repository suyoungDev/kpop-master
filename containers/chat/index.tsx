import React, { useCallback, useEffect, useState } from 'react';
// import socket from 'utils/socket';
import ChatInput from './Input';

const Chat = () => {
  const [msg, setMsg] = useState<string>('???');
  const [name, setName] = useState('');

  const emitMessage = useCallback((message: string) => {
    // socket.emit('chat', message, setMsg);
  }, []);

  return (
    <div>
      <h2>{name} has entered</h2>
      <p>{msg}</p>
      <ChatInput onEmitMessage={emitMessage} />
    </div>
  );
};

export default Chat;
