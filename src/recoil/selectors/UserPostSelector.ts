import { selectorFamily } from 'recoil';
import BOARDS from '@/apis/boards';

export const UnitPostSelector = selectorFamily({
  key: 'UnitPost',
  get: (id: number) => async () => {
    if (!Number.isNaN(id)) {
      const result = await BOARDS.boardUnitApi(id);
      return result;
    }
  },
});
