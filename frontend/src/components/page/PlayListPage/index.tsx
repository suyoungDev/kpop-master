import React, { useCallback } from 'react';
import TrackForm from '@F/TrackForm';
import PageTitle from '@F/PageTitle';
import * as S from './styles';
import useInputs from '@HOOK/useInputs';
import { TrackInfo } from '@TS/track';
import Button from '@F/Button';

const MINIMUM_PLAYLIST_NUMBER = 5;
const PlayListPage = (): JSX.Element => {
  const {
    inputs: playlist,
    setInputs: setPlaylist,
    onChange: changePlaylist,
    onReset,
    excludeByIndex,
  } = useInputs<TrackInfo>(FORM_ARRAY, FORM);

  const appendPlaylist = useCallback(() => {
    setPlaylist((prev) => [...prev, FORM]);
  }, []);

  const submitPlaylist = useCallback((event) => {
    event.preventDefault();
    // TODO: api 연결
  }, []);

  const deleteByIndex = useCallback(
    (index: number) => {
      if (playlist.length > MINIMUM_PLAYLIST_NUMBER) excludeByIndex(index);
      // TODO: Error modal 띄우기
    },
    [playlist],
  );

  return (
    <S.Wrapper>
      <PageTitle onButtonClick={appendPlaylist} buttonTitle="플레이리스트 추가">
        유저가 직접 만드는 플레이리스트
      </PageTitle>

      <form onSubmit={submitPlaylist}>
        <S.ListWrapper>
          {playlist.map((track, index) => (
            <TrackForm track={track} setTrack={changePlaylist(index)} key={`track_${index}`}>
              <Button
                label="취소"
                type="reset"
                onClick={() => onReset(index)}
                title="입력한 내용을 지웁니다."
              />
              <Button label="삭제" onClick={() => deleteByIndex(index)} title="해당 열을 삭제합니다." />
            </TrackForm>
          ))}
        </S.ListWrapper>

        <Button label="저장" type="submit" title={`최소 ${MINIMUM_PLAYLIST_NUMBER}개이상은 해야합니다.`} />
      </form>
    </S.Wrapper>
  );
};

export default PlayListPage;

const FORM: TrackInfo = { trackName: '', artistName: '', videoId: '' };
const FORM_ARRAY: TrackInfo[] = Array.from({ length: 5 }, () => FORM);
