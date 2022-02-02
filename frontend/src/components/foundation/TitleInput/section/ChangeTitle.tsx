import React from 'react';
import styled from '@emotion/styled';
import Button from '@F/Button';
import { row } from '@/style';
import Input from '@F/Input';

interface Props {
  title: string;
  placeholder: string;
  onChangeTitle: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void;
  onCancel: () => void;
  onSubmit: (e: React.FormEvent) => void;
}

const ChangeTitle = ({ title, onChangeTitle, onCancel, onSubmit, placeholder }: Props) => {
  return (
    <Form onSubmit={onSubmit}>
      <Input
        value={title}
        onChange={onChangeTitle}
        placeholder={placeholder}
        variant="underLine"
        required
        autoFocus
      />
      <Button label="저장" type="submit" />
      <Button label="취소" type="reset" onClick={onCancel} />
    </Form>
  );
};

export default ChangeTitle;

const Form = styled.form`
  ${row};
  align-items: center;
  justify-content: space-between;
  width: 100%;
  input {
    font-size: 1.125rem;
    margin-right: 2rem;
  }
  button {
    &:not(:last-of-type) {
      margin-right: 0.4rem;
    }
  }
`;
