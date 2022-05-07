import { atom } from 'recoil';

const playlistTitle = atom<string>({
  key: 'playlistTitle',
  default: '플레이리스트 제목을 정해주세요.',
});

export default playlistTitle;
