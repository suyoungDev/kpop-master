import React, { useEffect, useCallback, useState } from 'react';
import useInput from '@HOOK/useInput';
import * as S from './styles';
import ChangeTitle from './section/ChangeTitle';
import TitleModule from './section/TitleModule';

export interface Props {
  //...
}

const TitleInput = ({}: Props): JSX.Element => {
  const [isChangingTitle, setIsChangingTitle] = useState(false);
  const { input: title, setInput: setTitle, onChange } = useInput('플레이리스트 이름');

  const cancelSubmit = useCallback(() => {
    setIsChangingTitle(false);
  }, []);

  const submitTitle = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      setTitle(title);
      setIsChangingTitle(false);
    },
    [title],
  );

  const EscapeInput = useCallback(
    (e) => {
      if (e.key === 'Escape' && isChangingTitle) {
        setIsChangingTitle(false);
      }
    },
    [isChangingTitle],
  );

  const changeTitle = useCallback(() => {
    setIsChangingTitle(true);
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', EscapeInput);
    return () => document.removeEventListener('keydown', EscapeInput);
  }, [EscapeInput]);

  return (
    <S.Wrapper>
      {isChangingTitle ? (
        <ChangeTitle
          title={title}
          onChangeTitle={onChange}
          onCancel={cancelSubmit}
          onSubmit={submitTitle}
          placeholder="플레이리스트 이름"
        />
      ) : (
        <TitleModule title={title} onClick={changeTitle} changeTitle={changeTitle} />
      )}
    </S.Wrapper>
  );
};

export default TitleInput;
