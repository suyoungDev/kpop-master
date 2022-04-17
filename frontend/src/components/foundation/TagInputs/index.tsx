import React, { useState, useCallback, useRef } from 'react';
import * as S from './styles';
import Tag from '@F/Tag';

export interface Props {
  tags: string[];
  setTags: React.Dispatch<React.SetStateAction<string[]>>;
}

const DIVIDING_KEYWORD = [',', 'Enter'];
const TagInputs = ({ tags, setTags }: Props): JSX.Element => {
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLInputElement | null>(null);

  const catchTags = useCallback(
    (e: React.KeyboardEvent<unknown>) => {
      const key = e.nativeEvent.code;

      if (e.nativeEvent.isComposing) return;
      if (DIVIDING_KEYWORD.includes(key)) {
        const lastTag = input.split(key).pop();
        if (!lastTag) return;
        const tagTemps = Array.from(new Set([...tags, lastTag]));
        setTags(tagTemps);
        setInput('');
      }
    },
    [input, tags],
  );

  const typingTag = useCallback((e) => {
    if (e.target.value === ',') return;
    if (e.nativeEvent.inputType === 'insertLineBreak') return;

    setInput(e.target.value);
  }, []);

  const deleteTag = useCallback((index: number) => {
    setTags((prev) => prev.filter((_, idx) => idx !== index));
  }, []);

  const focusOnInput = useCallback(() => {
    if (inputRef && inputRef.current) inputRef.current.focus();
  }, []);

  return (
    <S.Wrapper onClick={focusOnInput}>
      {tags.map((tag, idx) => (
        <Tag key={tag} label={tag} deleteTag={() => deleteTag(idx)} />
      ))}
      <S.Input value={input} onChange={typingTag} onKeyDown={catchTags} ref={inputRef} />
    </S.Wrapper>
  );
};

export default TagInputs;
