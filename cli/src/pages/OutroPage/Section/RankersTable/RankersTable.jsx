import React from 'react';
import styled from 'styled-components';
import UserAverageData from '../UsersAverageData/UserAverageData';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TableContainer = styled.table`
  width: 100%;
  font-family: 'Nanum Gothic';
  font-size: 16px;
  font-weight: 200;
  overflow: hidden;
  padding: 0 0 1rem 0;

  td {
    padding: 4px;
    text-align: center;
  }

  #ranking {
    width: 15%;
    text-align: center;
  }
  #name {
    width: 60%;
  }
  #record {
    width: 30%;
    text-align: right;
  }

  #myRecord {
    color: black;
    font-weight: bold;
  }
`;

const RankersTable = ({ userRankList, myRecord, userName, quantityToShow }) => {
  return (
    <Wrapper>
      <TableContainer>
        <tbody>
          {userRankList
            .filter((userRecord, index) => index < `${quantityToShow}`)
            .map((userRecord, index) => (
              <tr key={userRecord._id}>
                <td id='ranking'>{index + 1}위</td>
                <td id='name'>{userRecord.player}</td>
                <td id='record'>{userRecord.record} 초</td>
              </tr>
            ))}

          {myRecord && (
            <>
              <tr>
                <td></td>
                <td>...</td>
                <td></td>
              </tr>

              <tr>
                <td id='myRecord'>
                  {userRankList
                    .map((user) => user.record)
                    .filter((record) => record < myRecord).length + 1}
                  위
                </td>
                <td id='myRecord'>내 순위</td>
                <td id='record'>{myRecord} 초</td>
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
