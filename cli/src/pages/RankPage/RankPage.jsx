import React, { useEffect, useState } from 'react';

import axios from 'axios';
import GameTitle from '../../components/GameTitle/GameTitle';
import Center from '../../components/Center/Center';
import Spinner from '../OutroPage/Section/Spinner/Spinner';
import RankingTable from './Section/RankingTable/RankingTable';
import Comment from './Section/Comment/Comment';

const RankPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userRankList, setUserRankList] = useState();

  useEffect(() => {
    setIsLoading(true);

    axios.get('/api/game/getRecords').then((res) => {
      if (res.data.success) {
        setUserRankList(res.data.gameRecordList);
        setIsLoading(false);
      }
    });
  }, []);

  return (
    <Center>
      <GameTitle about>Rank</GameTitle>
      {isLoading ? (
        <Spinner />
      ) : !userRankList.length ? null : (
        <RankingTable userRecords={userRankList} />
      )}
      <Comment />
    </Center>
  );
};

export default RankPage;
