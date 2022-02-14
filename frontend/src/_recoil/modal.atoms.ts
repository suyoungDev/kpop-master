import { atom } from 'recoil';

type ModalType = 'error' | 'warning' | 'default';
interface Modal {
  isOpen: boolean;
  type: ModalType;
}

const modalInitialState: Modal = {
  isOpen: false,
  type: 'default',
};

const modal = atom({
  key: 'modalState',
  default: modalInitialState,
});

export default modal;
