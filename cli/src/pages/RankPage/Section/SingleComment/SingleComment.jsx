import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import moment from 'moment';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';
import { BiChevronDown } from 'react-icons/bi';

import useInput from '../../../../hook/useInput';
import { Form, Button, CommentBox } from '../Comment/Comment.styles';
import {
  ColumnWrapper,
  ReplyButton,
  Writer,
  Content,
  RowBox,
  When,
  RowContainer,
  Likes,
  SeeMore,
} from './SingleComment.styles';

const SingleComment = ({ content, writer, createdAt, toWhom, getComments }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, onChange, resetInput] = useInput('');
  const user = useSelector((state) => state.user);

  const submit = async (e) => {
    e.preventDefault();

    const variables = {
      content: inputValue,
      writer: user.userData._id,
      toWhom: toWhom,
    };

    const response = await axios.post('/api/comment/saveComment', variables);
    console.log(response.data);
    resetInput();
    getComments();
  };

  const cancelToReply = () => {
    resetInput();
    setIsOpen(!isOpen);
  };

  const accordian = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <RowContainer>
        <ColumnWrapper likes>
          <FiChevronUp />
          <Likes>0</Likes>
          <FiChevronDown />
        </ColumnWrapper>
        <ColumnWrapper>
          <RowBox start='true'>
            <Writer>{writer.displayName}</Writer>
            <When>{moment(createdAt).locale('ko').fromNow()}</When>
          </RowBox>
          <RowBox>
            <Content>{content}</Content>
          </RowBox>
          <RowBox>
            <SeeMore>
              <BiChevronDown className='icon' />
              댓글 더 보기
            </SeeMore>
            <ReplyButton onClick={accordian}>답글</ReplyButton>
          </RowBox>
        </ColumnWrapper>
      </RowContainer>

      {isOpen && (
        <div>
          <Form onSubmit={submit}>
            <CommentBox
              value={inputValue}
              onChange={onChange}
              placeholder='답글 추가...'
              required
            />
            <Button as='div' cancel onClick={cancelToReply}>
              취소
            </Button>
            <Button type='submit'>답글</Button>
          </Form>
        </div>
      )}
    </div>
  );
};

export default SingleComment;
