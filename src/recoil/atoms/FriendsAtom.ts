import { atom } from 'recoil';

export type FriendsType = {
  id: number;
  name: string;
};

export const FriendsAtom = atom<FriendsType>({
  key: 'friendslist',
});
