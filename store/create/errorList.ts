import { atom } from 'recoil';
import CREATE from '@data/create';

type Error = Record<TrackKey, boolean>;

export const defaultErrorStatus: Error = {
  artistName: false,
  trackName: false,
};

const errorStatus = atom<Error[]>({
  key: 'ErrorStatus',
  default: Array(CREATE.MIN_QUANTITY).fill(defaultErrorStatus),
});

export default errorStatus;
