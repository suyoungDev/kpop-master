import React, { useCallback, useState, useEffect } from 'react';
import TrackForm from '@F/TrackForm';
import PageTitle from '@F/PageTitle';
import * as S from './styles';
import useInputs from '@HOOK/useInputs';
import { TrackInfo } from '@TS/track';
import Button from '@F/Button';

const MINIMUM_PLAYLIST_NUMBER = 10;

const PlayListPage = (): JSX.Element => {
  const [disableToSubmit, setDisableToSubmit] = useState(true);

  const {
    inputs: playlist,
    setInputs: setPlaylist,
    onChange: changePlaylist,
    onReset,
    excludeByIndex,
  } = useInputs<TrackInfo>([FORM], FORM);

  useEffect(() => {
    playlist.length > MINIMUM_PLAYLIST_NUMBER ? setDisableToSubmit(false) : setDisableToSubmit(true);
  }, [playlist]);

  const appendPlaylist = useCallback(() => {
    setPlaylist((prev) => [...prev, FORM]);
  }, []);

  const submitPlaylist = useCallback((event) => {
    event.preventDefault();
    // TODO: api 연결
  }, []);

  return (
    <S.Wrapper>
      <PageTitle onButtonClick={appendPlaylist} buttonTitle="플레이리스트 추가">
        유저가 직접 만드는 플레이리스트
      </PageTitle>

      <form onSubmit={submitPlaylist}>
        <S.ListWrapper>
          {playlist.map((track, index) => (
            <TrackForm values={track} setValues={changePlaylist(index)} key={`track_${index}`}>
              <Button label="취소" type="reset" onClick={() => onReset(index)} />
              <Button label="삭제" onClick={() => excludeByIndex(index)} />
            </TrackForm>
          ))}
        </S.ListWrapper>

        <Button label="저장" disabled={disableToSubmit} type="submit" title="최소 10개이상은 해야합니다." />
      </form>
    </S.Wrapper>
  );
};

export default PlayListPage;

const FORM: TrackInfo = { trackName: '', artistName: '', videoId: '' };
