import { atom } from 'recoil';

export const SelectBoardAtom = atom({
  key: 'selectBoard',
  default: {
    main: '',
    sub: '',
  },
});
