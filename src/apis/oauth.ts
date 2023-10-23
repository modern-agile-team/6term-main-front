import { AxiosResponse } from 'axios';
import instance from './axiosInstance';

const AUTH = {
  path: '/auth',
  async getToken(provider: string, code: string | null): Promise<any> {
    try {
      const result: AxiosResponse = await instance.get(
        `${AUTH.path}/${provider}/login`,
        {
          params: {
            code: code,
          },
        },
      );
      return result.data;
    } catch (err) {
      console.log(err);
    }
  },

  //logoutApi [post요청]
  async handleLogout(provider: string) {
    const result: AxiosResponse = await instance.post(
      `${AUTH.path}/${provider}/logout`,
    );
    return result;
  },
};

export default AUTH;
