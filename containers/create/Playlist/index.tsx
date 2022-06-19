import React, { FormEvent, useCallback, useEffect, useRef } from 'react';
import { useResetRecoilState, useSetRecoilState } from 'recoil';
import useInputs from '@hooks/useInputs';
import { focusOn } from '@fn/focusOn';
import CREATE from '@data/create';
import errorStatus, { defaultErrorStatus } from '@store/create/errorList';
import TrackList from './TrackList';

const FORM: Track = { trackName: '', artistName: '' };

const PlaylistForm = (): JSX.Element => {
  const {
    inputs: playlist,
    setInputs: setPlaylist,
    onChange: changePlaylist,
    onReset,
    resetInputs,
    deleteInput,
  } = useInputs<Track>(Array(CREATE.MIN_QUANTITY).fill(FORM), FORM);
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
      resetInputs();
    },
    [resetInputs]
  );

  const invalidForm = useCallback((e: FormEvent) => {
    e.preventDefault();
    focusOn('input:invalid', form.current as HTMLFormElement);
  }, []);

  const isTooLong = playlist.length > CREATE.MAX_QUANTITY;

  return (
    <>
      <form
        name="create_playlist"
        onSubmit={createPlaylist}
        onInvalid={invalidForm}
        onReset={() => {
          resetInputs();
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
        <button
          type="button"
          onClick={appendNewTrack}
          accessKey="a"
          disabled={isTooLong}
        >
          추가하기
        </button>
        {isTooLong && (
          <p role="alert" aria-live="polite">
            최대 {CREATE.MAX_QUANTITY}개까지만 가능합니다. :(
          </p>
        )}
      </form>
    </>
  );
};

export default PlaylistForm;
