import React, { ChangeEvent, useCallback, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import socket from 'utils/socket';
import Input from '@F/Input';
import useInput from '@hooks/useInput';
import user from '@atom/user';

const UserName = () => {
  const { input, onChange, onReset } = useInput('');
  const setUserName = useSetRecoilState(user);
  const [error, setError] = useState(false);

  const confirmUserName = useCallback(() => {
    setUserName(input);
    localStorage.setItem('username', input);
    socket.connect('/api/socket', input);
    onReset();
  }, [input]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        confirmUserName();
      }}
      onInvalid={(e) => {
        e.preventDefault();
      }}
    >
      <Input
        label="사용자 이름"
        id="userName"
        name="userName"
        value={input}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setError(false);
          onChange(e);
        }}
        isError={error}
        setError={setError}
        minLength={2}
        alertMessage="이름은 2글자 이상이어야합니다."
      />
      <button type="submit">결정!</button>
    </form>
  );
};

export default UserName;
