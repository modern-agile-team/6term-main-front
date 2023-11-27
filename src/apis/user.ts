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
    } catch (error) {
      return Promise.reject(error);
    }
  },

  //유저정보조회api
  async getUserProfile(id: number): Promise<any> {
    try {
      const result: AxiosResponse = await instance.get(
        `${USERS.path}/info/${id}`,
      );
      return result.data;
    } catch (error) {
      return Promise.reject(error);
    }
  },

  //유저 이미지 수정 [patch요청]
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
  //유저 게시글 get api
  async getUserBoardsApi(id: number): Promise<any> {
    const result: AxiosResponse = await instance.get(
      `${USERS.path}/info-board`,
      {
        params: {
          userId: id,
        },
      },
    );
    return result.data;
  },
};

export default USERS;
