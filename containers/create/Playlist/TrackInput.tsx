import React from 'react';
import Input from '@F/Input';

export type Props = {
  values: TrackInfo;
  setValues: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onReset: () => void;
  deleteTrack: () => void;
  ableToDelete: boolean;
  errors: Record<TrackKey, boolean>;
  setError: (key: TrackKey, status: boolean) => void;
};

const TrackInput = ({
  deleteTrack,
  values,
  setValues,
  onReset,
  ableToDelete,
  errors,
  setError,
}: Props): JSX.Element => {
  const { trackName, artistName } = values;
  const TRACK_INPUTS_FORM: PlaylistInputFields[] = [
    {
      id: 'artistName',
      placeholder: '가수 이름',
      label: '가수 이름',
      value: artistName,
      required: true,
      minLength: 2,
      isError: errors.artistName,
    },
    {
      id: 'trackName',
      placeholder: '노래 제목',
      label: '노래 제목',
      value: trackName,
      required: true,
      minLength: 2,
      isError: errors.trackName,
    },
  ];

  return (
    <li>
      {TRACK_INPUTS_FORM.map((trackInput, index) => (
        <Input
          {...trackInput}
          onChange={(e) => {
            setValues(e);
            if (e.target.value === '') setError(trackInput.id, false);
            if (e.target.value.length < 2) setError(trackInput.id, true);
            else setError(trackInput.id, false);
          }}
          name={trackInput.id}
          key={trackInput.id}
          type="text"
          alertMessage="최소 두글자 이상은 작성해주셔야 정확히 노래 정보를 가져올 수 있습니다."
          setError={() => setError(trackInput.id, true)}
        />
      ))}
      <button onClick={onReset}>취소</button>
      {ableToDelete ? null : <button onClick={deleteTrack}>여기만 삭제</button>}
    </li>
  );
};

export default TrackInput;
