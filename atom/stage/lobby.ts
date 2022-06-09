import { atom, selector } from 'recoil';
import userName from '@atom/user';

type GameState = 'standby' | 'ready';
type UserGameState = { id: string; name: string; state: GameState }[];
export const gameReadyState = atom<UserGameState>({
  key: 'gameState',
  default: [],
  effects: [
    ({ onSet }) => {
      onSet((id: any) => {
        console.debug('current id:', id);
      });
    },
  ],
});

export const currentUserState = selector<UserGameState>({
  key: 'currentUserState',
  get: ({ get }) => {
    const name = get(userName);
    return [{ id: name, name, state: 'standby' }];
  },
});
