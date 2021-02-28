import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

import { BsChevronUp, BsChevronDown } from 'react-icons/bs';
import { ColumnWrapper, Likes } from './../SingleComment/SingleComment.styles';
import styled from 'styled-components';
import { COLORS } from '../../../../constants/theme';

const UpDownButton = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  color: ${COLORS.shadowDark};
  cursor: pointer;

  :hover {
    color: ${COLORS.primaryTwo};
  }

  &.selected {
    color: ${COLORS.primaryTwo};
  }
`;

const Heart = ({ toWhat }) => {
  const [isLike, setIsLike] = useState(null);
  const [isDislike, setIsDislike] = useState(null);

  const [numberOfLikes, setNumberOfLikes] = useState(0);
  const [numberOfDislikes, setNumberOfDislikes] = useState(0);

  const user = useSelector((state) => state.user);
  const [variables] = useState({
    fromWhom: user.userData._id,
    toWhat: toWhat,
  });

  useEffect(
    () => {
      axios.post('/api/heart/getLike', variables).then((res) => {
        if (res.data.success) {
          setNumberOfLikes(res.data.likes.length);
          // eslint-disable-next-line
          res.data.likes.map((like) => {
            like.fromWhom === variables.fromWhom && setIsLike('yes');
          });
        }
      });

      axios.post('/api/heart/getDislike', variables).then((res) => {
        if (res.data.success) {
          setNumberOfDislikes(res.data.dislikes.length);
          // eslint-disable-next-line
          res.data.dislikes.map((dislike) => {
            dislike.fromWhom === variables.fromWhom && setIsDislike('yes');
          });
        }
      });
    },
    // eslint-disable-next-line
    [isLike, isDislike]
  );

  const goLike = async () => {
    if (isLike === null) {
      await axios.post('/api/heart/upLike', variables);
      setIsLike('yes');

      if (isDislike !== null) {
        setIsDislike(null);
      }
    } else {
      await axios.post('/api/heart/DownLike', variables);
      setIsLike(null);
    }
  };

  const goDislike = async () => {
    if (isDislike === null) {
      await axios.post('/api/heart/upDislike', variables);
      setIsDislike('yes');

      if (isLike !== null) {
        setIsLike(null);
      }
    } else {
      await axios.post('/api/heart/downDislike', variables);
      setIsDislike(null);
    }
  };

  return (
    <ColumnWrapper likes>
      {!user.userData.isAuth ? null : (
        <UpDownButton
          onClick={goLike}
          className={`${isLike === 'yes' && 'selected'}`}
        >
          <BsChevronUp size='1.1rem' />
        </UpDownButton>
      )}
      <Likes>{numberOfLikes - numberOfDislikes}</Likes>

      {!user.userData.isAuth ? null : (
        <UpDownButton
          onClick={goDislike}
          className={`${isDislike === 'yes' && 'selected'}`}
        >
          <BsChevronDown size='1.1rem' />
        </UpDownButton>
      )}
    </ColumnWrapper>
  );
};

export default Heart;
