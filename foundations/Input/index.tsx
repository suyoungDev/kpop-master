import React from 'react';

export type Props = {
  alertMessage: string;
  setError: () => void;
} & PlaylistInputFields &
  React.InputHTMLAttributes<HTMLInputElement>;

const Input = ({
  isError,
  label,
  setError,
  alertMessage,
  ...props
}: Props): JSX.Element => {
  return (
    <>
      <label htmlFor={props.id}>{label}</label>
      <input onInvalid={setError} {...props} />
      {isError && <span role="alert">{alertMessage}</span>}
    </>
  );
};

export default Input;
