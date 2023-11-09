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
  const [myInfo, setMyInfo] = useState(0);
  const [floatingPosition, setFloatingPosition] = useState(200);
  const router = useRouter();

  const handleGetMyId = async () => {
    const response = await USERS.getUserProfile();
    console.log(response);
    setMyInfo(response.userId);
  };

  useEffect(() => {
    const handleScroll = () => {
      setFloatingPosition(window.scrollY);
    };

    const handleResize = () => {
      setFloatingPosition(200);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    handleGetMyId();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMypage = () => {
    router.push({
      pathname: `/mypage/${myInfo}`,
      query: {
        id: myInfo,
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
      {/* <div onClick={friendOnClink}>
        <UserIcon />
      </div> */}
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
