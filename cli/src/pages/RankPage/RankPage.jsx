import React, { useEffect, useState, useContext } from 'react';

import axios from 'axios';
import GameTitle from '../../components/GameTitle/GameTitle';
import Center from '../../components/Center/Center';
import Spinner from '../OutroPage/Section/Spinner/Spinner';
import RankingTable from './Section/RankingTable/RankingTable';
import CommentList from './Section/CommentList/CommentList';
import WriteComment from './Section/WriteComment/WriteComment';
import { CommentContext } from '../../context/CommentContext';
import { AuthContext } from '../../context/AuthContext';

const RankPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userRankList, setUserRankList] = useState();
  const [getCommentAll, commnetList, isCommentLoading] = useContext(
    CommentContext
  );
  const [isLoggedIn] = useContext(AuthContext);

  useEffect(() => {
    setIsLoading(true);

    axios.get('/api/game/getRecords').then((res) => {
      if (res.data.success) {
        setUserRankList(res.data.gameRecordList);
        setIsLoading(false);
      }
    });

    getCommentAll();
    // eslint-disable-next-line
  }, []);

  return (
    <Center center>
      <GameTitle center>Rank</GameTitle>
      {!userRankList && isLoading ? (
        <Spinner />
      ) : !userRankList && isLoading ? null : (
        <RankingTable userRecords={userRankList} />
      )}

      {!isLoggedIn ? null : <WriteComment />}

      {isCommentLoading ? (
        <Spinner />
      ) : (
        <CommentList commentListData={commnetList} />
      )}
    </Center>
  );
};

export default RankPage;
