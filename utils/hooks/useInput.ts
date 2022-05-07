import React, { ChangeEvent, useCallback, useState } from 'react';

type Output = {
  input: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onReset: () => void;
  setInput: React.Dispatch<React.SetStateAction<string>>;
};

const useInput = (initialValue: string, resetValue?: string): Output => {
  const [input, setInput] = useState<string>(initialValue);

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  }, []);

  const onReset = useCallback(() => {
    if (resetValue !== undefined) setInput(resetValue);
    else setInput(initialValue);
  }, [initialValue, resetValue]);

  return { input, onChange, onReset, setInput };
};

export default useInput;
