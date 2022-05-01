import React from 'react';

export type Props = {
  id: string;
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = ({ id, label, ...props }: Props): JSX.Element => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input type="text" id={id} name={id} {...props} />
    </div>
  );
};

export default Input;
