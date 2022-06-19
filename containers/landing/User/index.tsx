import React, { useCallback } from 'react';
import { useSetRecoilState } from 'recoil';
import socket from 'utils/socket';
import Input from '@F/Input';
import useInput from '@hooks/useInput';
import useInputError from '@hooks/useInputError';
import ERROR_MESSAGE from '@data/errorMessage';
import user from '@store/user';

const UserName = () => {
  const { input, onChange, onReset } = useInput('');
  const { error, setError, onError } = useInputError();
  const setUserName = useSetRecoilState(user);

  const confirmUserName = useCallback(() => {
    setUserName(input);
    socket.connect('', input);
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
          setError(null);
          onChange(e);
        }}
        isError={!!error}
        setError={onError}
        minLength={2}
        maxLength={10}
        alertMessage={error ? ERROR_MESSAGE.USER[error] : ''}
      />
      <button type="submit">결정!</button>
    </form>
  );
};

export default UserName;
