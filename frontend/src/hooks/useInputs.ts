import React, { useState, useCallback, ChangeEvent } from 'react';

const useInputs = <T = string>(
  initialValue: T,
  resetValue?: T
): [T, (e: ChangeEvent<unknown>) => void, () => void] => {
  const [inputs, setInputs] = useState<T>(initialValue);

  const onChange = useCallback((e) => {
    const { value, name } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  }, []);

  const onReset = useCallback(() => {
    if (resetValue !== undefined) setInputs(resetValue);
    else setInputs(initialValue);
  }, []);

  return [inputs, onChange, onReset];
};

export default useInputs;
