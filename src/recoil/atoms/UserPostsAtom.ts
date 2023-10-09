import { atom } from 'recoil';
import { db } from '@/apis/dammyDate';
import { db2 } from '@/apis/apiData';
import { boardlist } from '@/apis/dummy';

export const UserPostsAtom = atom({
  key: 'UserPosts',
  default: db,
});

type Db2Type = {
  title: string;
  mainText: string;
  img: string;
  name: string;
  board: number;
  thumbnailImg?: string;
};

export const UnitPostAtom = atom<Record<number, Db2Type>>({
  key: 'UnitPosts',
  default: db2,
});

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
