import { selectorFamily } from 'recoil';
import BOARDS from '@/apis/boards';
import COMMENTS from '@/apis/comments';

export const UnitPostSelector = selectorFamily({
  key: 'UnitPost',
  get: (id: number) => async () => {
    if (!Number.isNaN(id)) {
      const result = await BOARDS.boardUnitApi(id);
      return result;
    }
  },
});

export const CommentListAllSelecor = selectorFamily({
  key: 'commentlist',
  get: (id: number) => async () => {
    const result = await COMMENTS.commentListAllApi(id);
    return result;
  },
});
