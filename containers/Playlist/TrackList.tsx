import React, { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import type { Output } from '@hooks/useInputs';
import errorStatus from '@atom/create/errorList';
import CREATE from '@data/create';
import TrackInput from './TrackInput';

type Props = {
  playlist: Output<TrackInfo>['inputs'];
  changePlaylist: Output<TrackInfo>['onChange'];
  onReset: Output<TrackInfo>['onReset'];
  deleteTrack: Output<TrackInfo>['deleteInput'];
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
        />
      ))}
    </ul>
  );
};

export default TrackList;
