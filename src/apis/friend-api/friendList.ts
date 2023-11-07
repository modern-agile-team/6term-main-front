import instance from '../axiosInstance';
import { Axios, AxiosResponse, AxiosError } from 'axios';

// 친구 목록의 상태...등등
interface Friend {
  userName: string;
  userImage: string;
  requesterId: number;
  respondendtId: number;
  status: string;
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
      `${FRIENDS.path}/re sponses/pending`,
    );
    return result;
  },

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
        friend_id: friend_id,
      },
    );
    return result;
  },

  // 친구 요청 거절 api(patch)
  async friendRefuse(friend_id: number): Promise<AxiosResponse<Friend[]>> {
    const result: AxiosResponse<Friend[]> = await instance.patch(
      `${FRIENDS.path}/reponses/reject/${friend_id}`,
      {
        friend_id: friend_id,
      },
    );
    return result;
  },

  // 친구 요청 영구 거절 api(patch)
  async friendReject(friend_id: number): Promise<AxiosResponse<Friend[]>> {
    const result: AxiosResponse<Friend[]> = await instance.patch(
      `${FRIENDS.path}/reponses/reject/permanent/${friend_id}`,
      {
        friend_id: friend_id,
      },
    );
    return result;
  },

  // 친구 요청 영구 거절 취소 api(delete)
  async cancelPermanent(friend_id: number): Promise<AxiosResponse<Friend[]>> {
    const result: AxiosResponse<Friend[]> = await instance.delete(
      `${FRIENDS.path}/reponses/reject/permanent/${friend_id}`,
      {
        data: {
          friend_id: friend_id,
        },
      },
    );
    return result;
  },

  // 친구 삭제 api(delete)
  async deleteFriend(friend_id: number): Promise<AxiosResponse<Friend[]>> {
    const result: AxiosResponse<Friend[]> = await instance.delete(
      `${FRIENDS.path}/${friend_id}`,
      {
        data: {
          friend_id: friend_id,
        },
      },
    );
    return result;
  },
};

export default FRIENDS;
