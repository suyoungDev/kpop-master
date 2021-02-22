import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import LinkButton from '../../../../components/LinkButton/LinkButton';
import Spinner from '../../../OutroPage/Section/Spinner/Spinner';
import {
  Radio,
  RadioLabel,
  RadioContainer,
  RadioRowContainer,
  TextInput,
} from './Radio/Radio';
import CleanCard from '../../../../components/Card/CleanCard';
import {
  levelList,
  typeList,
  yearList,
} from '../LevelStructureList/LevelStructureList';

import { BsSearch, BsQuestionCircle } from 'react-icons/bs';
import { COLORS, FONT, SCREEN } from '../../../../constants/theme';

const Form = styled.form`
  display: flex;
  align-items: ${({ center }) => (center ? 'center' : '')};
  justify-content: center;
  flex-direction: ${({ row }) => (row ? 'row' : 'column')};
  transition: all 0.5s linear;

  :not(:first-child) {
    margin: 2rem 0 0 0;
  }
  :last-child {
    margin: 0;
  }

  @media ${SCREEN.laptop} {
    :first-child {
      margin-top: 0;
    }
  }
`;

const Title = styled.span`
  width: 100px;
  display: flex;
  margin-bottom: 0.7rem;
  align-items: center;
  font-family: ${FONT.korean};
  font-weight: 200;
  color: ${COLORS.headingDarkGray};
  cursor: ${({ tippy }) => (tippy ? 'help' : 'default')};

  .icon {
    margin-left: 0.4rem;
    color: ${COLORS.primaryTwo};
  }

  &:hover {
    color: ${({ tippy }) => (tippy ? `${COLORS.primaryPoint}` : '')};
    .icon {
      color: ${COLORS.primaryPoint};
    }
  }
`;
const Wrapper = styled.div`
  margin: 2rem 0 0 0;
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

  const getList = async (variable, theme) => {
    setIsLoading(true);

    let endPoint;
    if (theme === 'artist') endPoint = 'getBySinger';
    if (theme === 'year') endPoint = 'getByYear';
    if (theme === 'weekly') endPoint = 'getByWeek';

    console.log(variable);

    const response = await axios.post(`/api/chart/${endPoint}`, variable);
    const trackList = response.data.shuffled;

    if (theme === 'artist') {
      if (!trackList.length) {
        alert('찾는 가수가 없습니다. 다시 입력해주세요.');
      }
    }

    setIsLoading(false);
  };

  const getByArtist = (event) => {
    event.preventDefault();

    const limit = themeToPlay.levelToPlay;
    const variable = { artist: inputArtist, limit: limit };

    getList(variable, 'artist');
    setIsSelected(true);
  };

  const getByYear = (year) => {
    const limit = themeToPlay.levelToPlay;
    const variable = { year: year, limit: limit };

    getList(variable, 'year');
    setIsSelected(true);
  };

  const getByThisWeek = () => {
    const limit = themeToPlay.levelToPlay;
    const variable = { limit: limit };

    getList(variable, 'weekly');
    setIsSelected(true);
  };

  const getLevel = (e) => {
    setIsSelected(false);
    setThemeToPlay({
      ...themeToPlay,
      typeToPlay: '',
      levelToPlay: e.target.value,
    });
  };

  const getType = (e) => {
    setThemeToPlay({ ...themeToPlay, typeToPlay: e.target.value });
    setIsSelected(false);
    if (e.target.value === 'this-week') getByThisWeek();
  };

  const getYear = (e) => {
    setThemeToPlay({ ...themeToPlay, value: e.target.value });
    setIsSelected(false);
    getByYear(e.target.value);
  };

  const tipsForLevel = (
    <div style={{ padding: '.7rem' }}>
      <ul
        style={{
          listStyle: 'none',
          fontFamily: `${FONT.korean}`,
          lineHeight: '25px',
        }}
      >
        <li>쉬움은 멜론 top 10,</li>
        <li>보통은 멜론 top 50, </li>
        <li>어려움은 멜론 top 100에서 목록을 가져옵니다. </li>
        <li>가져온 목록에서 랜덤으로 10곡을 뽑아,</li>
        <li>순서를 셔플합니다.</li>
      </ul>
    </div>
  );

  return (
    <CleanCard options>
      <Form onClick={getLevel}>
        <Tippy content={tipsForLevel}>
          <Title tippy>
            난이도
            <BsQuestionCircle className='icon' />
          </Title>
        </Tippy>
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
      </Form>

      {themeToPlay.levelToPlay && (
        <Form onClick={getType}>
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
        </Form>
      )}

      {themeToPlay.typeToPlay === 'artist' && (
        <Form onSubmit={getByArtist} row>
          <TextInput
            placeholder='아티스트 찾기'
            type='string'
            value={inputArtist}
            onChange={changeArtist}
          />
          <button type='submit'>
            <BsSearch />
          </button>
        </Form>
      )}

      {themeToPlay.typeToPlay === 'year' && (
        <Form onClick={getYear}>
          <RadioRowContainer year>
            {yearList.map((year) => (
              <RadioContainer key={year.key}>
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
        </Form>
      )}

      <Form>
        {!isSelected ? (
          <div></div>
        ) : isSelected && isLoading ? (
          <Wrapper>
            <Spinner />
          </Wrapper>
        ) : (
          <Wrapper>
            <LinkButton links='/start'>start</LinkButton>
          </Wrapper>
        )}
      </Form>
    </CleanCard>
  );
};
export default ChooseOptions;
