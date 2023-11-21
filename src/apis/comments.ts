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
  async getListAllCommentApi(id: number): Promise<any> {
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
  async deleteCommentApi(id: number): Promise<any> {
    const result: AxiosResponse = await instance.delete(`${COMMENTS.path}`, {
      params: {
        commentId: id,
      },
    });
    return result;
  },

  //comment 수정 api [patch요청]
  async modifedCommentApi(id: number, modify: string): Promise<any> {
    const result: AxiosResponse = await instance.patch(
      `${COMMENTS.path}`,
      {
        content: modify,
      },
      {
        params: {
          commentId: id,
        },
      },
    );
    return result;
  },

  //reComment 생성 api [post요청]
  async createReCommentApi(id: number, recomment: string): Promise<any> {
    const result: AxiosResponse = await instance.post(
      `${COMMENTS.path}/Re`,
      {
        content: recomment,
      },
      {
        params: {
          commentId: id,
        },
      },
    );
    return result.data;
  },

  //reComment 삭제 api [delete요청]
  async deleteReCommentApi(id: number): Promise<any> {
    const result: AxiosResponse = await instance.delete(`${COMMENTS.path}/Re`, {
      params: {
        reCommentId: id,
      },
    });
    return result;
  },

  //reComment 수정 api [patch요청]
  async modifedReCommentApi(id: number, modify: string): Promise<any> {
    const result: AxiosResponse = await instance.patch(
      `${COMMENTS.path}/Re`,
      {
        content: modify,
      },
      {
        params: {
          reCommentId: id,
        },
      },
    );
    return result;
  },
};

export default COMMENTS;
