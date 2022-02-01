import React, { useState, useCallback, ChangeEvent } from 'react';

const useInput = <T = string>(
  initialValue: T,
  resetValue?: T,
): {
  input: T;
  onChange: (e: ChangeEvent<unknown>) => void;
  onReset: () => void;
  setInput: React.Dispatch<React.SetStateAction<T>>;
} => {
  const [input, setInput] = useState<T>(initialValue);

  const onChange = useCallback((e) => {
    setInput(e.target.value);
  }, []);

  const onReset = useCallback(() => {
    if (resetValue !== undefined) setInput(resetValue);
    else setInput(initialValue);
  }, []);

  return { input, onChange, onReset, setInput };
};

export default useInput;
