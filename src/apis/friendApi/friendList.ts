import instance from '../axiosInstance';
import { Axios, AxiosResponse } from 'axios';

// 친구 목록의 상태...등등
type Friend = {
  id?: number;
  requesterId: number;
  respondendtId: number;
  status: string;
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
    return result;
  },

  // 내가 요청 보낸 친구 목록 api(get)
  async requestedList(): Promise<any> {
    const result: AxiosResponse = await instance.get<Friend>(`${FRIENDS.path}/requests/pending`)
    return result;
  },

  // 내가 요청 받은 친구 목록 api(get)
  async responseList(): Promise<any> {
    const result: AxiosResponse = await instance.get<Friend>(`${FRIENDS.path}/responses/pending`)
    return result;
  },

  // 차단 목록
};
