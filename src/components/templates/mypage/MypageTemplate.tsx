import RelationLists from '@/components/organisms/relation-list/RelatioinLists';
import * as S from './styled';
import useModal from '@/hooks/useModal';
import Modal from '@/components/molecules/post-board/Modal';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import MyPageUserInfo from '@/components/organisms/mypage/mypage-userInfo';

const MyPageTemplate = () => {
  const { isOpenModal, handleModal } = useModal();
  const [getRouterId, setRouterId] = useState(0);
  const router = useRouter();

  useEffect(() => {
    if (router.isReady) setRouterId(Number(router.query.id));
  }, [router.isReady]);

  return (
    <div>
      <S.MyPageContainer>
        <div>
          <MyPageUserInfo id={getRouterId} />
          <hr />
          <S.ControlBox onClick={handleModal}>친구목록확인</S.ControlBox>
          <hr />
          <div>
            <S.ControlBox>본인 작성 글 확인</S.ControlBox>
          </div>
          {isOpenModal && (
            <Modal show={isOpenModal} hide={handleModal}>
              <RelationLists hide={handleModal} />
            </Modal>
          )}
        </div>
      </S.MyPageContainer>
      <S.MyPageContainer>
        <div>
          <div>환경설정</div>
          <hr />
          <div>다크모드</div>
          <div>회원탈퇴</div>
        </div>
      </S.MyPageContainer>
    </div>
  );
};

export default MyPageTemplate;
