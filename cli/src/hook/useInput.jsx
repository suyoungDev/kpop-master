import { useState, useCallback } from 'react';

export default (initalValue = null) => {
  const [input, setInput] = useState(initalValue);

  const handler = useCallback(
    (e) => {
      const { value } = e.target;
      setInput(value);
    },
    [input]
  );
  return [input, handler];
};
