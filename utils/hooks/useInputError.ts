import { useCallback, useState } from 'react';

const useInputError = () => {
  const [error, setError] = useState<keyof InputError | null>(null);

  const onError = useCallback((validity: InputError) => {
    const validateFailKey =
      (Object.entries(validity) as Entries<InputError>)
        .filter(([key, value]) => value)
        .map(([key]) => key)
        .pop() ?? null;

    setError(validateFailKey);
  }, []);

  return { error, setError, onError };
};

export default useInputError;
