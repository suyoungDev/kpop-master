import React, { useState, useEffect } from 'react';

import Accordion from '../Accordion/Accordion';
import RankersTable from '../RankersTable/RankersTable';
import RankersTableTitle from '../RankersTableTitle/RankersTableTitle';

const RankersRecord = ({ userRankList, myRecord }) => {
  const [existingUserName, setexistingUserName] = useState();

  useEffect(() => {
    const userName = localStorage.getItem('_userName');
    setexistingUserName(userName);
  }, []);

  const title = (
    <RankersTableTitle myRecord={myRecord} userRankList={userRankList} />
  );

  const content = (
    <RankersTable
      userRecords={userRankList}
      myRecord={myRecord}
      userName={existingUserName}
      quantityToShow={3}
    />
  );

  return <Accordion title={title} content={content} />;
};

export default RankersRecord;
