import React, { useState, useCallback } from 'react';
import ChattingTextArea from '@F/ChattingTextArea';
import RANDOM_LABEL from '@DATA/chat/randomButtonLabel';
import * as S from './styles';
import useInput from '@HOOK/useInput';

// TODO: chatList props 설정 & api
export interface Props {
  // ...
}

const ChatRoom = ({}: Props): JSX.Element => {
  const { input, onChange, onReset } = useInput('');
  const [buttonLabelIndex, setButtonLabelIndex] = useState(0);

  const sendingMessage = useCallback(() => {
    // TODO: api 보내기
    onReset();
  }, []);

  const generateRandomLabelIndex = useCallback(() => {
    const length = RANDOM_LABEL.length;
    const randomNumber = Math.floor(Math.random() * length);
    setButtonLabelIndex((prev) =>
      prev === randomNumber
        ? randomNumber + 1 <= length
          ? randomNumber + 1
          : randomNumber - 1
        : randomNumber,
    );
  }, []);

  return (
    <>
      {/* chatList 작성 */}

      <S.Form
        onSubmit={(e) => {
          e.preventDefault();
          sendingMessage();
          generateRandomLabelIndex();
        }}
      >
        <ChattingTextArea message={input} onChange={onChange} />
        <button type="submit">{RANDOM_LABEL[buttonLabelIndex]}</button>
      </S.Form>
    </>
  );
};

export default ChatRoom;
