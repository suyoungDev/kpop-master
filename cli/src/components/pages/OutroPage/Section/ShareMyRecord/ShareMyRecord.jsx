import React from 'react';

const ShareMyRecord = () => {
  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h3>내결과 공유하기</h3>
        <ul
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: '400px',
          }}
        >
          <li>카톡</li>
          <li>페이스북</li>
          <li>인스타</li>
          <li>트위터</li>
        </ul>
      </div>
    </div>
  );
};

export default ShareMyRecord;
