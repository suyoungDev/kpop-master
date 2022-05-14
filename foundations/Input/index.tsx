import React from 'react';

export type Props = {
  alertMessage: string;
  setError: () => void;
} & Omit<TrackInputField, 'id'> &
  React.InputHTMLAttributes<HTMLInputElement>;

const Input = ({
  label,
  isError,
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

export default React.memo(Input);
