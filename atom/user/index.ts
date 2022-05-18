import { atom } from 'recoil';

const userName = atom<string>({
  key: 'userName',
  default: '',
});

export default userName;
