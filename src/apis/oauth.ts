import axios from 'axios';
import instance from './axiosInstance';

const AUTH = {
  path: '/auth',
  async getToken(com: string, code: string): Promise<any> {
    try {
      const result = await instance.post(`${AUTH.path}/${com}/login`, code);
      return result;
    } catch (err) {
      console.log(err);
    }
  },
};

export default AUTH;
