import { atom } from 'recoil';

export const searchBoardAtom = atom({
  key: 'searchBoard',
  default: '',
});

export const searchStateAtom = atom({
  key: 'searchState',
  default: false,
});
