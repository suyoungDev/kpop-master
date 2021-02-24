import React, { useEffect, useState } from 'react';

import axios from 'axios';
import GameTitle from '../../components/GameTitle/GameTitle';
import Center from '../../components/Center/Center';
import Spinner from '../OutroPage/Section/Spinner/Spinner';
import RankingTable from './Section/RankingTable/RankingTable';

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
      {isLoading ? <Spinner /> : <RankingTable userRecords={userRankList} />}
    </Center>
  );
};

export default RankPage;
