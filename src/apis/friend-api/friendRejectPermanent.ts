import instance from '../axiosInstance';
import { AxiosResponse } from 'axios';

interface RejectPermanentFriendData {
  id: number;
  requesterId: number;
  respondentId: number;
  status: string;
  createdAt: string;
  requester: {
    name: string;
    userImage: {
      imageUrl: string;
    };
  };
}

export interface RejectPermanentFriend {
  data: RejectPermanentFriendData[];
}

const PermanentREJECT = {
  path: '/friends',

  // 영구 거절한 목록 api(get)
  async getRejectPermanentFriendList(): Promise<any> {
    const result: AxiosResponse<any> = await instance.get(
      `${PermanentREJECT.path}/responses/reject/permanent`,
    );
    return result.data;
  },

  // 친구 요청 영구 거절 취소 api(delete)
  async cancelPermanentRejectFriend(friendId: number): Promise<any> {
    const result: AxiosResponse<any> = await instance.delete(
      `${PermanentREJECT.path}/responses/reject/permanent/${friendId}`,
      {
        params: {
          friendId: friendId,
        },
      },
    );
    return result;
  },
};

export default PermanentREJECT;
