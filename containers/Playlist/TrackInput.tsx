import React from 'react';
import Input from '@F/Input';

export type Props = {
  values: TrackInfo;
  setValues: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onReset: () => void;
  deleteTrack: () => void;
  ableToDelete: boolean;
};

const TrackInput = ({
  deleteTrack,
  values,
  setValues,
  onReset,
  ableToDelete,
}: Props): JSX.Element => {
  const { trackName, artistName } = values;

  const TRACK_INPUTS_FORM: PlaylistInputFields[] = [
    {
      id: 'artistName',
      placeholder: '가수 이름',
      label: '가수 이름',
      value: artistName,
      required: true,
    },
    {
      id: 'trackName',
      placeholder: '노래 제목',
      label: '노래 제목',
      value: trackName,
      required: true,
    },
  ];

  return (
    <li>
      {TRACK_INPUTS_FORM.map((trackInput) => (
        <Input
          {...trackInput}
          onChange={setValues}
          name={trackInput.id}
          key={trackInput.id}
          type="text"
        />
      ))}
      <button onClick={onReset}>취소</button>
      {ableToDelete ? null : <button onClick={deleteTrack}>여기만 삭제</button>}
    </li>
  );
};

export default TrackInput;
