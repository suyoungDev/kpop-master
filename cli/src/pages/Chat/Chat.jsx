import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import useInput from '../../hook/useInput';

const Chat = () => {
  const ENDPOINT = 'localhost:5000';
  let socket = io();
  const [inputValue, setInputValue] = useInput();

  // useEffect(() => {
  //   // console.log(socket);

  //   //  socket.emit('join', { hi: 'hi' });

  //   return () => {
  //     // socket.emit('disconnect');
  //     // socket.off();
  //   };
  // }, [ENDPOINT, setInputValue]);

  const submitHandle = (e) => {
    e.preventDefault();
    socket.emit('chat message', inputValue);
    console.log('submit');
  };

  return (
    <div>
      Chat Room
      <form onSubmit={submitHandle}>
        <input
          onChange={setInputValue}
          value={inputValue}
          placeholder='chatt...'
        />
      </form>
    </div>
  );
};

export default Chat;
