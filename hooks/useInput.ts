import { useState, ChangeEvent, useCallback } from 'react';

const useInput = <T = string>(
  initialValue: T,
  resetValue?: T
): [T, (e: ChangeEvent<unknown>) => void, () => void] => {
  const [input, setInput] = useState<T>(initialValue);

  const onChange = useCallback(e => {
    setInput(e.target.value);
  }, []);

  const onReset = useCallback(() => {
    if (resetValue !== undefined) setInput(resetValue);
    else setInput(initialValue);
  }, [initialValue, resetValue]);

  return [input, onChange, onReset];
};

export default useInput;
