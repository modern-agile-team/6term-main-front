import instance from '../axiosInstance';
import { AxiosResponse } from 'axios';

export interface ResponseFriendData {
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
export interface ResponseFriend {
  data: ResponseFriendData[];
}

const FriendRESPONSE = {
  path: '/friends',
  // 내가 요청 받은 친구 목록 api(get)
  async getResponsedList(): Promise<any> {
    const result: AxiosResponse<any> = await instance.get(
      `${FriendRESPONSE.path}/responses/pending`,
    );
    return result.data;
  },

  // 친구 요청 수락 api(patch)
  async friendAccept(friendId: number): Promise<any> {
    const result: AxiosResponse<any> = await instance.patch(
      `${FriendRESPONSE.path}/responses/accept/${friendId}`,
      {
        params: {
          friendId: friendId,
        },
      },
    );
    return result;
  },

  // 친구 요청 거절 api(patch)
  async friendReject(friendId: number): Promise<any> {
    const result: AxiosResponse<any> = await instance.patch(
      `${FriendRESPONSE.path}/responses/reject/${friendId}`,
      {
        params: {
          friendId: friendId,
        },
      },
    );
    return result;
  },

  // 친구 요청 영구 거절 api(patch)
  async friendRejectPermanent(friendId: number): Promise<any> {
    const result: AxiosResponse<any> = await instance.patch(
      `${FriendRESPONSE.path}/responses/reject/permanent/${friendId}`,
      {
        params: {
          friendId: friendId,
        },
      },
    );
    return result;
  },
};

export default FriendRESPONSE;
