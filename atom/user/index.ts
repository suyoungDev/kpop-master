import { atom } from 'recoil';
import { localStorageEffect } from '@atom/storageEffect';

const userName = atom<string>({
  key: 'userName',
  default: '',
  effects: [localStorageEffect('kpopMaster/user_name')],
});

export default userName;
