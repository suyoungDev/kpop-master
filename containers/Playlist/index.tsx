import React, { useCallback, FormEvent, useEffect } from 'react';
import useInputs from '@hooks/useInputs';
import TrackList from './TrackList';

const FORM: TrackInfo = { trackName: '', artistName: '' };
export const MINIMUM_QUANTITY = 5;

const PlaylistForm = () => {
  const {
    inputs: playlist,
    setInputs: setPlaylist,
    onChange: changePlaylist,
    onReset,
    resetAll,
    deleteInput,
  } = useInputs<TrackInfo>(Array(MINIMUM_QUANTITY).fill(FORM), FORM);

  const appendNewTrack = useCallback(() => {
    setPlaylist((prev) => [...prev, FORM]);
  }, [setPlaylist]);

  const createPlaylist = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      console.log('submitted');
      // TODO: api 연결
      resetAll();
    },
    [resetAll]
  );

  useEffect(() => {
    (document.querySelector('input#artistName') as HTMLInputElement).focus();
  }, []);

  return (
    <div>
      <h1>you can create playlist and share it :)</h1>
      <button onClick={appendNewTrack} accessKey="a">
        추가하기
      </button>
      <form onSubmit={createPlaylist}>
        <TrackList
          playlist={playlist}
          changePlaylist={changePlaylist}
          onReset={onReset}
          deleteTrack={deleteInput}
        />
        <div>
          <button type="submit" accessKey="c">
            create
          </button>
          <button type="reset" onClick={resetAll} accessKey="r">
            reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default PlaylistForm;
