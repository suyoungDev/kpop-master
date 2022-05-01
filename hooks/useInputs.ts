import React, { useState, useCallback, ChangeEvent } from 'react';

type Output<T> = {
  inputs: T[];
  setInputs: React.Dispatch<React.SetStateAction<T[]>>;
  onChange: (idx: number) => (e: ChangeEvent<unknown>) => void;
  onReset: (index: number) => void;
};

const useInputs = <T = any>(initialValue: T[], resetValue: T): Output<T> => {
  const [inputs, setInputs] = useState<T[]>(initialValue);

  const onChange = useCallback(
    (index: number) => (event: any) => {
      const { value, name } = event.target;

      setInputs(prev => {
        return [...prev].map((item, idx) => {
          if (idx === index) return { ...item, [name]: value };
          return item;
        });
      });
    },
    []
  );

  const onReset = useCallback(
    (index: number) => {
      setInputs(prev => {
        return [...prev].map((item, idx) => {
          if (idx === index) return (item = resetValue);
          return item;
        });
      });
    },
    [resetValue]
  );

  return { inputs, onChange, onReset, setInputs };
};

export default useInputs;
