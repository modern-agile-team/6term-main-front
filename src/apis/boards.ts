import instance from './axiosInstance';
import { AxiosResponse } from 'axios';

type Post = {
  head: string;
  body: string;
  main_category: string;
  sub_category: string;
};

const BOARDS = {
  path: '/boards',

  //글 업로드 api
  async createPost({
    head,
    body,
    main_category,
    sub_category,
  }: Post): Promise<any> {
    const result: AxiosResponse = await instance.post<Post>(
      `${BOARDS.path}/post`,
      {
        head: head,
        body: body,
        main_category: main_category,
        sub_category: sub_category,
      },
    );
    return result;
  },

  //이미지 업로드 api
  async createImg(image: FormData, boardId: number): Promise<any> {
    const result: AxiosResponse = await instance.post(
      `${BOARDS.path}/${boardId}/images`,
      image,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    return result;
  },

  //게시글 리스트 api
  async getlistAll(): Promise<any> {
    try {
      const result: AxiosResponse = await instance.get(
        `${BOARDS.path}/getall`,
        {
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
          },
        },
      );
      return result.data;
    } catch (err) {
      return Promise.reject(err);
    }
  },
};

export default BOARDS;
