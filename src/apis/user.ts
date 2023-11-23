import { AxiosResponse } from 'axios';
import instance from './axiosInstance';

export interface UserInfo {
  id: number;
  name: string;
  email: string;
  gender: string;
  admin: boolean;
  provider: string;
  userImage: string;
}

const USERS = {
  path: '/user',

  //유저정보조회api
  async getMyProfile(): Promise<UserInfo> {
    try {
      const result: AxiosResponse = await instance.get(`${USERS.path}/my-info`);
      return result.data;
    } catch (error: any) {
      if (error.response && error.response.status === 403) {
        // 403 에러 발생 시 로그인하지 않은 상태로 간주하고 빈 객체 반환
        return {} as UserInfo;
      }
      // 다른 에러는 그대로 throw
      throw error;
    }
  },
};

export default USERS;
