import { atom } from 'recoil';
import { FriendsDummy } from '@/apis/FriendsDummy';

export type FriendsType = {
  id: number;
  name: string;
};

export const FriendsAtom = atom<FriendsType[]>({
  key: 'friendsdummy',
  default: FriendsDummy,
});
