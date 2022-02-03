import React, { useState, useCallback } from 'react';
import * as S from './styles';
import Tag from '@F/Tag';

export interface Props {
  //...
}

const DIVIDING_KEYWORD = [',', 'Enter'];
const TagInputs = ({}: Props): JSX.Element => {
  const [tags, setTags] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const catchTags = useCallback(
    (e: React.KeyboardEvent<unknown>) => {
      const key = e.key;
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

  return (
    <S.Wrapper>
      {tags.map((tag, idx) => (
        <Tag key={tag} label={tag} deleteTag={() => deleteTag(idx)} />
      ))}
      <S.Input value={input} onChange={typingTag} onKeyDown={catchTags} autoFocus />
    </S.Wrapper>
  );
};

export default TagInputs;
