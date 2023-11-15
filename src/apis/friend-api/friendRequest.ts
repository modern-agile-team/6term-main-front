import instance from '../axiosInstance';
import { AxiosResponse } from 'axios';

interface RequestFriendData {
  id: number;
  requesterId: number;
  respondentId: number;
  status: string;
  createdAt: string;
  respondent: {
    name: string;
    userImage: {
      imageUrl: string;
    };
  };
}

export interface RequestFriend {
  data: RequestFriendData[];
}

const FriendREQUEST = {
  path: '/friends',
  // 내가 요청 보낸 친구 목록 api(get)
  async getRequestedList(): Promise<any> {
    const result: AxiosResponse<any> = await instance.get(
      `${FriendREQUEST.path}/requests/pending`,
    );
    return result.data;
  },
};

export default FriendREQUEST;
