import { atom } from 'recoil';
import { DMUserDummy } from '@/apis/DMUserDummy';

export type DMUserDummyType = {
  id: number;
  name: string;
};

// export type ChatRoomType = {
//   id: number;
//   name: string;
//   room: number;
// };

export const DMDummyAtom = atom<DMUserDummyType[]>({
  key: 'userDummy',
  default: DMUserDummy,
});
