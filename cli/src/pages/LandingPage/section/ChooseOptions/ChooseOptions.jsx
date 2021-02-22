import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import LinkButton from '../../../../components/LinkButton/LinkButton';
import Spinner from '../../../OutroPage/Section/Spinner/Spinner';
import {
  Radio,
  RadioLabel,
  RadioContainer,
  RadioRowContainer,
  TextInput,
} from './Radio/Radio';

import { BsSearch, BsQuestionCircle } from 'react-icons/bs';
import { COLORS, FONT } from '../../../../constants/theme';

const Wrapper = styled.form`
  display: flex;
  align-items: ${({ center }) => (center ? 'center' : '')};
  justify-content: center;
  flex-direction: ${({ row }) => (row ? 'row' : 'column')};
  margin-top: ${({ center }) => (center ? '' : '2rem')};
`;

const Title = styled.span`
  display: flex;
  margin-bottom: 0.7rem;
  align-items: center;
  font-family: ${FONT.korean};
  font-weight: 200;
  color: ${COLORS.headingDarkGray};

  .icon {
    margin-left: 0.4rem;
    color: ${COLORS.primaryTwo};

    &:hover {
      color: ${COLORS.primaryThree};
    }
  }
`;

const ChooseOptions = () => {
  const [isSelected, setIsSelected] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [inputArtist, setInputArtist] = useState('');
  const [themeToPlay, setThemeToPlay] = useState({
    levelToPlay: '',
    typeToPlay: '',
    value: '',
  });

  const changeArtist = (event) => {
    setInputArtist(event.target.value);
  };

  const getByArtist = (event) => {
    event.preventDefault();
    const getList = async () => {
      setIsLoading(true);
      const limit = themeToPlay.levelToPlay;
      const variable = { artist: inputArtist, limit: limit };
      const response = await axios.post('/api/chart/getBySinger', variable);
      const trackList = response.data.shuffled;
      setIsLoading(false);
      if (!trackList.length) {
        alert('찾는 가수가 없습니다. 다시 입력해주세요.');
      }
    };
    getList();
    setIsSelected(true);
  };

  const getByYear = (year) => {
    const getList = async () => {
      setIsLoading(true);
      const limit = themeToPlay.levelToPlay;
      const variable = { year: year, limit: limit };
      const response = await axios.post('/api/chart/getByYear', variable);
      const trackList = response.data.shuffled;
      setIsLoading(false);
    };
    getList();
    setIsSelected(true);
  };

  const getByThisWeek = () => {
    const getList = async () => {
      setIsLoading(true);
      const limit = themeToPlay.levelToPlay;
      const variable = { limit: limit };
      const response = await axios.post('/api/chart/getByWeek', variable);
      const trackList = response.data.shuffled;
      setIsLoading(false);
    };
    getList();
    setIsSelected(true);
  };

  const getLevel = (e) => {
    setThemeToPlay({ ...themeToPlay, levelToPlay: e.target.value });
  };

  const getType = (e) => {
    setThemeToPlay({ ...themeToPlay, typeToPlay: e.target.value });
    if (e.target.value === 'this-week') getByThisWeek();
  };

  const getYear = (e) => {
    setThemeToPlay({ ...themeToPlay, value: e.target.value });
    getByYear(e.target.value);
  };

  const levelList = [
    { name: '쉬움', value: '10', key: 'level-easy' },
    { name: '보통', value: '50', key: 'level-normal' },
    { name: '어려움', value: '100', key: 'level-hard' },
  ];

  const typeList = [
    { name: '가수', value: 'artist', key: 'type-art' },
    { name: '년도별', value: 'year', key: 'type-year' },
    { name: '이번주', value: 'this-week', key: 'type-week' },
  ];

  const yearList = [
    { name: '90년대', value: 1990, key: 'year90' },
    { name: '00년대', value: 2000, key: 'year00' },
    { name: '10년대', value: 2010, key: 'year10' },
    { name: '20년도', value: 2020, key: 'year20' },
  ];

  return (
    <div>
      <Wrapper onClick={getLevel}>
        <Title>
          난이도 조절 <BsQuestionCircle className='icon' />
        </Title>
        <RadioRowContainer>
          {levelList.map((level) => (
            <RadioContainer key={level.key}>
              <Radio
                type='radio'
                value={level.value}
                id={level.value}
                name='level'
              />
              <RadioLabel htmlFor={level.value}>{level.name}</RadioLabel>
            </RadioContainer>
          ))}
        </RadioRowContainer>
      </Wrapper>

      {themeToPlay.levelToPlay && (
        <Wrapper onClick={getType}>
          <Title>주제 고르기</Title>
          <RadioRowContainer>
            {typeList.map((type) => (
              <RadioContainer key={type.key}>
                <Radio
                  type='radio'
                  value={type.value}
                  id={type.value}
                  name='type'
                />
                <RadioLabel htmlFor={type.value}>{type.name}</RadioLabel>
              </RadioContainer>
            ))}
          </RadioRowContainer>
        </Wrapper>
      )}

      {themeToPlay.typeToPlay === 'artist' && (
        <Wrapper onSubmit={getByArtist} row>
          <TextInput
            placeholder='가수 이름으로 플레이하기'
            type='string'
            value={inputArtist}
            onChange={changeArtist}
          />
          <button type='submit'>
            <BsSearch />
          </button>
        </Wrapper>
      )}

      {themeToPlay.typeToPlay === 'year' && (
        <Wrapper onClick={getYear}>
          <RadioRowContainer year>
            {yearList.map((year, index) => (
              <RadioContainer key={index}>
                <Radio
                  type='radio'
                  value={year.value}
                  id={year.value}
                  name='year'
                />
                <RadioLabel htmlFor={year.value} year>
                  {year.name}
                </RadioLabel>
              </RadioContainer>
            ))}
          </RadioRowContainer>
        </Wrapper>
      )}

      <Wrapper>
        {!isSelected ? (
          <div></div>
        ) : isSelected && isLoading ? (
          <Wrapper center>
            <Spinner />
          </Wrapper>
        ) : (
          <LinkButton links='/start'>start</LinkButton>
        )}
      </Wrapper>
    </div>
  );
};
export default ChooseOptions;
