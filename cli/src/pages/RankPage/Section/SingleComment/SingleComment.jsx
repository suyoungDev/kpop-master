import React, { useState, useContext } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import moment from 'moment';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import { CgClose } from 'react-icons/cg';

import { CommentContext } from '../../../../context/CommentContext';

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

const SingleComment = ({ content, writer, createdAt, toWhat }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOkayToShowMoreReplies, setIsOkayToShowMoreReplies] = useState(false);
  const [inputValue, onChange, resetInput] = useInput('');
  const user = useSelector((state) => state.user);
  const [getCommentAll, commnetList] = useContext(CommentContext);

  const submit = async (e) => {
    e.preventDefault();

    const variables = {
      content: inputValue,
      writer: user.userData._id,
      toWhom: toWhat,
    };

    await axios.post('/api/comment/saveComment', variables);
    getCommentAll();

    resetInput();
    setIsOpen(!isOpen);
    console.log(commnetList);
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
      item: toWhat,
      user: user.userData._id,
      writer: writer._id,
    };
    await axios.post('/api/comment/delete', deleteOne);
    getCommentAll();
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
            <ReplyButton onClick={accordian}>답글쓰기</ReplyButton>
            {commnetList.filter((item) => item.toWhom === toWhat).length ? (
              isOkayToShowMoreReplies ? (
                <SeeMore onClick={showMoreReplies}>
                  <BiChevronUp className='icon' />
                  답글 숨기기
                </SeeMore>
              ) : (
                <SeeMore onClick={showMoreReplies}>
                  <BiChevronDown className='icon' />
                  답글{' '}
                  {commnetList.filter((item) => item.toWhom === toWhat).length}
                  개 더 보기
                </SeeMore>
              )
            ) : null}
          </RowBox>
        </ColumnWrapper>
      </RowContainer>

      {isOkayToShowMoreReplies && (
        <ReplyCommentList parrentId={toWhat} currentUser={user.userData._id} />
      )}

      {isOpen && (
        <ReplyContainer reply>
          <Form reply onSubmit={submit}>
            <CommentBox
              value={inputValue}
              onChange={onChange}
              placeholder='답글 추가...'
              required
              reply
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
