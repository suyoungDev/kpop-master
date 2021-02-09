import React from 'react';

import Button from '../../Button/Button';

import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className='wrapper'>
      <div className='white-wrapper'>
        <div className='title'>
          <h1>
            K-pop
            <br /> Master <br />
            Quiz
          </h1>
        </div>
        <div className='alert'>
          <div className='alert-text'>
            <div className='alarm red'>사용 방법</div>
            <ul>
              <li>노래를 듣고 10초 안에 노래제목을 맞추는 게임입니다</li>
              <li>6초에 힌트가 나가니 참고해주세요.</li>
              <li>한글, 영어 모두 허용하며, 공백은 무시합니다.</li>
            </ul>
          </div>
          <div className='alert-list'>
            <div className='alarm blue'>개발 예정 리스트</div>
            <ul>
              <li>00년대 가요</li>
              <li>10년대 가요</li>
              <li>20년대 가요</li>
              <li>90년대 가요</li>
              <li>가수 (검색 지원)</li>
            </ul>
          </div>
          <Button links={'/start'}>start</Button>
        </div>
      </div>
    </div>
  );
};
export default LandingPage;
