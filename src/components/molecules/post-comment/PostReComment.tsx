import { BsArrowReturnRight } from 'react-icons/bs';
import * as S from './styled';
import useModal from '@/hooks/useModal';
import Modal from '@/components/molecules/post-board/Modal';
import { useSetRecoilState } from 'recoil';
import { ReCommentDeleteAtom } from '@/recoil/atoms/CommentAtom';
import COMMENTS from '@/apis/comments';
import { useState } from 'react';

export interface ReCommentInfo {
  // reCommentId: number;
  reComment: {
    content: string;
    reCommentowner: boolean;
    id: number;
    user: {
      name: string;
      userImage: {
        // id: number;
        userId: number;
        imageUrl: string;
      };
    };
  };
}

const PostReComment = ({ reComment }: ReCommentInfo) => {
  const { isOpenModal, handleModal } = useModal();
  const setReCommentDelId = useSetRecoilState(ReCommentDeleteAtom);
  const [isModifyState, setIsModifyState] = useState(false);
  const [modifyReComment, setModifyReComment] = useState(reComment.content);

  //대댓글 삭제 핸들러
  const handleDelReComment = async () => {
    handleModal();
    if (confirm('댓글을 삭제하시겠습니까?')) {
      await COMMENTS.reCommetDelApi(reComment.id);
      setReCommentDelId(reComment.id);
    }
  };

  const handleModifyReComment = async () => {
    handleModal();
    setIsModifyState(true);
  };

  const handleInputReComment = (e: React.ChangeEvent<HTMLInputElement>) => {
    const event = e.target.value;
    setModifyReComment(event);
  };

  //확인 버튼 핸들러
  const handleDone = async () => {
    setIsModifyState(false);
    await COMMENTS.reCommetModifyApi(reComment.id, modifyReComment);
  };

  return (
    <S.FlexBox side="0px 0px 0px 18px">
      <BsArrowReturnRight />
      <S.CommentUserImage img={reComment.user.userImage.imageUrl} />
      <S.ShowUserName size={18}>{reComment.user.name}</S.ShowUserName>
      {isModifyState ? (
        <div>
          <input
            type="text"
            onChange={handleInputReComment}
            value={modifyReComment}
          />
          <button onClick={handleDone}>확인</button>
        </div>
      ) : (
        <S.Comment>{modifyReComment}</S.Comment>
      )}
      {reComment.reCommentowner && (
        <div>
          {isOpenModal && (
            <Modal show={isOpenModal} hide={handleModal}>
              <div>
                <S.Option onClick={handleDelReComment}>삭제</S.Option>
                <S.Option onClick={handleModifyReComment}>수정</S.Option>
              </div>
            </Modal>
          )}
          <div onClick={handleModal}>...</div>
        </div>
      )}
    </S.FlexBox>
  );
};

export default PostReComment;
