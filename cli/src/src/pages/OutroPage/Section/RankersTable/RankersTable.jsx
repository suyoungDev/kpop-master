import React, { useContext } from 'react';

import UserAverageData from '../UsersAverageData/UserAverageData';
import { TrackListToPlayContext } from '../../../../context/TrackListToPlayContext';

import { TableContainer, Wrapper } from './RankersTable.styles';

const RankersTable = ({ userRankList, myRecord, userName, quantityToShow }) => {
  const [trackListToPlay] = useContext(TrackListToPlayContext);

  return (
    <Wrapper>
      <TableContainer>
        <tbody>
          {userRankList
            .filter((userRecord, index) => index < `${quantityToShow}`)
            .map((userRecord, index) => (
              <tr key={userRecord.docId}>
                <td className='ranking'>{index + 1}</td>
                <td className='name'>{userRecord.player}</td>
                {userRecord.theme === 'artist' ? (
                  <td className='value'>{userRecord.value}</td>
                ) : userRecord.theme === 'weekly' ? (
                  <td className='value weekly'>이번주</td>
                ) : (
                  <td className='value'>{userRecord.value}'s</td>
                )}
                {userRecord.level === '10' ? (
                  <td className='value easy'>쉬움</td>
                ) : userRecord.level === '50' ? (
                  <td className='value'>보통</td>
                ) : (
                  <td className='value hard'>어려움</td>
                )}
                <td className='record'>{userRecord.record.toFixed(2)}</td>
              </tr>
            ))}

          {myRecord && (
            <>
              <tr>
                <td></td>
                <td>...</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>

              <tr>
                <td className='myRecord'>
                  {userRankList
                    .map((user) => user.record)
                    .filter((record) => record <= myRecord).length + 1}
                </td>
                <td className='myRecord'>{userName}</td>
                {trackListToPlay.theme.theme === 'artist' ? (
                  <td className='myRecord value'>
                    {trackListToPlay.theme.value}
                  </td>
                ) : trackListToPlay.theme.theme === 'weekly' ? (
                  <td className='myRecord value weekly'>이번주</td>
                ) : (
                  <td className='myRecord value'>
                    {trackListToPlay.theme.value}'s
                  </td>
                )}

                {trackListToPlay.theme.limit === '10' ? (
                  <td className='myRecord value easy'>쉬움</td>
                ) : trackListToPlay.theme.limit === '50' ? (
                  <td className='myRecord value'>보통</td>
                ) : (
                  <td className='myRecord value hard'>어려움</td>
                )}

                <td className='myRecord record'>{myRecord}</td>
              </tr>
            </>
          )}
        </tbody>
      </TableContainer>

      <UserAverageData userRecords={userRankList} />
    </Wrapper>
  );
};

export default RankersTable;
