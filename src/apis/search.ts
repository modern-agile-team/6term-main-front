import { AxiosResponse } from 'axios';
import instance from './axiosInstance';
import { useRouter } from 'next/router';

const SEARCH = {
  path: '/search',
  async searchApi(
    part: string,
    search: string,
    page: number,
    limit: number,
    category: string,
  ): Promise<any> {
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
  },
};

export default SEARCH;
