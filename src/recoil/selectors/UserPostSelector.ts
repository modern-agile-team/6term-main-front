import { selector, selectorFamily } from 'recoil';
import BOARDS from '@/apis/boards';

export const PostListSelector = selectorFamily({
  key: 'userPostSelect',
  get: (page : number) => async () => {
    const result = await BOARDS.getlistAll(page);
    const response = [...result].reverse();
    return response;
  },
});

export const UnitPostSelector = selectorFamily({
  key: 'UnitPost',
  get: (id: number) => async () => {
    const result = await BOARDS.boardUnitApi(id);
    return result;
  },
});
