import axios from 'axios';
import instance from './axiosInstance';

const AUTH = {
  path: '/auth',
  async getToken(com: string, code: string): Promise<any> {
    try {
      const result = await instance.get(`${AUTH.path}/${com}/login`, {
        params: {
          code: code,
        },
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return result.data;
    } catch (err) {
      console.log(err);
    }
  },
};

export default AUTH;
