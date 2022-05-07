import React, {
  ChangeEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import Tag from '@F/Tag';
import * as S from './styles';

export type Props = {
  tags: string[];
  setTags: React.Dispatch<React.SetStateAction<string[]>>;
};

const DIVIDING_KEYWORD = ['Comma', 'Enter'];
const ARROW = ['ArrowUp', 'ArrowDown'];

const TagInputs = ({ tags, setTags }: Props): JSX.Element => {
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLInputElement | null>(null);
  const focusIndex = useRef(0);

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
        focusIndex.current = tagTemps.length;
        return;
      }

      if (ARROW.includes(key)) {
        const [minIndex, maxIndex] = [0, tags.length - 1];

        switch (key) {
          case 'ArrowUp':
            if (focusIndex.current > minIndex) focusIndex.current--;
            break;
          case 'ArrowDown':
            if (focusIndex.current < maxIndex) focusIndex.current++;
            break;
          default:
            break;
        }
        setInput([...tags][focusIndex.current] ?? '');
      }
    },
    [input, setTags, tags]
  );

  const typingTag = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === ',') return;

    setInput(e.target.value);
  }, []);

  const deleteTag = useCallback(
    (index: number) => {
      setTags((prev) => prev.filter((_, idx) => idx !== index));
      focusIndex.current--;
    },
    [setTags]
  );

  const focusOnInput = useCallback(() => {
    if (inputRef && inputRef.current) inputRef.current.focus();
  }, []);

  useEffect(() => {
    if (inputRef && inputRef.current) inputRef.current.focus();
  }, []);

  return (
    <S.Wrapper onClick={focusOnInput}>
      <div role="region">
        {tags.map((tag, idx) => (
          <Tag key={tag} label={tag} deleteTag={() => deleteTag(idx)} />
        ))}
      </div>
      <S.Input
        value={input}
        onChange={typingTag}
        onKeyDown={catchTags}
        ref={inputRef}
      />
    </S.Wrapper>
  );
};

export default TagInputs;
