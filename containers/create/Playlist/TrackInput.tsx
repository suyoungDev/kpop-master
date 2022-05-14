import React, { useCallback } from 'react';
import Input from '@F/Input';

export type Props = {
  values: TrackInfo;
  setValues: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onReset: () => void;
  deleteTrack: () => void;
  ableToDelete: boolean;
  errors: Record<TrackKey, boolean>;
  setError: (key: TrackKey, status: boolean) => void;
  index: number;
};

const TrackInput = ({
  deleteTrack,
  values,
  setValues,
  onReset,
  ableToDelete,
  errors,
  setError,
  index,
}: Props): JSX.Element => {
  const { trackName, artistName } = values;
  const TRACK_INPUTS_FORM: TrackInputField[] = [
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

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, id: TrackKey) => {
      setValues(e);
      if (e.target.value === '') return setError(id, false);
      // TODO: debounce 적용하기
      if (e.target.value.length < 2) return setError(id, true);
      else setError(id, false);
    },
    [setError, setValues]
  );

  return (
    <li>
      {TRACK_INPUTS_FORM.map(({ id, ...trackInput }) => (
        <Input
          {...trackInput}
          onChange={(e) => onChange(e, id)}
          type="text"
          name={id}
          key={id}
          id={`${index}_${id}`}
          alertMessage="최소 두글자 이상은 작성해주셔야 노래를 정확하게 찾을 수 있습니다."
          setError={() => setError(id, true)}
        />
      ))}
      <button type="button" onClick={onReset}>
        취소
      </button>
      {ableToDelete ? null : <button onClick={deleteTrack}>여기만 삭제</button>}
    </li>
  );
};

export default TrackInput;
