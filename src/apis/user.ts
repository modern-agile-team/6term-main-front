import { AxiosResponse } from 'axios';
import instance from './axiosInstance';
import { rejects } from 'assert';

export interface UserInfo {
  userId: number;
  name: string;
  email: string;
  gender: string;
  admin: boolean;
  provider: string;
  userImage: string;
  owner: boolean;
}

const USERS = {
  path: '/user',

  //내 정보조회 api
  async getMyProfile(): Promise<UserInfo> {
    try {
      const result: AxiosResponse = await instance.get(`${USERS.path}/my-info`);
      return result.data;
    } catch (error: any) {
      // if (error.response && error.response.status === 403) {
      //   // 403 에러 발생 시 로그인하지 않은 상태로 간주하고 빈 객체 반환
      //   return {} as UserInfo;
      // }
      // 다른 에러는 그대로 throw
      throw error;
    }
  },

  //유저정보조회api
  async getUserProfile(id: number): Promise<any> {
    try {
      const result: AxiosResponse = await instance.get(
        `${USERS.path}/my-info/${id}`,
      );
      return result.data;
    } catch (error) {
      return Promise.reject(error);
    }
  },

  async modifedUserImage(image: FormData): Promise<any> {
    const result: AxiosResponse = await instance.patch(
      `${USERS.path}/image`,
      image,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    return result.data;
  },
};

export default USERS;
