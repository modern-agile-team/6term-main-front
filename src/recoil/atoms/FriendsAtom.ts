//백엔드에서 내려받는 데이터 변경 후 다시 관리
//채팅에서는 아직 사용 X

import { atom } from 'recoil';

export interface FriendInfo {
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
