import { CommentInfo } from '@/components/templates/post-unit-temp/PostUnitTemplate';
import { atom } from 'recoil';

export const CommentLoadAtom = atom<CommentInfo>({
  key: 'commentLoad',
  default: {
    commentId: 0,
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
