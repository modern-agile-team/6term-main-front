import { selector, selectorFamily } from 'recoil';
import BOARDS from '@/apis/boards';

export const PostListSelector = selector({
  key: 'userPostSelect',
  get: async () => {
    const result = await BOARDS.getlistAll();
    return result;
  },
});

export const UnitPostSelector = selectorFamily({
  key: 'UnitPost',
  get: (id: number) => async () => {
    const result = await BOARDS.boardUnitApi(id);
    return result;
  },
});
