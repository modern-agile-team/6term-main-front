import { atom } from 'recoil';

export interface FriendInfo {
  isMe: boolean;
  requesterId: number;
  requesterName: string;
  requesterImage: string;
  respondentId: number;
  respondentName: string;
  respondentImage: string;
}

export const friendInfoState = atom<FriendInfo[]>({
  key: 'friendInfoState',
  default: [],
});
