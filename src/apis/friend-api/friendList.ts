import instance from '../axiosInstance';
import { Axios, AxiosResponse, AxiosError } from 'axios';

interface FriendData {
  id: number;
  requesterId: number; //요청 보낸 자
  respondentId: number; // 요청 받은 자
  status: string; // 서로의 상태값(수락, 대기, 영구거절 등)
  createAt: string; // 상태가 변경된 때.
  requester: {
    // 요청 보낸 자
    name: string;
    userImage: {
      imageUrl: string;
    };
  };
  respondent: {
    // 요청 받은 자
    name: string;
    userImage: {
      imageUrl: string;
    };
  };
}

export interface Friend {
  data: FriendData[];
}

const FRIENDS = {
  path: '/friends',

  // 친구 요청 api(post)
  async friendRequest(friendId: number): Promise<AxiosResponse<Friend[]>> {
    const result: AxiosResponse<Friend[]> = await instance.post(
      `${FRIENDS.path}/requests/${friendId}`,
      {
        params: {
          friend_id: friendId,
        },
      },
    );
    return result;
  },

  // 친구 목록 조회 api(get)
  async getFriendList(): Promise<any> {
    const result: AxiosResponse<any> = await instance.get(`${FRIENDS.path}`);
    return result.data;
  },

  // 친구 삭제 api(delete)
  async deleteFriend(friendId: number): Promise<any> {
    const result: AxiosResponse<any> = await instance.delete(
      `${FRIENDS.path}/${friendId}`,
      {
        params: {
          friend_Id: friendId,
        },
      },
    );
    return result;
  },
};

export default FRIENDS;
