import React from 'react';
import moment from 'moment';
import { BsDot } from 'react-icons/bs';

import { RowBox, When, Writer } from './SingleComment.styles';

const WriterInfoContainer = ({ wirterName, createdAt }) => {
  return (
    <RowBox start='true'>
      <Writer>{wirterName}</Writer>
      <BsDot size='0.7rem' />
      <When>{moment(createdAt).locale('ko').fromNow()}</When>
    </RowBox>
  );
};

export default WriterInfoContainer;
