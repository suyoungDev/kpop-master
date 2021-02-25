import { useState, useCallback } from 'react';

export default (initalValue = null) => {
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
