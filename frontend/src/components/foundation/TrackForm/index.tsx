import React from 'react';
import Input from '@F/Input/';
import useInputs from '@HOOK/useInputs';
import { TrackInfo } from '@TS/track';
import { trackInputsForm } from '@TS/trackInputForm';
import * as S from './styles';

export interface Props {}

const TrackForm = ({}: Props): JSX.Element => {
  const [values, setValues] = useInputs<TrackInfo>({
    trackName: '',
    artistName: '',
    videoId: '',
  });
  const { trackName, artistName, videoId } = values;

  const TRACK_INPUTS_FORM: trackInputsForm[] = [
    {
      id: 'artistName',
      placeholder: '가수 이름',
      label: '가수 이름',
      value: artistName,
    },
    {
      id: 'trackName',
      placeholder: '노래제목',
      label: '노래제목',
      value: trackName,
    },
    {
      id: 'videoId',
      placeholder: '유튜브 비디오 ID',
      label: '유튜브 비디오 ID',
      value: videoId,
    },
  ];

  return (
    <S.Wrapper>
      {TRACK_INPUTS_FORM.map((trackInput) => (
        <div key={trackInput.id}>
          <Input {...trackInput} onChange={setValues} />
        </div>
      ))}
    </S.Wrapper>
  );
};

export default TrackForm;
