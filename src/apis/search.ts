import { AxiosResponse } from 'axios';
import instance from './axiosInstance';

const SEARCH = {
  path: '/search',

  async searchApi(
    part: string,
    search: string,
    page: number,
    limit: number,
    category: string,
  ): Promise<any> {
    try {
      const result: AxiosResponse = await instance.get(
        `${SEARCH.path}/boards/${category}/${part}`,
        {
          params: {
            searchQuery: search,
            page: page,
            limit: limit,
          },
        },
      );
      return result.data;
    } catch (error: any) {
      if (error.response.status === 404) return false;
    }
  },
};

export default SEARCH;
