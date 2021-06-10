import React, { useEffect, useState, useContext, useCallback } from 'react';
import axios from 'axios';

import GameTitle from '../../components/GameTitle/GameTitle';
import Center from '../../components/Center/Center';

import RankingTableContainer from './Section/RankingTable/RankingTableContainer';
import CommentListContainer from './Section/CommentList/CommentListContainer';
import WriteCommentContainer from './Section/WriteComment/WriteCommentContainer';

import { CommentContext } from '../../context/CommentContext';

const RankPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userRankList, setUserRankList] = useState();
  const [getCommentAll, commnetList, isCommentLoading] =
    useContext(CommentContext);

  useEffect(() => {
    fetchGameRecords();
    getCommentAll();
  }, []);

  const fetchGameRecords = useCallback(async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get('/api/game/getRecords');
      if (data.success) {
        setUserRankList(data.gameRecordList);
        setIsLoading(false);
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <Center>
      <GameTitle center>Rank</GameTitle>
      <RankingTableContainer
        isLoading={isLoading}
        userRankList={userRankList}
      />
      <WriteCommentContainer />
      <CommentListContainer
        commnetList={commnetList}
        isCommentLoading={isCommentLoading}
      />
    </Center>
  );
};

export default RankPage;
