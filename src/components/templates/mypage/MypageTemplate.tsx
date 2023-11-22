import RelationLists from '@/components/organisms/relation-list/RelatioinLists';
import * as S from './styled';
import useModal from '@/hooks/useModal';
import Modal from '@/components/molecules/post-board/Modal';
import { useEffect } from 'react';

const MyPageTemplate = () => {
  const { isOpenModal, handleModal } = useModal();

  useEffect(() => {
    console.log(isOpenModal);
  }, []);

  return (
    <div>
      <S.MyPageContainer>
        <div>
          <S.FlexBox>
            <div>
              <div>유저이미지 </div>
            </div>
            <div>
              <div>유저이름</div>
              <div>유저 이메일</div>
            </div>
          </S.FlexBox>
          <div onClick={handleModal}>친구목록확인</div>
          <div>
            <div>본인 작성 글 확인</div>
          </div>
        </div>
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
