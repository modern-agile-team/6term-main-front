import { atom } from 'recoil';
import { DMUserDummy } from '@/apis/chat-dummy/DMUserDummy';

export type DMUserDummyType = {
  id: number;
  name: string;
};

export const DMDummyAtom = atom<DMUserDummyType[]>({
  key: 'userDummy',
  default: DMUserDummy,
});
