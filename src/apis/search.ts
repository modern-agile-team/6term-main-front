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
    console.log(result.data);
    return result.data;
  },
};

export default SEARCH;
