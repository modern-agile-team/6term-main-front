import instance from '../axiosInstance';
import { AxiosResponse } from 'axios';

export interface ResponseFriend {
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

const RESPONSE = {
  path: '/friend',
  // 내가 요청 받은 친구 목록 api(get)
  async responsedList(): Promise<AxiosResponse<ResponseFriend[]>> {
    const result: AxiosResponse<any> = await instance.get(
      `${RESPONSE.path}/responses/pending`,
    );
    return result.data;
  },
};

export default RESPONSE;
