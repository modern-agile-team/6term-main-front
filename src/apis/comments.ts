import { AxiosResponse } from 'axios';
import instance from './axiosInstance';

const COMMENTS = {
  path: '/comments',

  //comment 생성 api [post요청]
  async createCommentApi(contents: string, id: number): Promise<any> {
    const result: AxiosResponse = await instance.post(
      `${COMMENTS.path}`,
      {
        content: contents,
      },
      {
        params: {
          boardId: id,
        },
      },
    );
    return result.data;
  },

  //comment 불러오기 api [get요청]
  async commentListAllApi(id: number): Promise<any> {
    try {
      const result: AxiosResponse = await instance.get(`${COMMENTS.path}`, {
        params: {
          boardId: id,
        },
      });
      console.log(result.data);
      return result.data;
    } catch (err) {
      console.log(err);
    }
  },

  //comment 삭제 api [delete요청]
  async commetDelApi(id: number): Promise<any> {
    const result: AxiosResponse = await instance.delete(`${COMMENTS.path}`, {
      params: {
        commentId: id,
      },
    });
    return result;
  },

  //comment 삭제 api [delete요청]
  async commetModifyApi(id: number): Promise<any> {
    const result: AxiosResponse = await instance.patch(`${COMMENTS.path}`, {
      params: {
        commentId: id,
      },
    });
    return result;
  },
};

export default COMMENTS;
