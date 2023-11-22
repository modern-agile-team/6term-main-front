import RelationLists from '@/components/organisms/relation-list/RelatioinLists';
import * as S from './styled';
import useModal from '@/hooks/useModal';
import Modal from '@/components/molecules/post-board/Modal';

const MyPageTemplate = () => {
  const { isOpenModal, handleModal } = useModal();

  return (
    <div>
      <S.MyPageContainer>
        <div>
          <div>유저이미지 </div>
          <div>유저이름</div>
          <div>유저 이메일</div>
        </div>
        <div onClick={handleModal}>버튼</div>
      </S.MyPageContainer>
      {isOpenModal && (
        <Modal show={isOpenModal} hide={handleModal}>
          <RelationLists />
        </Modal>
      )}
    </div>
  );
};

export default MyPageTemplate;
