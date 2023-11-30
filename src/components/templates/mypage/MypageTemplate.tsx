import RelationLists from '@/components/organisms/relation-list/RelatioinLists';
import * as S from './styled';
import useModal from '@/hooks/useModal';
import Modal from '@/components/molecules/post-board/Modal';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import MyPageUserInfo from '@/components/organisms/mypage/mypage-userInfo';
import MyPageUserSetting from '@/components/organisms/mypage/mypage-userSetting';
import MyPageBoardInfo from '@/components/organisms/mypage/mypage-boardInfo';
import USERS from '@/apis/user';

export interface UserType {
  id: number;
}

interface UserInfoType {
  id: number;
  name: string;
  email: string;
  admin: boolean;
  provider: string;
  userImage: string;
  owner: boolean;
}

const MyPageTemplate = () => {
  const { isOpenModal, handleModal } = useModal();
  const [getRouterId, setRouterId] = useState(0);
  const [getUserInfo, setUserInfo] = useState<UserInfoType>({
    id: 0,
    name: '',
    email: '',
    admin: false,
    provider: '',
    userImage: '',
    owner: false,
  });
  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      setRouterId(Number(router.query.id));
      userInfoApi();
    }
  }, [router.isReady]);

  const userInfoApi = async () => {
    const response = await USERS.getUserProfile(Number(router.query.id));
    setUserInfo(response);
  };

  return (
    <div>
      <S.MyPageContainer>
        <div>
          <MyPageUserInfo info={getUserInfo} />
          <hr />
          <S.ControlBox onClick={handleModal}>친구목록확인</S.ControlBox>
          <MyPageBoardInfo id={getRouterId} />
          {isOpenModal && (
            <Modal show={isOpenModal} hide={handleModal}>
              <RelationLists hide={handleModal} owner={getUserInfo.owner} />
            </Modal>
          )}
        </div>
      </S.MyPageContainer>
      {getUserInfo.owner && <MyPageUserSetting />}
    </div>
  );
};

export default MyPageTemplate;
