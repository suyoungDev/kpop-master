import useInputError from '@utils/hooks/useInputError';
import React, { useCallback, useState } from 'react';
import Input from '@F/Input';
import useInput from '@hooks/useInput';
import { RANDOM_LABEL } from '@data/game';
import { ERROR_MESSAGE } from '@data/game/';
import * as S from './styles';

type Props = {
  onEmitMessage: (message: string) => void;
};

const ARROW = ['ArrowUp', 'ArrowDown'];
const ChatInput = ({ onEmitMessage }: Props): JSX.Element => {
  const { input, onChange, setInput, onReset } = useInput('');
  const [buttonLabelIndex, setButtonLabelIndex] = useState(0);
  const { error, onError, setError } = useInputError();

  const sendingMessage = useCallback(() => {
    onEmitMessage(input);
    onReset();
  }, [input, onEmitMessage, onReset]);

  // TODO: chat log 가져와서 이전에 보낸 내역을 input에 할당
  const getChatLog = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      const key = e.nativeEvent.code;
      if (ARROW.includes(key)) {
        switch (key) {
          case 'ArrowUp':
            break;
          case 'ArrowDown':
            break;
          default:
            break;
        }
        setInput('oops!');
      }
    },
    [setInput]
  );
  // TODO: 틀렸을때 버튼 라벨에 할당하기
  const generateRandomLabelIndex = useCallback(() => {
    const length = RANDOM_LABEL.length;
    const randomNumber = Math.floor(Math.random() * length);
    setButtonLabelIndex((prev) =>
      prev === randomNumber
        ? randomNumber + 1 <= length
          ? randomNumber + 1
          : randomNumber - 1
        : randomNumber
    );
  }, []);

  return (
    <S.Form
      onSubmit={(e) => {
        e.preventDefault();
        // TODO: 보낸지 0.5초안에 다시 못보내게 시간재기
        // if (true) return setError('tooFast');
        setError(null);
        sendingMessage();
        generateRandomLabelIndex();
      }}
      onInvalid={(e) => {
        e.preventDefault();
      }}
    >
      <Input
        id="chat"
        label="chat"
        type="text"
        value={input}
        onChange={onChange}
        isError={!!error}
        setError={onError}
        alertMessage=""
        required
        minLength={2}
        maxLength={30}
        onKeyDown={getChatLog}
      />
      <button type="submit">{error ? ERROR_MESSAGE[error] : '보내기'}</button>
    </S.Form>
  );
};

export default ChatInput;
