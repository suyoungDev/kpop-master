import React, { useState, useContext } from 'react';
import axios from 'axios';
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
import { Form, Title, Wrapper } from './Form/Form';

import { BsSearch, BsQuestionCircle } from 'react-icons/bs';
import { FONT } from '../../../../constants/theme';

import { TrackListToPlayContext } from '../../../../context/TrackListToPlayContext';

const ChooseOptions = () => {
  // eslint-disable-next-line
  const [trackListToPlay, setTrackListToPlay] = useContext(
    TrackListToPlayContext
  );
  const [isLoading, setIsLoading] = useState(true);
  const [isReady, setIsReady] = useState(false);
  const [inputArtist, setInputArtist] = useState('');
  const [variablesToPlay, setVariablesToPlay] = useState({
    level: '',
    type: '',
  });

  const changeArtist = (event) => {
    setInputArtist(event.target.value);
  };

  const saveTrackList = (trackList, theme) => {
    setTrackListToPlay({
      trackList: trackList,
      theme: theme,
    });
  };

  const getList = async (variable, theme) => {
    setIsLoading(true);

    let endPoint;
    if (theme === 'artist') endPoint = 'getByArtist';
    if (theme === 'year') endPoint = 'getByYear';
    if (theme === 'weekly') endPoint = 'getByWeek';

    const response = await axios.post(`/api/chart/${endPoint}`, variable);
    const trackList = response.data.result;

    if (theme === 'artist') {
      if (!trackList.length) {
        alert('찾는 가수가 없습니다. 다시 입력해주세요.');
      }
    }

    setIsLoading(false);
    setIsReady(true);

    const themeToGo = { ...variable, theme: theme };

    saveTrackList(trackList, themeToGo);
  };

  const getByArtist = (event) => {
    event.preventDefault();
    const variable = { artist: inputArtist, limit: variablesToPlay.level };
    getList(variable, 'artist');
  };

  const getByYear = (year) => {
    const variable = { year: year, limit: variablesToPlay.level };
    getList(variable, 'year');
  };

  const getByThisWeek = () => {
    const variable = { limit: variablesToPlay.level };
    getList(variable, 'weekly');
  };

  const getLevel = (e) => {
    setVariablesToPlay({ ...variablesToPlay, type: '' });
    setIsReady(false);
    setVariablesToPlay({ ...variablesToPlay, level: e.target.value });
    console.log(variablesToPlay);
  };

  const getType = (e) => {
    setVariablesToPlay({ ...variablesToPlay, type: e.target.value });
    console.log(variablesToPlay);

    setIsReady(false);
    if (e.target.value === 'this-week') getByThisWeek();
  };

  const getYear = (e) => {
    setIsReady(false);
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
        <li>가져온 목록에서 무작위로 5곡을 뽑은 뒤,</li>
        <li>게임을 시작합니다.</li>
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

      {variablesToPlay.level && (
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

      {variablesToPlay.type === 'artist' && (
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

      {variablesToPlay.type === 'year' && (
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

      <div>
        {!isReady ? (
          <div></div>
        ) : isReady && isLoading ? (
          <Wrapper center>
            <Spinner />
          </Wrapper>
        ) : (
          <Wrapper>
            <LinkButton links='/start'>start</LinkButton>
          </Wrapper>
        )}
      </div>
    </CleanCard>
  );
};
export default ChooseOptions;
