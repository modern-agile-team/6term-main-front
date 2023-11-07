import { BsArrowReturnRight } from 'react-icons/bs';
import * as S from './styled';
import UserIcon from '@/components/common/UserIcon';
import { ReCommentInfo } from './PostComments';
import useModal from '@/hooks/useModal';
import Modal from '@/components/molecules/post-board/Modal';

const PostReComment = (props: ReCommentInfo['reComment'][0]) => {
  const { isOpenModal, handleModal } = useModal();
  return (
    <S.FlexBox side="0px 0px 0px 18px">
      <BsArrowReturnRight />
      <UserIcon />
      <S.ShowUserName size={18}>{props.userId.name}</S.ShowUserName>
      <S.Comment>{props.reComment}</S.Comment>
      {props.reCommentOwner && (
        <div>
          {isOpenModal && (
            <Modal show={isOpenModal} hide={handleModal}>
              <div>
                <S.Option>삭제</S.Option>
                <S.Option>수정</S.Option>
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
