import React from 'react';
import TrackInput from './TrackInput';
import type { Output } from '@hooks/useInputs';
import { MINIMUM_QUANTITY } from './';

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
  return (
    <ul>
      {playlist.map((track, idx) => (
        <TrackInput
          values={track}
          setValues={changePlaylist(idx)}
          key={`playlist_track_${idx}`}
          onReset={() => onReset(idx)}
          deleteTrack={() => deleteTrack(idx)}
          ableToDelete={idx < MINIMUM_QUANTITY}
        />
      ))}
    </ul>
  );
};

export default TrackList;
