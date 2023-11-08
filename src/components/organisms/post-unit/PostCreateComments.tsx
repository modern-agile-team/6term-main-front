import USERS from '@/apis/user';
import * as S from './styled';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { CommentLoadAtom } from '@/recoil/atoms/CommentAtom';
import COMMENTS from '@/apis/comments';

interface UserType {
  userId: number;
  userName: string;
  userImage: string;
}

interface BoardId {
  id: number;
}

const PostCreateComment = (props: BoardId) => {
  const [userInfo, setUSerInfo] = useState<UserType>({
    userId: 0,
    userName: '',
    userImage: '',
  });
  const [userState, setUserState] = useState<boolean>(false);
  const [getCreateInput, setCreateInput] = useState<string>('');
  const [getCreateComment, setCreateComment] = useRecoilState(CommentLoadAtom);
  //생성값 불러오기
  const handleCreateCommentInput = (e: any) => {
    setCreateInput(e.target.value);
  };

  //댓글 등록 핸들러
  const handleUploadComment = async () => {
    if (localStorage.getItem('accessToken') !== undefined) {
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
            userId: {
              name: userInfo.userName,
              userImage: {
                id: 0,
                userId: userInfo.userId,
                imageUrl: userInfo.userImage,
              },
            },
          };
        });
      }
    } else {
      alert('로그인이 필요합니다.');
    }
  };
  useEffect(() => {
    console.log(getCreateComment);
  });

  //본인 정보 받아오는 api 호출
  const getUserInfo = async () => {
    const response = await USERS.getUserProfile();
    setUSerInfo((prev) => {
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
