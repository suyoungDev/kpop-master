import { atom, selector } from 'recoil';
import userName from '@atom/user';

type Stage = 'enter' | 'chat' | 'game';
export const stageProgress = atom<Stage>({
  key: 'stageProgress',
  default: 'enter',
});

export const currentState = selector<Stage>({
  key: 'currentState',
  get: ({ get }) => {
    const name = get(userName);

    if (name !== '') return 'chat';
    return 'enter';
  },
});
