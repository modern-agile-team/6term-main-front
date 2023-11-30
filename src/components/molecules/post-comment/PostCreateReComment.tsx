import { useState, useEffect } from 'react';
import * as S from './styled';
import COMMENTS from '@/apis/comments';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { ReCommentLoadAtom } from '@/recoil/atoms/CommentAtom';
import { LoginStateAtom } from '@/recoil/atoms/LoginStateAtom';
import USERS from '@/apis/user';
import { ReCommentCreateType } from '@/components/organisms/post-unit/PostComments';
import { MyProfileAtom } from '@/recoil/atoms/MyProfileAtom';

interface PostCreateRCommentProps {
  commentId: number;
}

interface UserType {
  userId: number;
  userName: string;
  userImage: string;
}

const PostCreateReComment = ({ commentId }: PostCreateRCommentProps) => {
  const [modifyReComment, setModifyReComment] = useState('');
  const userInfo = useRecoilValue(MyProfileAtom);
  const setCreateReComment =
    useSetRecoilState<ReCommentCreateType>(ReCommentLoadAtom);
  const loginState = useRecoilValue(LoginStateAtom);

  console.log('Com', commentId);

  const handleInputReComment = (e: React.ChangeEvent<HTMLInputElement>) => {
    const event = e.target.value;
    setModifyReComment(event);
  };

  const handleCreateReComment = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (modifyReComment.length > 1) {
      const response = await COMMENTS.createReCommentApi(
        commentId,
        modifyReComment,
      );
      setCreateReComment((prev) => {
        return {
          ...prev,
          id: response.id,
          commentId: commentId,
          content: modifyReComment,
          user: {
            name: userInfo.name,
            userImage: {
              userId: userInfo.userId,
              imageUrl: userInfo.userImage,
            },
          },
        };
      });
      setModifyReComment('');
    } else {
      alert('너무 짧습니다. 다시 입력해 주시길 바랍니다.');
    }
  };
  return (
    <div>
      {loginState ? (
        <form onSubmit={handleCreateReComment}>
          <S.FlexBox>
            <S.CommentInput
              type="text"
              placeholder="댓글을 입력해주세요"
              onChange={handleInputReComment}
              value={modifyReComment}
            />
            <S.CommentSubmitButton type="submit">등록</S.CommentSubmitButton>
          </S.FlexBox>
        </form>
      ) : (
        <div>로그인이 필요합니다.</div>
      )}
    </div>
  );
};

export default PostCreateReComment;
