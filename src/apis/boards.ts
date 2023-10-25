import { rejects } from 'assert';
import instance from './axiosInstance';
import { Axios, AxiosResponse } from 'axios';

type Post = {
  id?: number;
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
    const result: AxiosResponse = await instance.post<Post>(`${BOARDS.path}`, {
      head: head,
      body: body,
      main_category: main_category,
      sub_category: sub_category,
    });
    return result;
  },

  //이미지 업로드 api
  async createImg(image: FormData, boardId: number): Promise<any> {
    const result: AxiosResponse = await instance.post(
      `${BOARDS.path}/images`,
      image,
      {
        params: {
          boardId: boardId,
        },
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    return result;
  },

  //게시글 리스트 api
  async getlistAll(page: number, limit: number): Promise<any> {
    console.log(page, limit);
    try {
      const result: AxiosResponse = await instance.get(`${BOARDS.path}`, {
        params: {
          page: page,
          limit: limit,
        },
      });
      console.log(result.data);
      return result.data;
    } catch (err) {
      Promise.reject(err);
    }
  },

  //게시글 unit api [get요청]
  async boardUnitApi(id: number): Promise<any> {
    try {
      const result: AxiosResponse = await instance.get(`${BOARDS.path}/unit`, {
        params: {
          boardId: id,
        },
      });
      return result.data;
    } catch (err) {
      console.log(err);
    }
  },

  //게시글 unit 삭제 api [delete요청]
  async boardUnitDeleteApi(id: number): Promise<any> {
    const result: AxiosResponse = await instance.delete(`${BOARDS.path}/${id}`);
    return result.data;
  },

  //게시글 unit 수정 api [patch요청]
  async boardUnitModifyApi({
    id,
    head,
    body,
    main_category,
    sub_category,
  }: Post): Promise<any> {
    const result: AxiosResponse = await instance.patch<Post>(
      `${BOARDS.path}/${id}`,
      {
        id: id,
        head: head,
        body: body,
        main_category: main_category,
        sub_category: sub_category,
      },
    );
    return result.data;
  },

  //게시글 like [post요청]
  async postBoardLikeApi(id: number): Promise<any> {
    const result: AxiosResponse = await instance.post(
      `${BOARDS.path}/like/${id}`,
    );
    return result.data;
  },

  //게시글 like [get요청]
  async getBoardLikeApi(id: number): Promise<any> {
    const result: AxiosResponse = await instance.get(
      `${BOARDS.path}/like/${id}`,
    );
    return result.data;
  },
};

export default BOARDS;
