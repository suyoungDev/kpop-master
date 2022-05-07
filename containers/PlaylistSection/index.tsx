import React from 'react';
import Playlist from '@C/Playlist';
import CREATE from '@data/create';

const PlaylistSection = () => {
  return (
    <section>
      <div>
        <h2>플레이리스트</h2>
        <ul>
          <li>플레이리스트의 제목과 태그에 어울리는 곡으로 구성해해주세요.</li>
          <li>
            최소 {CREATE.MIN_QUANTITY} 개에서 최대 {CREATE.MAX_QUANTITY} 개의
            곡으로 플레이리스트를 구성할 수 있습니다.
          </li>
          <li>최대한 정확하게 가수이름과 노래제목을 작성해주세요.</li>
          <li>
            부정확하게 작성할 경우, 제목과 노래가 매칭이 안될 수도 있습니다.
            이경우 신고를 통해 수정이나 삭제를 합니다.
          </li>
          <li>신고를 많이 받은 플레이리스트는 무통보 삭제됩니다.</li>
          <li>신고 방법은 설정 메뉴를 눌러서 확인해주세요.</li>
        </ul>
      </div>
      <Playlist />
      <div>
        {/* https://developer.mozilla.org/ko/docs/Web/HTML/Global_attributes/accesskey
        접속 브라우저와 기기에 따라서 다르게 설명해야겠다.. */}
        <span>tip</span>
        <p>단축키를 이용해 추가하고 리셋하세요! (영어만 됩니다)</p>
        <ul>
          <li>
            <code>cmd + option + a</code> <span>추가</span>
          </li>
          <li>
            <code>cmd + option + r</code> <span>초기화</span>
          </li>
          <li>
            <code>cmd + option + c</code> <span>생성하기</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default PlaylistSection;
