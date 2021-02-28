import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Accordion from '../Accordion/Accordion';
import RankersTable from '../RankersTable/RankersTable';
import RankersTableTitle from '../RankersTableTitle/RankersTableTitle';

const RankersRecord = ({ userRankList, myRecord }) => {
  const [currentUserName, setCurrentUserName] = useState('');
  const user = useSelector((state) => state.user);

  useEffect(() => {
    setCurrentUserName(user.userData.displayName);
  }, []);

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
