import { useEffect, useRef, useState } from 'react';
import { BsArrowReturnRight } from 'react-icons/bs';
import * as S from './styled';
import { CommentInfo } from '@/components/templates/post-unit-temp/PostUnitTemplate';
import useModal from '@/hooks/useModal';
import PostReComment from '../../molecules/post-comment/PostReComment';
import Modal from '@/components/molecules/post-board/Modal';
import {
  CommentDeleteAtom,
  ReCommentDeleteAtom,
  ReCommentLoadAtom,
} from '@/recoil/atoms/CommentAtom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import COMMENTS from '@/apis/comments';
import PostCreateReComment from '@/components/molecules/post-comment/PostCreateReComment';

export interface ReCommentCreateType {
  id: number;
  commentId: number;
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
  const getReCommentDelId = useRecoilValue(ReCommentDeleteAtom);
  const [modifedCommentValue, setModifedCommentValue] = useState(
    commentData.content,
  );
  const [isModifyState, setIsModifyState] = useState(false);
  const [getReCommnetList, setReCommentList] = useState<ReCommentCreateType[]>(
    commentData.reComment,
  );
  const getCreateReComment =
    useRecoilValue<ReCommentCreateType>(ReCommentLoadAtom);
  const focusOnInput = useRef<HTMLInputElement>(null);
  const [tempDelArr, setTempDelArr] = useState<ReCommentCreateType[]>([]);
  const [reCommentIdNumber, setReCommenntIdNumber] = useState(0);

  //댓글 삭제 핸들러
  const handleDelComment = async () => {
    handleModal();
    if (confirm('댓글을 삭제하시겠습니까?')) {
      await COMMENTS.deleteCommentApi(commentData.id);
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
    setModifedCommentValue(event);
  };

  //수정버튼 클릭 시 input에 focus
  useEffect(() => {
    if (focusOnInput.current !== null) {
      focusOnInput.current.disabled = false; //input 비활성화 해제
      focusOnInput.current.focus(); //input에 focus
    }
  }, [isModifyState]);

  //확인 버튼 핸들러
  const handleDone = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsModifyState(false);
    await COMMENTS.modifedCommentApi(commentData.id, modifedCommentValue);
  };

  //대댓글 추가시 새로고침하지 않고, 값 추가
  useEffect(() => {
    if (
      getCreateReComment.content.length > 0 &&
      commentData.id === getCreateReComment.commentId
    ) {
      setReCommentList((prev) => [...prev, getCreateReComment]);
    }
  }, [getCreateReComment]);

  //대댓글 삭제시 새로고침하지 않고, 값 삭제
  useEffect(() => {
    setTempDelArr([]);
    getReCommnetList
      .filter((prev) => {
        return prev.id !== getReCommentDelId;
      })
      .map((data) => {
        setTempDelArr((prev) => [...prev, data]);
      });
  }, [getReCommentDelId]);

  useEffect(() => {
    setReCommentList(tempDelArr);
  }, [tempDelArr]);

  return (
    <S.CommentContainer>
      <S.CreateCommentBox>
        <S.FlexBox>
          <S.CommentUserImage img={commentData.user.userImage.imageUrl} />
          <S.ShowUserName size={20}>{commentData.user.name}</S.ShowUserName>
        </S.FlexBox>
        <S.FlexBox>
          <S.CommentArea>
            <form onSubmit={handleDone}>
              {isModifyState ? (
                <div>
                  <input
                    type="text"
                    onChange={handleInputComment}
                    value={modifedCommentValue}
                    ref={focusOnInput}
                  />
                  <button type="submit">확인</button>
                </div>
              ) : (
                modifedCommentValue
              )}
            </form>
          </S.CommentArea>
          {commentData.commentowner && (
            <div style={{ cursor: 'pointer' }}>
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
