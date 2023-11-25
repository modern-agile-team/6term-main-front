import USERS from '@/apis/user';
import * as S from './styled';
import { useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { CommentLoadAtom } from '@/recoil/atoms/CommentAtom';
import COMMENTS from '@/apis/comments';
import { LoginStateAtom } from '@/recoil/atoms/LoginStateAtom';

interface UserType {
  id: number;
  userName: string;
  userImage: string;
}

interface BoardId {
  id: number;
}

const PostCreateComment = (props: BoardId) => {
  const loginState = useRecoilValue(LoginStateAtom);
  const [userInfo, setUserInfo] = useState<UserType>({
    id: 0,
    userName: '',
    userImage: '',
  });
  const [getCreateInput, setCreateInput] = useState('');
  const setCreateComment = useSetRecoilState(CommentLoadAtom);
  //생성값 불러오기
  const handleCreateCommentInput = (e: any) => {
    setCreateInput(e.target.value);
  };

  //댓글 등록 핸들러
  const handleUploadComment = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loginState) {
      if (confirm('댓글을 등록하시겠습니까?')) {
        const response = await COMMENTS.createCommentApi(
          getCreateInput,
          props.id,
        );
        //로드 없이 댓글 생성
        setCreateComment((prev) => {
          return {
            ...prev,
            id: response.id,
            content: getCreateInput,
            user: {
              name: userInfo.userName,
              userImage: {
                id: 0,
                userId: userInfo.id,
                imageUrl: userInfo.userImage,
              },
            },
          };
        });
      }
    } else {
      alert('로그인이 필요합니다.');
    }
    setCreateInput('');
  };

  //본인 정보 받아오는 api 호출
  const getUserInfo = async () => {
    const response = await USERS.getMyProfile();
    setUserInfo((prev) => {
      return {
        ...prev,
        userId: response.id,
        userName: response.name,
        userImage: response.userImage,
      };
    });
  };
  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <S.CommentContainer>
      <S.ComponentHeader>댓글 작성</S.ComponentHeader>
      <form onSubmit={handleUploadComment}>
        <S.CreateCommentBox>
          {loginState ? (
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
              onChange={handleCreateCommentInput}
              value={getCreateInput}
            />
            <S.CreateCommentButton type="submit">등록</S.CreateCommentButton>
          </S.FlexBox>
        </S.CreateCommentBox>
      </form>
    </S.CommentContainer>
  );
};

export default PostCreateComment;
