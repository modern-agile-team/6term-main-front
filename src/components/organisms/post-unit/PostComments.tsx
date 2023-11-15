import { useEffect, useState } from 'react';
import { BsArrowReturnRight } from 'react-icons/bs';
import * as S from './styled';
import { CommentInfo } from '@/components/templates/post-unit-temp/PostUnitTemplate';
import useModal from '@/hooks/useModal';
import PostReComment, {
  ReCommentInfo,
} from '../../molecules/post-comment/PostReComment';
import Modal from '@/components/molecules/post-board/Modal';
import {
  CommentDeleteAtom,
  ReCommentLoadAtom,
} from '@/recoil/atoms/CommentAtom';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import COMMENTS from '@/apis/comments';
import PostCreateReComment from '@/components/molecules/post-comment/PostCreateReComment';

export interface ReCommentCreateType {
  id: number;
  content: string;
  reCommentowner: boolean;
  user: {
    name: string;
    userImage: {
      userId: number;
      imageUrl: string;
    };
  };
}

const PostComments = (commentData: CommentInfo) => {
  const { isOpenModal, handleModal } = useModal();
  const setCommentDelId = useSetRecoilState(CommentDeleteAtom);
  const [modifyComment, setModifyComment] = useState(commentData.content);
  const [isModifyState, setIsModifyState] = useState(false);
  const [getReCommnetList, setReCommentList] = useState<ReCommentCreateType[]>(
    commentData.reComment,
  );
  const getCreateReComment =
    useRecoilValue<ReCommentCreateType>(ReCommentLoadAtom);

  //댓글 삭제 핸들러
  const handleDelComment = async () => {
    handleModal();
    if (confirm('댓글을 삭제하시겠습니까?')) {
      await COMMENTS.commetDelApi(commentData.id);
      setCommentDelId(commentData.id);
    }
  };

  //댓글 수정 핸들러
  const handleModifyComment = async () => {
    handleModal();
    setIsModifyState(true);
  };

  const handleInputComment = (e: React.ChangeEvent<HTMLInputElement>) => {
    const event = e.target.value;
    setModifyComment(event);
  };

  //확인 버튼 핸들러
  const handleDone = async () => {
    setIsModifyState(false);
    await COMMENTS.commetModifyApi(commentData.id, modifyComment);
  };

  //대댓글 추가시 새로고침하지 않고, 값 추가
  useEffect(() => {
    if (getCreateReComment.content.length !== 0) {
      setReCommentList((prev) => [...prev, getCreateReComment]);
    }
  }, [getCreateReComment]);

  useEffect(() => {
    console.log(getReCommnetList);
  }, []);

  return (
    <S.CommentContainer>
      <S.CreateCommentBox>
        <S.FlexBox>
          <S.CommentUserImage img={commentData.user.userImage.imageUrl} />
          <S.ShowUserName size={20}>{commentData.user.name}</S.ShowUserName>
        </S.FlexBox>
        <S.FlexBox>
          <S.CommentArea>
            {isModifyState ? (
              <div>
                <input
                  type="text"
                  onChange={handleInputComment}
                  value={modifyComment}
                />
                <button onClick={handleDone}>확인</button>
              </div>
            ) : (
              modifyComment
            )}
          </S.CommentArea>
          {commentData.commentowner && (
            <div>
              {isOpenModal && (
                <Modal show={isOpenModal} hide={handleModal}>
                  <div>
                    <S.Option onClick={handleDelComment}>삭제</S.Option>
                    <S.Option onClick={handleModifyComment}>수정</S.Option>
                  </div>
                </Modal>
              )}
              <div onClick={handleModal}>...</div>
            </div>
          )}
        </S.FlexBox>
        {getReCommnetList.map((data, idx) => {
          return (
            <div key={idx}>
              <PostReComment reComment={data} />
            </div>
          );
        })}
        <S.DivisionLine />
        <S.FlexBox side="0px 0px 0px 18px">
          <BsArrowReturnRight />
          <S.ShowUserName>
            <PostCreateReComment commentId={commentData.id} />
          </S.ShowUserName>
        </S.FlexBox>
      </S.CreateCommentBox>
    </S.CommentContainer>
  );
};

export default PostComments;
