import instance from '../axiosInstance';
import { Axios, AxiosResponse } from 'axios';

// 친구 목록의 상태...등등
type Friend = {
  id?: number;
  requesterId: number;
  respondendtId: number;
  status: '친구 수락';
};

const FRIENDS = {
  path: '/friends',

  // 친구 목록 조회 api(get)
  async friendList(): Promise<any> {
    const result: AxiosResponse = await instance.get<Friend>(`${FRIENDS.path}`);
    return result;
  },

  // 친구 요청 api(post)
  async friendRequest(): Promise<any> {
    const result: AxiosResponse = await instance.post<Friend>(
      `${FRIENDS.path}/requests/{friend_id}`,
    );
  },
};
