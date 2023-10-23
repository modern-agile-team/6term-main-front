import { atom } from 'recoil';
import { boardlist } from '@/apis/dummy';

export const SelectBoardAtom = atom({
  key: 'selectBoard',
  default: {
    main: '',
    sub: '',
  },
});

export const TestSelectBoard = atom({
  key: 'testBoard',
  default: boardlist,
});
