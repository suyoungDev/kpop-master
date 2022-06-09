import type { AtomEffect } from 'recoil';

type AtomEffectFunction = (key: string) => AtomEffect<string>;
export const localStorageEffect: AtomEffectFunction =
  (key: string) =>
  ({ setSelf, onSet }) => {
    if (typeof window === 'undefined') return;

    const savedValue = localStorage.getItem(key);
    if (savedValue != null) return setSelf(JSON.parse(savedValue));

    onSet((newValue: string) => {
      localStorage.setItem(key, JSON.stringify(newValue));
    });
  };
