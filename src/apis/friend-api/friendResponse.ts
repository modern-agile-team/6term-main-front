import instance from '../axiosInstance';
import { AxiosResponse } from 'axios';

export interface ResponseFriend {
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

const RESPONSE = {
  path: '/friends',
  // 내가 요청 받은 친구 목록 api(get)
  async responsedList(): Promise<any> {
    const result: AxiosResponse<any> = await instance.get(
      `${RESPONSE.path}/responses/pending`,
    );
    return result.data;
  },

  // 친구 요청 수락 api(patch)
  async friendAccept(friendId: number): Promise<any> {
    const result: AxiosResponse<any> = await instance.patch(
      `${RESPONSE.path}/reponses/accept/${friendId}`,
      {
        friendId: friendId,
      },
    );
    return result;
  },

  // 친구 요청 거절 api(patch)
  async friendRefuse(friendId: number): Promise<any> {
    const result: AxiosResponse<any> = await instance.patch(
      `${RESPONSE.path}/reponses/reject/${friendId}`,
      {
        friendId: friendId,
      },
    );
    return result;
  },

  // 친구 요청 영구 거절 api(patch)
  async friendReject(friendId: number): Promise<any> {
    const result: AxiosResponse<any> = await instance.patch(
      `${RESPONSE.path}/reponses/reject/permanent/${friendId}`,
      {
        friendId: friendId,
      },
    );
    return result;
  },
};

export default RESPONSE;
