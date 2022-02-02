import React from 'react';
import styled from '@emotion/styled';
import Button from '@F/Button';
import { row, transition } from '@/style';

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
      <TitleInput value={title} onChange={onChangeTitle} placeholder={placeholder} required autoFocus />
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

  button {
    &:not(:last-of-type) {
      margin-right: 0.4rem;
    }
  }
`;

const TitleInput = styled.input`
  border: none;
  outline: none;
  border-bottom: 2px solid ${({ theme }) => theme.ink.lighter};
  ${transition}
  transition-property: border;

  margin-right: 2rem;
  width: 100%;
  padding: 0.72rem 1.25rem;
  color: ${({ theme }) => theme.ink.default};
  font-size: 1.125rem;

  &:focus {
    border-color: ${({ theme }) => theme.primary.default};
    color: ${({ theme }) => theme.ink.dark};
  }
`;
