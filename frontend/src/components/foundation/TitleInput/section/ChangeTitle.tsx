import React from 'react';
import styled from '@emotion/styled';
import Button from '@F/Button';
import { row } from '@/style';

interface Props {
  title: string;
  placeholder: string;
  onChangeTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onCancel: () => void;
  onSubmit: (e: React.FormEvent) => void;
}

const ChangeTitle = ({ title, onChangeTitle, onCancel, onSubmit, placeholder }: Props) => {
  return (
    <Form onSubmit={onSubmit}>
      <input value={title} onChange={onChangeTitle} placeholder={placeholder} required autoFocus />
      <Button label="저장" type="submit" />
      <Button label="취소" type="reset" onClick={onCancel} />
    </Form>
  );
};

export default ChangeTitle;

const Form = styled.form`
  ${row}
`;
