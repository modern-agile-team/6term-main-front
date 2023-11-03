import { AxiosResponse } from 'axios';
import instance from './axiosInstance';

const USERS = {
  path: '/user',

  //유저정보조회api
  async getUserProfile(): Promise<any> {
    const result: AxiosResponse = await instance.get(`${USERS.path}/info/63`);
    return result.data;
  },
};

export default USERS;
