import React, { useRef } from 'react';

export type Props = {
  alertMessage: string;
  setError: (validity: InputError) => void;
} & ValidateInput<string, string> &
  React.InputHTMLAttributes<HTMLInputElement>;

const Input = ({
  label,
  isError,
  setError,
  alertMessage,
  ...props
}: Props): JSX.Element => {
  const input = useRef<HTMLInputElement>(null);
  return (
    <>
      <label htmlFor={props.id}>{label}</label>
      <input
        onInvalid={() => {
          setError(input.current?.validity as InputError);
        }}
        {...props}
        ref={input}
      />
      {isError && <span role="alert">{alertMessage}</span>}
    </>
  );
};

export default React.memo(Input);
