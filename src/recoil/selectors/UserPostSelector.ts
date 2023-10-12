import { selector } from 'recoil';
import BOARDS from '@/apis/boards';

export const PostListSelector = selector({
  key: 'userPostSelect',
  get: async () => {
    const result = await BOARDS.getlistAll();
    return result;
  },
});
