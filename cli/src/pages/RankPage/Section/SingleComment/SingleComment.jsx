import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import moment from 'moment';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import { CgClose } from 'react-icons/cg';

import useInput from '../../../../hook/useInput';
import { Form, Button, CommentBox } from '../WriteComment/WriteComment.styles';
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
  ReplyContainer,
  CommentWrapper,
  Column,
} from './SingleComment.styles';
import ReplyCommentList from '../ReplyCommentList/ReplyCommentList';

const SingleComment = ({
  content,
  writer,
  createdAt,
  toWhom,
  getComments,
  commentListData,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOkayToShowMoreReplies, setIsOkayToShowMoreReplies] = useState(false);
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
    setIsOpen(!isOpen);
  };

  const cancelToReply = () => {
    resetInput();
    setIsOpen(!isOpen);
  };

  const accordian = () => {
    setIsOpen(!isOpen);
  };

  const deleteComment = async () => {
    const deleteOne = {
      item: toWhom,
      user: user.userData._id,
      writer: writer._id,
    };
    await axios.post('/api/comment/delete', deleteOne);
  };

  const showMoreReplies = () => {
    setIsOkayToShowMoreReplies(!isOkayToShowMoreReplies);
  };

  return (
    <CommentWrapper>
      <RowContainer>
        <ColumnWrapper likes>
          <FiChevronUp />
          <Likes>0</Likes>
          <FiChevronDown />
        </ColumnWrapper>
        <ColumnWrapper>
          <RowBox>
            <RowBox start='true'>
              <Writer>{writer.displayName}</Writer>
              <When>{moment(createdAt).locale('ko').fromNow()}</When>
            </RowBox>
            {user.userData._id === writer._id && (
              <SeeMore onClick={deleteComment}>
                <CgClose />
              </SeeMore>
            )}
          </RowBox>
          <RowBox>
            <Content>{content}</Content>
          </RowBox>
          <RowBox>
            {isOkayToShowMoreReplies ? (
              <SeeMore onClick={showMoreReplies}>
                <BiChevronUp className='icon' />
                답글 숨기기
              </SeeMore>
            ) : (
              <SeeMore onClick={showMoreReplies}>
                <BiChevronDown className='icon' />
                답글 더 보기
              </SeeMore>
            )}

            <ReplyButton onClick={accordian}>답글쓰기</ReplyButton>
          </RowBox>
        </ColumnWrapper>
      </RowContainer>

      {isOkayToShowMoreReplies && (
        <ReplyCommentList
          parrentId={toWhom}
          commentListData={commentListData}
          currentUser={user.userData._id}
        />
      )}

      {isOpen && (
        <ReplyContainer>
          <Form onSubmit={submit}>
            <CommentBox
              value={inputValue}
              onChange={onChange}
              placeholder='답글 추가...'
              required
            />
            <Column>
              <Button as='div' cancel onClick={cancelToReply} reply>
                취소
              </Button>
              <Button type='submit' reply>
                답글
              </Button>
            </Column>
          </Form>
        </ReplyContainer>
      )}
    </CommentWrapper>
  );
};

export default SingleComment;
