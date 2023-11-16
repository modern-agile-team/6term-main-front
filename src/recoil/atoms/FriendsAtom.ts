import { atom } from 'recoil';

export interface FriendInfo {
  requesterId: number;
  name: string;
  image: string;
}

export const friendInfoState = atom<FriendInfo | null>({
  key: 'friendInfoState',
  default: null,
});
