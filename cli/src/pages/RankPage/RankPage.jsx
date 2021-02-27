import React, { useEffect, useState } from 'react';

import axios from 'axios';
import GameTitle from '../../components/GameTitle/GameTitle';
import Center from '../../components/Center/Center';
import Spinner from '../OutroPage/Section/Spinner/Spinner';
import RankingTable from './Section/RankingTable/RankingTable';
import CommentList from './Section/CommentList/CommentList';
import Comment from './Section/Comment/Comment';

const RankPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isCommentLoading, setIsCommentLoading] = useState(true);
  const [userRankList, setUserRankList] = useState();
  const [commentListData, setCommentListData] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    axios.get('/api/game/getRecords').then((res) => {
      if (res.data.success) {
        setUserRankList(res.data.gameRecordList);
        setIsLoading(false);
      }
    });

    getComments();
  }, []);

  const getComments = async () => {
    const response = await axios.get('/api/comment/getComments');
    setCommentListData(response.data.comments);
    setIsCommentLoading(false);
  };

  return (
    <Center>
      <GameTitle about>Rank</GameTitle>
      {isLoading ? (
        <Spinner />
      ) : !userRankList.length ? null : (
        <RankingTable userRecords={userRankList} />
      )}
      <Comment getComments={getComments} />
      {isCommentLoading ? (
        <Spinner />
      ) : (
        <CommentList
          commentListData={commentListData}
          getComments={getComments}
        />
      )}
    </Center>
  );
};

export default RankPage;
