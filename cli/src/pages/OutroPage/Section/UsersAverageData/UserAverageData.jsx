import React from 'react';
import styled from 'styled-components';
import { COLORS, FONT } from '../../../../constants/theme';

const UsersAverageDataContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  border-top: 1px solid rgba(0, 0, 0, 0.4);
  padding: 0.5rem 0;
`;
const UsersData = styled.div`
  width: 60%;
  display: flex;
  flex-direction: row;
  align-self: flex-end;
  justify-content: space-between;
  line-height: 24px;
  font-size: 14px;
  font-family: ${FONT.korean};
  color: ${COLORS.contentGray};
`;

const userAverageData = ({ userRecords }) => {
  return (
    <UsersAverageDataContainer>
      <UsersData>
        <span>상위 10위 평균</span>
        <span>
          {(
            userRecords
              .map((user) => user.record)
              .filter((item, index) => index < 10)
              .reduce((previous, current) => previous + current) / 10
          ).toFixed(2)}
          초
        </span>
      </UsersData>
      <UsersData>
        <span>유저들 전체 평균</span>
        <span>
          {(
            userRecords
              .map((user) => user.record)
              .reduce((prev, curr) => prev + curr) / userRecords.length
          ).toFixed(2)}
          초
        </span>
      </UsersData>
    </UsersAverageDataContainer>
  );
};

export default userAverageData;
