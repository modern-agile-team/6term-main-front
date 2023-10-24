import { atom } from 'recoil';
import { FriendsDummy } from '@/apis/friendsDummy';

export type FriendsType = {
  id: number;
  name: string;
  roomId: number;
};

export const FriendsAtom = atom<FriendsType[]>({
  key: 'friendList',
  default: FriendsDummy,
});
