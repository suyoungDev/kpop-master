import { atom } from 'recoil';

const tagStore = atom<string[]>({
  key: 'tagStore',
  default: [],
});

export default tagStore;
