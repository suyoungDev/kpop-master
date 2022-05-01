import React from 'react';
import useInputs from '@hooks/useInputs';
import InputModule from './InputModule';

const FORM: TrackInfo = { trackName: '', artistName: '' };

const Playlist = () => {
  const {
    inputs: playlist,
    setInputs: setPlaylist,
    onChange: changePlaylist,
  } = useInputs<TrackInfo>([FORM], FORM);

  const appendPlaylist = React.useCallback(() => {
    setPlaylist(prev => [...prev, FORM]);
  }, [setPlaylist]);

  return (
    <div>
      {playlist.map((track, idx) => (
        <InputModule
          values={track}
          setValues={changePlaylist(idx)}
          key={`playlist_${idx}`}
        />
      ))}
    </div>
  );
};

export default Playlist;
