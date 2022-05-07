import React from 'react';
import Tag from '@F/Tag';
import TagInputs from '@F/TagInputs';
import { TagListWrapper } from './styles';

const TagSection = () => {
  return (
    <TagListWrapper>
      <div>
        <h2>#tag</h2>
        <p>
          자신이 만든 플레이리스트를 설명할 수 있는 태그를 작성해주세요. 태그를
          이용하여 플레이리스트를 검색할 수도 있습니다.
        </p>
        <small>
          인기 있는 태그와 플레이리스트는 목록의 순위권으로 표현됩니다!
        </small>
        <div>
          <h3>예시</h3>
          <ul>
            <li>
              <Tag label="너만_봄이냐" />
            </li>
            <li>
              <Tag label="여돌_전성기" />
            </li>
            <li>
              <Tag label="2022년" />
            </li>
          </ul>
          <h3>작성 tip</h3>
          <ul>
            <li>방향키 위아래로 이전에 작성한 걸 수정해볼 수 있어요!</li>
            <li>태그는 중복 추가하실 수 없습니다.</li>
          </ul>
        </div>
      </div>
      <TagInputs />
    </TagListWrapper>
  );
};

export default TagSection;
