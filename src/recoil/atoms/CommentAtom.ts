import { CommentInfo } from '@/components/templates/post-unit-temp/PostUnitTemplate';
import { atom } from 'recoil';

export const CommentLoadAtom = atom<CommentInfo>({
  key: 'commentLoad',
  default: {
    id: 0,
    content: '',
    commentowner: true,
    userId: {
      name: '',
      userImage: {
        id: 0,
        userId: 0,
        imageUrl: '',
      },
    },
  },
});

export const CommentDeleteAtom = atom({
  key: 'commentDel',
  default: 0,
});
