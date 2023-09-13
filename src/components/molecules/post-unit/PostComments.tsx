import {useState} from 'react';
import {BsArrowReturnRight} from 'react-icons/bs';
import * as S from './styled';
import UserIcon from '@/components/common/UserIcon';

type ReplyType = {userName: string, comment: string, replyId: number};
interface CommentInfo {
  commentData: {
    postId: number,
    commentId: number,
    comment: string,
    reply?: ReplyType[],
    userName: string,
  };
}

const PostComments = (commentData: CommentInfo['commentData']) => {
  const [isShowOptions, setShowOptions] = useState(false);
  const [isCheckToken, setCheckToken] = useState(false);

  const checkToken = () => {
    const token = window.localStorage.get('accessToken');
    token !== undefined ? setCheckToken(true) : setCheckToken(false);
  };

  return (
    <S.CommentContainer>
      <S.ComponentHeader>댓글</S.ComponentHeader>
      <S.CreateCommentBox>
        <S.FlexBox>
          <UserIcon />
          <S.ShowUserName size={20}>{commentData.userName}</S.ShowUserName>
        </S.FlexBox>
        <S.FlexBox>
          <S.CommentArea>{commentData.comment}.</S.CommentArea>
          <S.ComboBox onClick={() => setShowOptions(prev => !prev)}>
            <S.SelectOptions show={isShowOptions}>
              <S.Option>삭제</S.Option>
              <S.Option>수정</S.Option>
            </S.SelectOptions>
          </S.ComboBox>
        </S.FlexBox>
        <S.DivisionLine />
        {commentData.reply !== undefined ? (
          commentData.reply.map(data => {
            return (
              <>
                <S.FlexBox side="0px 0px 0px 18px">
                  <BsArrowReturnRight />
                  <UserIcon />
                  <S.ShowUserName size={18}>{data.userName}</S.ShowUserName>
                  <S.Comment>{data.comment}</S.Comment>
                </S.FlexBox>
              </>
            );
          })
        ) : (
          <S.FlexBox side="0px 0px 0px 18px">
            <BsArrowReturnRight />
            <S.ShowUserName>
              {isCheckToken ? (
                <S.FlexBox>
                  <UserIcon />
                  <div>댓글을 입력해 주세요.</div>
                  <button>등록</button>
                </S.FlexBox>
              ) : (
                <div>로그인이 필요합니다.</div>
              )}
            </S.ShowUserName>
          </S.FlexBox>
        )}
      </S.CreateCommentBox>
    </S.CommentContainer>
  );
};

export default PostComments;
