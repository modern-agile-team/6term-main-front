import { ReCommentCreateType } from '@/components/organisms/post-unit/PostComments';
import { CommentInfo } from '@/components/templates/post-unit-temp/PostUnitTemplate';
import { atom } from 'recoil';

export const CommentLoadAtom = atom<CommentInfo>({
  key: 'commentLoad',
  default: {
    id: 0,
    content: '',
    commentowner: true,
    user: {
      name: '',
      userImage: {
        id: 0,
        imageUrl: '',
      },
    },
    reComment: [],
  },
});

export const CommentDeleteAtom = atom({
  key: 'commentDel',
  default: 0,
});

export const ReCommentLoadAtom = atom<ReCommentCreateType>({
  key: 'reCommentLoad',
  default: {
    content: '',
    reCommentowner: true,
    id: 0,
    user: {
      name: '',
      userImage: {
        userId: 0,
        imageUrl: '',
      },
    },
  },
});

export const ReCommentDeleteAtom = atom({
  key: 'reCommentDel',
  default: 0,
});
