import { selectorFamily } from 'recoil';
import BOARDS from '@/apis/boards';

export const UnitPostSelector = selectorFamily({
  key: 'UnitPost',
  get: (id: number) => async () => {
    const result = await BOARDS.boardUnitApi(id);
    return result;
  },
});
