import { CommentInfo } from '@/components/templates/post-unit-temp/PostUnitTemplate';
import { atom } from 'recoil';

export const CommentLoadAtom = atom<CommentInfo>({
  key: 'commentLoad',
  default: {
    commentId: 1,
    content: '',
    commentOwner: true,
    userId: {
      name: '이재진',
      userImage: {
        id: 16,
        userId: 63,
        imageUrl: '',
      },
    },
  },
});

export const CommentDeleteAtom = atom({
  key: 'commentDel',
  default: 0,
});