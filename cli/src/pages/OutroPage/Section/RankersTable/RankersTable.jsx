import React, { useContext } from 'react';
import styled from 'styled-components';

import UserAverageData from '../UsersAverageData/UserAverageData';

import { TrackListToPlayContext } from '../../../../context/TrackListToPlayContext';
import { COLORS, FONT, SCREEN, SIZES } from '../../../../constants/theme';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TableContainer = styled.table`
  width: 100%;
  font-family: ${FONT.korean};
  font-weight: 200;
  overflow: hidden;
  padding: 0 0 0.8rem 0;
  border-bottom: 1px solid ${COLORS.lightSkyGray};

  td {
    padding: 6px;
    text-align: center;
    font-size: 14px;
  }

  .ranking {
    width: 7%;
    text-align: center;
    color: ${COLORS.contentGray};
  }
  .name {
    width: 40%;
    color: ${COLORS.contentGray};
  }
  .record {
    width: 20%;
    text-align: right;
    font-size: 13px;
    color: ${COLORS.headingDarkGray};
  }

  .myRecord {
    color: ${COLORS.primaryThree};
    font-weight: bold;
  }

  .value {
    width: 16%;
    background-color: ${COLORS.lightSkyGray};
    color: ${COLORS.primaryThree};
    padding: 0 4px;
    border-radius: ${SIZES.radiusSmall};
    font-size: 11px;
  }

  @media ${SCREEN.tablet} {
    td {
      font-size: 15px;
    }
    .record {
      width: 12%;
    }
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
                <td className='ranking'>{index + 1}</td>
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
                <td className='record'>{userRecord.record.toFixed(2)}</td>
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
                    .filter((record) => record <= myRecord).length + 1}
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
