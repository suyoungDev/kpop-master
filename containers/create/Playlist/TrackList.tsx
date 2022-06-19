import React, { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import type { InputOutput } from '@hooks/useInputs';
import CREATE from '@data/create';
import errorStatus from '@store/create/errorList';
import TrackInput from './TrackInput';

type Props = {
  playlist: InputOutput<Track>['inputs'];
  changePlaylist: InputOutput<Track>['onChange'];
  onReset: InputOutput<Track>['onReset'];
  deleteTrack: InputOutput<Track>['deleteInput'];
};

const TrackList = ({
  playlist,
  changePlaylist,
  onReset,
  deleteTrack,
}: Props): JSX.Element => {
  const [errors, setErrors] = useRecoilState(errorStatus);

  const changeErrorStatus = useCallback(
    (index: number) => (key: TrackKey, status: boolean) => {
      setErrors((prev) =>
        [...prev].map((item, idx) =>
          idx !== index ? item : { ...item, [key]: status }
        )
      );
    },
    [setErrors]
  );

  return (
    <ul>
      {playlist.map((track, idx) => (
        <TrackInput
          values={track}
          setValues={changePlaylist(idx)}
          key={`playlist_track_${idx}`}
          onReset={() => onReset(idx)}
          deleteTrack={() => deleteTrack(idx)}
          ableToDelete={idx < CREATE.MIN_QUANTITY}
          errors={errors[idx]}
          setError={changeErrorStatus(idx)}
          index={idx}
        />
      ))}
    </ul>
  );
};

export default TrackList;
