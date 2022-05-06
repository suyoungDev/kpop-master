import React, { ChangeEvent, useCallback, useState } from 'react';

const useInput = (
  initialValue: string,
  resetValue?: string
): [string, (e: ChangeEvent<HTMLInputElement>) => void, () => void] => {
  const [input, setInput] = useState<string>(initialValue);

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  }, []);

  const onReset = useCallback(() => {
    if (resetValue !== undefined) setInput(resetValue);
    else setInput(initialValue);
  }, [initialValue, resetValue]);

  return [input, onChange, onReset];
};

export default useInput;
