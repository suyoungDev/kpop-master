import React from 'react';
import Input from '@F/Input/';
import { TrackInfo } from '@TS/track';
import { trackInputsForm } from '@TS/trackInputForm';
import * as S from './styles';

export interface Props {
  values: TrackInfo;
  setValues: (e: React.ChangeEvent<unknown>) => void;
}

const TrackForm = ({ values, setValues }: Props): JSX.Element => {
  const { trackName, artistName, videoId } = values;

  const TRACK_INPUTS_FORM: trackInputsForm[] = [
    {
      id: 'artistName',
      placeholder: '가수 이름',
      label: '가수 이름',
      value: artistName,
      required: true,
    },
    {
      id: 'trackName',
      placeholder: '노래제목',
      label: '노래제목',
      value: trackName,
      required: true,
    },
    {
      id: 'videoId',
      placeholder: '유튜브 비디오 ID (선택)',
      label: '유튜브 비디오 ID',
      value: videoId,
      required: false,
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
