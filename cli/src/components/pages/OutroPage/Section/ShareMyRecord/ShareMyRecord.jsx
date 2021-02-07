import React from 'react';
import { AwesomeButtonSocial } from 'react-awesome-button';
import './ShareMyRecord.scss';

const ShareMyRecord = () => {
  return (
    <div className='share-form'>
      <h3>
        <span className='highlight'>내 결과 공유하기</span>
      </h3>
      <ul
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          width: '400px',
        }}
      >
        <li>
          <AwesomeButtonSocial type='secondary' />
        </li>
        <li>
          <AwesomeButtonSocial type='facebook' />
        </li>
        <li>
          <AwesomeButtonSocial type='instagram' />
        </li>
        <li>
          <AwesomeButtonSocial type='twitter' />
        </li>
      </ul>
    </div>
  );
};

export default ShareMyRecord;
