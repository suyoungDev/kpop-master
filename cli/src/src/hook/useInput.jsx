import { useState, useCallback } from 'react';

const useInput = (initalValue = null) => {
  const [input, setInput] = useState(initalValue);

  const handler = useCallback((event) => {
    const { value } = event.target;
    setInput(value);
  }, []);

  const resetInput = useCallback(() => setInput(initalValue), [initalValue]);

  return [input, handler, resetInput];
};

export default useInput;
