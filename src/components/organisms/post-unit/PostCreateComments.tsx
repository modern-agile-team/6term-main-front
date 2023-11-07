import USERS from '@/apis/user';
import * as S from './styled';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { CommentLoadAtom } from '@/recoil/atoms/CommentAtom';

interface UserType {
  userName: string;
  userImage: string;
}

const PostCreateComment = () => {
  const [userInfo, setUSerInfo] = useState<UserType>({
    userName: '',
    userImage: '',
  });
  const [userState, setUserState] = useState<boolean>(false);
  const [getCreateInput, setCreateInput] = useState<string>('');
  const [getCreateComment, setCreateComment] = useRecoilState(CommentLoadAtom);

  const handleCreateCommentInput = (e: any) => {
    setCreateInput(e.target.value);
  };

  const handleUploadComment = () => {
    if (localStorage.getItem('accessToken') !== undefined) {
      if (confirm('댓글을 등록하시겠습니까?')) {
        //post api
        setCreateComment((prev) => {
          return {
            ...prev,
            content: getCreateInput,
            commentOwner: userState,
          };
        });
      }
    } else {
      alert('로그인이 필요합니다.');
    }
  };

  const getUserInfo = async () => {
    const response = await USERS.getUserProfile();
    setUSerInfo((prev) => {
      return {
        ...prev,
        userName: response.name,
        userImage: response.userImage,
      };
    });
  };
  useEffect(() => {
    getUserInfo();
    if (localStorage.getItem('accesToken') !== undefined) setUserState(true);
  }, []);

  return (
    <S.CommentContainer>
      <S.ComponentHeader>댓글 작성</S.ComponentHeader>
      <S.CreateCommentBox>
        {userState ? (
          <S.FlexBox>
            <S.CommentUserImage img={userInfo.userImage} />
            <div>{userInfo.userName}</div>
          </S.FlexBox>
        ) : (
          <div>로그인이 필요합니다.</div>
        )}
        <S.FlexBox>
          <S.CommentInputBox
            placeholder="댓글을 작성해 보세요."
            onChange={handleCreateCommentInput}></S.CommentInputBox>
          <S.CreateCommentButton onClick={handleUploadComment}>
            등록
          </S.CreateCommentButton>
        </S.FlexBox>
      </S.CreateCommentBox>
    </S.CommentContainer>
  );
};

export default PostCreateComment;
