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

  return (
    <S.CommentContainer>
      <S.ComponentHeader>댓글</S.ComponentHeader>
      <S.CreateCommentBox>
        <S.FlexBox>
          <UserIcon />
          <div>{commentData.userName}</div>
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
        {commentData.reply !== undefined &&
          commentData.reply.map(data => {
            return (
              <>
                <S.FlexBox side="0px 0px 0px 18px">
                  <BsArrowReturnRight />
                  <UserIcon />
                  <div>{data.userName}</div>
                  <S.Comment>{data.comment}</S.Comment>
                </S.FlexBox>
              </>
            );
          })}
      </S.CreateCommentBox>
    </S.CommentContainer>
  );
};

export default PostComments;
