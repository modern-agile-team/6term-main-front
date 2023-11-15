import { useState, useEffect } from 'react';
import * as S from './styled';
import COMMENTS from '@/apis/comments';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { ReCommentLoadAtom } from '@/recoil/atoms/CommentAtom';
import { LoginStateAtom } from '@/recoil/atoms/LoginStateAtom';
import USERS from '@/apis/user';
import { ReCommentCreateType } from '@/components/organisms/post-unit/PostComments';

interface PropsCommentType {
  commentId: number;
}

interface UserType {
  userId: number;
  userName: string;
  userImage: string;
}

const PostCreateReComment = ({ commentId }: PropsCommentType) => {
  const [modifyReComment, setModifyReComment] = useState('');
  const [userInfo, setUSerInfo] = useState<UserType>({
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

  const handleCreateReComment = async () => {
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
    setUSerInfo((prev) => {
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
        <S.FlexBox>
          <input
            type="text"
            placeholder="댓글을 입력해주세요"
            onChange={handleInputReComment}
            value={modifyReComment}
          />
          <button onClick={handleCreateReComment}>등록</button>
        </S.FlexBox>
      ) : (
        <div>로그인이 필요합니다.</div>
      )}
    </div>
  );
};

export default PostCreateReComment;
