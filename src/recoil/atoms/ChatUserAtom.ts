import { atom } from 'recoil';
import { ChatUserDummy } from '@/components/molecules/chatting/direct-message/ChatUserDummy';

export type chatUserType = {
  id: number;
};

export const UserDummyAtom = atom<chatUserType>({
  key: 'userdummy',
  default: {
    id: 1,
  },
});
