import React, { useCallback, useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import userName from '@store/user';
// import socket from 'utils/socket';
import ChatInput from './Input';

const Chat = () => {
  const [msg, setMsg] = useState<string>('???');
  const [name, setName] = useState('');
  const savedName = useRecoilValue(userName);

  const emitMessage = useCallback((message: string) => {
    setMsg(message);
    // socket.emit('chat', message, setMsg);
  }, []);

  return (
    <div>
      <h2>{savedName} has entered</h2>
      <p>{msg}</p>
      <ChatInput onEmitMessage={emitMessage} />
    </div>
  );
};

export default Chat;
