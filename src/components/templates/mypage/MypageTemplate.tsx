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

  console.log(router);
  useEffect(() => {
    if (router.isReady) setRouterId(Number(router.query.id));
  }, [router.query]);

  return (
    <div>
      <S.MyPageContainer>
        <div>
          <MyPageUserInfo id={Number(router.query.id)} />
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
