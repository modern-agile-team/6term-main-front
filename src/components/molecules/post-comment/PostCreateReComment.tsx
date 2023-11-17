import { useState, useEffect } from 'react';
import * as S from './styled';
import COMMENTS from '@/apis/comments';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { ReCommentLoadAtom } from '@/recoil/atoms/CommentAtom';
import { LoginStateAtom } from '@/recoil/atoms/LoginStateAtom';
import USERS from '@/apis/user';
import { ReCommentCreateType } from '@/components/organisms/post-unit/PostComments';

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
  const [userInfo, setUserInfo] = useState<UserType>({
    userId: 0,
    userName: '',
    userImage: '',
  });
  const setCreateReComment =
    useSetRecoilState<ReCommentCreateType>(ReCommentLoadAtom);
  const loginState = useRecoilValue(LoginStateAtom);

  const handleInputReComment = (e: React.ChangeEvent<HTMLInputElement>) => {
    const event = e.target.value;
    setModifyReComment(event);
  };

  const handleCreateReComment = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await COMMENTS.createReCommentApi(
      commentId,
      modifyReComment,
    );
    setCreateReComment((prev) => {
      return {
        ...prev,
        id: commentId,
        content: modifyReComment,
        user: {
          name: userInfo.userName,
          userImage: {
            userId: userInfo.userId,
            imageUrl: userInfo.userImage,
          },
        },
      };
    });
    setModifyReComment('');
  };

  //본인 정보 받아오는 api 호출
  const getUserInfo = async () => {
    const response = await USERS.getUserProfile();
    setUserInfo((prev) => {
      return {
        ...prev,
        userId: response.userId,
        userName: response.name,
        userImage: response.userImage,
      };
    });
  };
  useEffect(() => {
    getUserInfo();
  }, []);
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
