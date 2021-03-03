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
} from '../themeStructureList/themeStructureList';
import { Form, Title, Wrapper } from './Form/Form';

import { BsSearch, BsQuestionCircle } from 'react-icons/bs';
import { FONT } from '../../../../constants/theme';

import { TrackListToPlayContext } from '../../../../context/TrackListToPlayContext';
import useInput from '../../../../hook/useInput';

const ChooseOptions = () => {
  // eslint-disable-next-line
  const [trackListToPlay, setTrackListToPlay] = useContext(
    TrackListToPlayContext
  );
  const [isLoading, setIsLoading] = useState(true);
  const [isReady, setIsReady] = useState(false);
  const [inputArtist, setInputArtist] = useInput('');
  const [variablesToPlay, setVariablesToPlay] = useState({
    level: '',
    theme: '',
  });

  const getList = async (variable) => {
    setIsReady(true);
    let endPoint;
    if (variable.theme === 'artist') endPoint = 'getByArtist';
    if (variable.theme === 'year') endPoint = 'getByYear';
    if (variable.theme === 'weekly') endPoint = 'getByWeek';

    const response = await axios.post(`/api/chart/${endPoint}`, variable);
    const trackList = response.data.result;

    if (!trackList.length) {
      if (variable.theme === 'artist') {
        alert(`찾는 가수 ${inputArtist}가 없습니다. 다시 입력해주세요.`);
        setIsReady(false);
      }
    }

    setTrackListToPlay({ trackList, theme: variable });

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  const getByArtist = (event) => {
    event.preventDefault();
    const variable = {
      value: inputArtist,
      limit: variablesToPlay.level,
      theme: 'artist',
    };

    getList(variable);
  };

  const getByThisWeek = () => {
    const variable = {
      limit: variablesToPlay.level,
      theme: 'weekly',
    };
    getList(variable);
  };

  const getYear = (e) => {
    setIsReady(false);

    const variable = {
      value: e.target.value,
      ...variablesToPlay,
    };
    getList(variable);
  };

  const getType = (e) => {
    setVariablesToPlay({
      ...variablesToPlay,
      theme: e.target.value,
    });

    setIsReady(false);
    if (e.target.value === 'weekly') getByThisWeek();
  };

  const getLevel = (e) => {
    setIsReady(false);
    setVariablesToPlay({
      limit: e.target.value,
    });
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

      {variablesToPlay.limit && (
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

      {variablesToPlay.theme === 'artist' && (
        <Form onSubmit={getByArtist} row>
          <TextInput
            placeholder='아티스트 찾기'
            type='string'
            value={inputArtist}
            onChange={setInputArtist}
          />
          <button type='submit'>
            <BsSearch />
          </button>
        </Form>
      )}

      {variablesToPlay.theme === 'year' && (
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
        {!isReady ? null : isLoading ? (
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
