import instance from '../axiosInstance';
import { AxiosResponse } from 'axios';

export interface RejectFriend {
  data: {
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
  }[];
}

const REJECT = {
  path: '/friends',

  // 차단 목록(영구 거절) api(get)
  async rejectList(): Promise<any> {
    const result: AxiosResponse<any> = await instance.get(
      `${REJECT.path}/responses/reject/permanent`,
    );
    return result.data;
  },

  // 친구 요청 영구 거절 취소 api(delete)
  async cancelPermanent(friendId: number): Promise<any> {
    const result: AxiosResponse<any> = await instance.delete(
      `${REJECT.path}/responses/reject/permanent/${friendId}`,
      {
        params: {
          friend_Id: friendId,
        },
      },
    );
    return result;
  },
};

export default REJECT;
