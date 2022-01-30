import React, { useCallback } from 'react';
import TrackForm from '@F/TrackForm';
import PageTitle from '@F/PageTitle';
import * as S from './styles';
import useInputs from '@HOOK/useInputs';
import { TrackInfo } from '@TS/track';

const FORM: TrackInfo = { trackName: '', artistName: '', videoId: '' };

const PlayListPage = (): JSX.Element => {
  const {
    inputs: playlist,
    setInputs: setPlaylist,
    onChange: changePlaylist,
  } = useInputs<TrackInfo>([FORM], FORM);

  const appendPlaylist = useCallback(() => {
    setPlaylist((prev) => [...prev, FORM]);
  }, []);

  return (
    <S.Wrapper>
      <PageTitle onButtonClick={appendPlaylist} buttonTitle="플레이리스트 추가">
        유저가 직접 만드는 플레이리스트
      </PageTitle>

      <S.ListWrapper>
        {playlist.map((track, idx) => (
          <TrackForm values={track} setValues={changePlaylist(idx)} key={`track_${idx}`} />
        ))}
      </S.ListWrapper>
    </S.Wrapper>
  );
};

export default PlayListPage;
