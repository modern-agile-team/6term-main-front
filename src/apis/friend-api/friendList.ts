import instance from '../axiosInstance';
import { Axios, AxiosResponse, AxiosError } from 'axios';

// 친구 목록의 상태...등등
interface Friend {
  id?: number;
  // requesterId: number;
  // respondendtId: number;
  // status: string;
}

const FRIENDS = {
  path: '/friends',

  // 친구 목록 조회 api(get)
  async friendList(): Promise<AxiosResponse<Friend[]>> {
    const result: AxiosResponse<Friend[]> = await instance.get(
      `${FRIENDS.path}`,
    );
    return result;
  },

  // 내가 요청 보낸 친구 목록 api(get)
  async requestedList(): Promise<AxiosResponse<Friend[]>> {
    const result: AxiosResponse<Friend[]> = await instance.get(
      `${FRIENDS.path}/requests/pending`,
    );
    return result;
  },

  // 내가 요청 받은 친구 목록 api(get)
  async responsedList(): Promise<AxiosResponse<Friend[]>> {
    const result: AxiosResponse<Friend[]> = await instance.get(
      `${FRIENDS.path}/responses/pending`,
    );
    return result;
  },
  // 이런 식으로도 리팩토링이 가능할까?
  // async responsedList(): Promise<AxiosResponse<Friend[]>> {
  //   return await instance.get(`${FRIENDS.path}/responses/pending`);
  // }

  // 차단 목록(영구 거절) api(get)
  async rejectList(): Promise<AxiosResponse<Friend[]>> {
    const result: AxiosResponse<Friend[]> = await instance.get(
      `${FRIENDS.path}/responses/reject/permanent`,
    );
    return result;
  },

  // 친구 요청 api(post) -> 담아주어야하는 friend_id에 대해 고찰
  // borad.unit 에서 명시한 interface 중 userId-id number를 바꿔 보내주자.
  async friendRequest(friend_id: number): Promise<AxiosResponse<Friend[]>> {
    const result: AxiosResponse<Friend[]> = await instance.post(
      `${FRIENDS.path}/requests/${friend_id}`,
      {
        friend_id: friend_id,
      },
    );
    return result;
  },

  // 친구 요청 수락 api(patch) -> 담아주어야하는 friend_id에 대해 고찰
  // borad.unit 에서 명시한 interface 중 userId-id number를 바꿔 보내주자.
  async friendAccept(friend_id: number): Promise<AxiosResponse<Friend[]>> {
    const result: AxiosResponse<Friend[]> = await instance.patch(
      `${FRIENDS.path}/reponses/accept/${friend_id}`,
      {
        firend_id: friend_id,
      },
    );
    return result;
  },
};

export default FRIENDS;
