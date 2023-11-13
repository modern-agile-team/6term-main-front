import { AxiosResponse } from 'axios';
import instance from './axiosInstance';

const AUTHS = {
  path: '/auth',
  async getToken(provider: string, code: string | null): Promise<any> {
    try {
      const result: AxiosResponse = await instance.get(
        `${AUTHS.path}/${provider}/login`,
        {
          params: {
            code: code,
          },
          headers: {
            credentials: true,
          },
        },
      );
      return result.data;
    } catch (err) {
      console.log(err);
    }
  },

  //logoutApi [post요청]
  async handleLogout(provider: string): Promise<any> {
    const result: AxiosResponse = await instance.post(
      `${AUTHS.path}/${provider}/logout`,
    );
    return result;
  },
};

export default AUTHS;
