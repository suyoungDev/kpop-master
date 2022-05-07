import React, { useCallback, useState } from 'react';
import { useRecoilState } from 'recoil';
import useInput from '@hooks/useInput';
import titleStore from '@atom/create/title';
import * as S from './styles';

const PageTitle = (): JSX.Element => {
  const [title, setTitle] = useRecoilState(titleStore);
  const [isFixing, setIsFixing] = useState(false);
  const { input: text, setInput: setText, onChange } = useInput('');

  const confirmTitle = useCallback(() => {
    setTitle(text);
    setIsFixing(false);
  }, [setTitle, text]);

  return (
    <S.Wrapper>
      {isFixing ? (
        <form
          name="플레이리스트 이름"
          onSubmit={(e) => {
            e.preventDefault();
            confirmTitle();
          }}
          onReset={(e) => {
            e.preventDefault();
            setIsFixing(false);
          }}
        >
          <input
            type="text"
            value={text}
            onChange={onChange}
            placeholder="플레이리스트 이름"
          />
          <button type="submit">완료</button>
          <button type="reset">취소</button>
        </form>
      ) : (
        <>
          <h1>{title}</h1>
          <button onClick={() => setIsFixing(true)}>수정</button>
        </>
      )}
    </S.Wrapper>
  );
};

export default PageTitle;
