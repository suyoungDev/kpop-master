import React, { ChangeEvent, useCallback, useState } from 'react';

export type Output<T> = {
  inputs: T[];
  setInputs: React.Dispatch<React.SetStateAction<T[]>>;
  onChange: (idx: number) => (e: ChangeEvent<HTMLInputElement>) => void;
  onReset: (index: number) => void;
  deleteInput: (idx: number) => void;
  resetAll: () => void;
};

const useInputs = <T = any>(initialValue: T[], resetValue: T): Output<T> => {
  const [inputs, setInputs] = useState<T[]>(initialValue);

  const onChange = useCallback(
    (index: number) => (event: ChangeEvent<HTMLInputElement>) => {
      const { value, name } = event.target;

      setInputs((prev) => {
        return [...prev].map((item, idx) => {
          if (idx === index) return { ...item, [name]: value };
          return item;
        });
      });
    },
    []
  );

  const deleteInput = useCallback((idx: number) => {
    setInputs((prev) => [...prev].filter((input, index) => index !== idx));
  }, []);

  const onReset = useCallback(
    (index: number) => {
      setInputs((prev) => {
        return [...prev].map((item, idx) => {
          if (idx === index) return (item = resetValue);
          return item;
        });
      });
    },
    [resetValue]
  );

  const resetAll = useCallback(() => {
    setInputs(initialValue);
  }, [initialValue]);

  return { inputs, onChange, onReset, setInputs, deleteInput, resetAll };
};

export default useInputs;
