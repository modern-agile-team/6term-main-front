import { AxiosResponse } from 'axios';
import instance from './axiosInstance';

export interface UserInfo {
  name: string;
  userImage: string;
}

const USERS = {
  path: '/user',

  //유저정보조회api
  async getUserProfile(): Promise<UserInfo> {
    const result: AxiosResponse = await instance.get(`${USERS.path}/my-info`);
    return result.data;
  },
};

export default USERS;
