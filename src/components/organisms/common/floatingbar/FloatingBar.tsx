import UserIcon from '@/components/common/UserIcon';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import * as S from './styled';
import {
  MdOutlineSearch,
  MdKeyboardArrowUp,
  MdKeyboardArrowDown,
} from 'react-icons/md';
import { IoMdChatbubbles } from 'react-icons/io';
import Link from 'next/link';
import ChatModal from '@/components/organisms/chats/chat-modal/ChatModal';
import useModal from '@/hooks/useModal';
import USERS, { UserInfo } from '@/apis/user';
import { useRecoilValue } from 'recoil';
import { MyProfileAtom } from '@/recoil/atoms/MyProfileAtom';

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const scrollToBottom = () => {
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;
  const scrollDifference = documentHeight - window.scrollY - windowHeight;

  window.scrollBy({
    top: scrollDifference,
    behavior: 'smooth',
  });
};

const FloatingBar = () => {
  const MyProfile = useRecoilValue(MyProfileAtom);
  // const [MyProfile.userId, setMyProfile.userId] = useState(0);
  const [floatingPosition, setFloatingPosition] = useState(200);
  const router = useRouter();

  // const handleGetMyId = async () => {
  //   try {
  //     const response = await USERS.getMyProfile();
  //     console.log(response);
  //     setMyProfile.userId(response.userId);
  //   } catch (error: any) {
  //     // 에러가 403일 때는 에러를 출력하지 않도록 조건 추가
  //     if (error.response && error.response.status !== 403) {
  //       console.error(error);
  //     }
  //   }
  // };

  useEffect(() => {
    const handleScroll = () => {
      setFloatingPosition(window.scrollY);
    };

    const handleResize = () => {
      setFloatingPosition(200);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    // handleGetMyId();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMypage = () => {
    router.push({
      pathname: `/mypage/${MyProfile.userId}`,
      query: {
        id: MyProfile.userId,
      },
    });
  };

  const { isOpenModal, handleModal } = useModal();

  return (
    <S.FloatingBox position={floatingPosition}>
      <S.ScrollButotn>
        <MdKeyboardArrowUp onClick={scrollToTop} />
      </S.ScrollButotn>
      <div>
        <S.FriendSearchIcon>
          <MdOutlineSearch />
        </S.FriendSearchIcon>
      </div>
      <div onClick={handleMypage}>
        <UserIcon />
      </div>
      <S.ChatIcon onClick={handleModal}>
        <IoMdChatbubbles />
      </S.ChatIcon>
      {isOpenModal && <ChatModal show={isOpenModal} hide={handleModal} />}
      <S.ScrollButotn>
        <MdKeyboardArrowDown onClick={scrollToBottom} />
      </S.ScrollButotn>
    </S.FloatingBox>
  );
};

export default FloatingBar;
