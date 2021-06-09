import React, { useState, useEffect, useContext } from 'react';
import { useSelector } from 'react-redux';

import { AuthContext } from '../../../../context/AuthContext';
import Accordion from '../../../../components/Accordion/Accordion';
import RankersTable from '../RankersTable/RankersTable';
import RankersTableTitle from '../RankersTableTitle/RankersTableTitle';

const RankersRecord = ({ userRankList, myRecord }) => {
  const [currentUserName, setCurrentUserName] = useState('내 기록');
  const user = useSelector((state) => state.user);
  const [isLoggedIn] = useContext(AuthContext);

  useEffect(() => {
    isLoggedIn && setCurrentUserName(user.userData.displayName);
  }, [isLoggedIn]);

  const title = (
    <RankersTableTitle myRecord={myRecord} userRankList={userRankList} />
  );

  const content = (
    <RankersTable
      userRankList={userRankList}
      myRecord={myRecord}
      userName={currentUserName}
      quantityToShow={3}
    />
  );

  return <Accordion title={title} content={content} />;
};

export default RankersRecord;
