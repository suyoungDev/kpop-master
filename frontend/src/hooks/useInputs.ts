import React, { useState, useCallback, ChangeEvent } from 'react';

const useInputs = <T = any>(
  initialValue: T[],
  resetValue: T,
): {
  inputs: T[];
  setInputs: React.Dispatch<React.SetStateAction<T[]>>;
  onChange: (idx: number) => (e: ChangeEvent<unknown>) => void;
  onReset: (index: number) => void;
} => {
  const [inputs, setInputs] = useState<T[]>(initialValue);

  const onChange = useCallback(
    (index: number) => (e: any) => {
      const temp = inputs.slice();
      const { value, name } = e.target;

      for (let i = 0; i < temp.length; i++) {
        if (i === index) temp[i] = { ...temp[i], [name]: value };
      }
      setInputs(temp);
    },
    [inputs],
  );

  const onReset = useCallback((index: number) => {
    const temp = inputs.slice();
    for (let i = 0; i < temp.length; i++) {
      if (i === index) temp[i] = resetValue;
    }
    setInputs(temp);
  }, []);

  return { inputs, onChange, onReset, setInputs };
};

export default useInputs;
