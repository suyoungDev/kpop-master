import React from 'react';
import axios from 'axios';
import moment from 'moment';

import { CgClose } from 'react-icons/cg';
import {
  RowBox,
  Writer,
  When,
  Content,
  SeeMore,
  ReplyContainer,
} from '../SingleComment/SingleComment.styles';

const ReplyComment = ({ data, currentUser }) => {
  const deleteComment = async () => {
    const deleteOne = {
      item: data._id,
      user: currentUser,
      writer: data.writer._id,
    };
    await axios.post('/api/comment/delete', deleteOne);
  };
  return (
    <ReplyContainer column>
      <RowBox>
        <RowBox start='true'>
          <Writer>{data.writer.displayName}</Writer>
          <When>{moment(data.createdAt).locale('ko').fromNow()}</When>
        </RowBox>
        {data.writer._id === currentUser && (
          <SeeMore onClick={deleteComment}>
            <CgClose />
          </SeeMore>
        )}
      </RowBox>
      <RowBox>
        <Content>{data.content}</Content>
      </RowBox>
    </ReplyContainer>
  );
};

export default ReplyComment;
