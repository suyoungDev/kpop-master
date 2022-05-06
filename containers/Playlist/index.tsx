import React, { useCallback, FormEvent, useEffect, useRef } from 'react';
import useInputs from '@hooks/useInputs';
import TrackList from './TrackList';
import { focusOn } from '@fn/focusOn';
import { useResetRecoilState, useSetRecoilState } from 'recoil';
import errorStatus, { defaultErrorStatus } from '@atom/create/errorList';
import CREATE from '@data/create';

const FORM: TrackInfo = { trackName: '', artistName: '' };

const PlaylistForm = (): JSX.Element => {
  const {
    inputs: playlist,
    setInputs: setPlaylist,
    onChange: changePlaylist,
    onReset,
    resetAll,
    deleteInput,
  } = useInputs<TrackInfo>(Array(CREATE.MIN_QUANTITY).fill(FORM), FORM);
  const form = useRef<HTMLFormElement>(null);
  const addNewTrack = useSetRecoilState(errorStatus);
  const resetErrors = useResetRecoilState(errorStatus);

  const appendNewTrack = useCallback(() => {
    setPlaylist((prev) => [...prev, FORM]);
    addNewTrack((prev) => [...prev, defaultErrorStatus]);
  }, [addNewTrack, setPlaylist]);

  const createPlaylist = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      // TODO: api 연결
      resetAll();
    },
    [resetAll]
  );

  useEffect(() => {
    focusOn('input#artistName');
  }, []);

  const invalidForm = useCallback((e: FormEvent) => {
    e.preventDefault();
    focusOn('input:invalid', form.current as HTMLFormElement);
  }, []);

  const isTooLong = playlist.length > CREATE.MAX_QUANTITY;

  return (
    <div>
      <h1>you can create playlist and share it :)</h1>
      <button onClick={appendNewTrack} accessKey="a" disabled={isTooLong}>
        추가하기
      </button>
      {isTooLong && (
        <p role="alert" aria-live="polite">
          최대 {CREATE.MAX_QUANTITY}개까지만 가능합니다. :(
        </p>
      )}
      <form
        name="create_playlist"
        onSubmit={createPlaylist}
        onInvalid={invalidForm}
        onReset={() => {
          resetAll();
          resetErrors();
        }}
        ref={form}
      >
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
          <button type="reset" accessKey="r">
            reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default PlaylistForm;
