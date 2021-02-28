import React, { useContext } from 'react';
import styled from 'styled-components';
import UserAverageData from '../UsersAverageData/UserAverageData';
import { TrackListToPlayContext } from '../../../../context/TrackListToPlayContext';
import { COLORS, FONT, SIZES } from '../../../../constants/theme';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TableContainer = styled.table`
  width: 100%;
  font-family: ${FONT.korean};
  font-size: 16px;
  font-weight: 200;
  overflow: hidden;
  padding: 0 0 1rem 0;

  td {
    padding: 6px;
    text-align: center;
  }

  .ranking {
    width: 12%;
    text-align: center;
  }
  .name {
    width: 40%;
  }
  .record {
    width: 15%;
    text-align: right;
  }

  .myRecord {
    color: ${COLORS.primaryThree};
    font-weight: bold;
  }

  .value {
    width: 14%;
    background-color: ${COLORS.lightSkyGray};
    color: ${COLORS.primaryThree};
    padding: 4px;
    border-radius: ${SIZES.radiusSmall};
    font-size: 13px;
  }
`;

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
                <td className='ranking'>{index + 1}위</td>
                <td className='name'>{userRecord.player}</td>
                {userRecord.theme === 'artist' ? (
                  <td className='value'>{userRecord.value}</td>
                ) : userRecord.theme === 'weekly' ? (
                  <td className='value'>이번주</td>
                ) : (
                  <td className='value'>{userRecord.value}'s</td>
                )}
                {userRecord.level === '10' ? (
                  <td className='value'>쉬움</td>
                ) : userRecord.level === '50' ? (
                  <td className='value'>보통</td>
                ) : (
                  <td className='value'>어려움</td>
                )}
                <td className='record'>{userRecord.record.toFixed(2)} 초</td>
              </tr>
            ))}

          {myRecord && (
            <>
              <tr>
                <td></td>
                <td></td>
                <td>...</td>
                <td></td>
                <td></td>
              </tr>

              <tr>
                <td className='myRecord'>
                  {userRankList
                    .map((user) => user.record.toFixed(2))
                    .filter((record) => record < myRecord).length + 1}
                  위
                </td>
                <td className='myRecord'>{userName}</td>
                {trackListToPlay.theme.theme === 'artist' ? (
                  <td className='myRecord value'>
                    {trackListToPlay.theme.value}
                  </td>
                ) : trackListToPlay.theme.theme === 'weekly' ? (
                  <td className='myRecord value'>이번주</td>
                ) : (
                  <td className='myRecord value'>
                    {trackListToPlay.theme.value}'s
                  </td>
                )}
                <td className='myRecord value'>
                  {trackListToPlay.theme.limit === '10'
                    ? '쉬움'
                    : trackListToPlay.theme.limit === '50'
                    ? '보통'
                    : '어려움'}
                </td>
                <td className='myRecord record'>{myRecord} 초</td>
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
