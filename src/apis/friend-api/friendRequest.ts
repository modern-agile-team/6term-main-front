import instance from '../axiosInstance';
import { AxiosResponse } from 'axios';

export interface RequestFriend {
  data: {
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
  }[];
}

const REQUEST = {
  path: '/friends',

  // 내가 요청 보낸 친구 목록 api(get)
  async requestedList(): Promise<AxiosResponse<RequestFriend[]>> {
    const result: AxiosResponse<any> = await instance.get(
      `${REQUEST.path}/requests/pending`,
    );
    return result.data;
  },
};

export default REQUEST;
