import { useState, useCallback } from 'react';

const useMultiInputs = (initalValue = null) => {
  const [input, setInput] = useState(initalValue);

  const handler = useCallback(
    (event) => {
      const { name, value } = event.target;
      setInput({
        ...input,
        [name]: value,
      });
    },
    [input]
  );

  const resetInput = useCallback(() => setInput(initalValue), [initalValue]);

  return [input, handler, resetInput];
};

export default useMultiInputs;
