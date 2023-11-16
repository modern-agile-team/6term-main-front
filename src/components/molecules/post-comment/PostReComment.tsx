import { BsArrowReturnRight } from 'react-icons/bs';
import * as S from './styled';
import useModal from '@/hooks/useModal';
import Modal from '@/components/molecules/post-board/Modal';
import { useSetRecoilState } from 'recoil';
import { ReCommentDeleteAtom } from '@/recoil/atoms/CommentAtom';
import COMMENTS from '@/apis/comments';
import { useEffect, useRef, useState } from 'react';

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
  const [isModifyState, setModifyState] = useState(false);
  const [modifedReCommentValue, setModifedReCommentValue] = useState(
    reComment.content,
  );
  const focusOnInput = useRef<HTMLInputElement>(null);

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
    setModifyState(true);
  };

  //수정버튼 클릭 시 input에 focus
  useEffect(() => {
    if (focusOnInput.current !== null) {
      focusOnInput.current.disabled = false; //input 비활성화 해제
      focusOnInput.current.focus(); //input에 focus
    }
  }, [isModifyState]);

  //수정내용받아오는 함수
  const handleReCommentValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const event = e.target.value;
    setModifedReCommentValue(event);
  };

  //확인 버튼 핸들러
  const handleDone = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setModifyState(false);
    await COMMENTS.reCommetModifyApi(reComment.id, modifedReCommentValue);
  };

  return (
    <S.FlexBox side="0px 0px 0px 18px">
      <BsArrowReturnRight />
      <S.CommentUserImage img={reComment.user.userImage.imageUrl} />
      <S.ShowUserName size={18}>{reComment.user.name}</S.ShowUserName>
      {isModifyState ? (
        <form onSubmit={handleDone}>
          <input
            type="text"
            onChange={handleReCommentValue}
            value={modifedReCommentValue}
            ref={focusOnInput}
          />
          <button type="submit">확인</button>
        </form>
      ) : (
        <S.Comment>{modifedReCommentValue}</S.Comment>
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
