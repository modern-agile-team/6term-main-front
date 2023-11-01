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
  const [floatingPosition, setFloatingPosition] = useState(200);

  useEffect(() => {
    const handleScroll = () => {
      setFloatingPosition(window.scrollY);
    };

    const handleResize = () => {
      setFloatingPosition(200);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const router = useRouter();
  const { isOpenModal: chatState, handleModal: chatHandle } = useModal();

  return (
    <S.FloatingBox position={floatingPosition}>
      <a>
        <S.ScrollButotn>
          <MdKeyboardArrowUp onClick={scrollToTop} />
        </S.ScrollButotn>
      </a>
      <Link legacyBehavior href="/search/SearchFriends">
        <a>
          <S.FriendSearchIcon>
            <MdOutlineSearch />
          </S.FriendSearchIcon>
        </a>
      </Link>
      <UserIcon />
      <a>
        <S.ChatIcon onClick={chatHandle}>
          <IoMdChatbubbles />
        </S.ChatIcon>
        {chatState && <ChatModal show={chatState} hide={chatHandle} />}
      </a>
      <a>
        <S.ScrollButotn>
          <MdKeyboardArrowDown onClick={scrollToBottom} />
        </S.ScrollButotn>
      </a>
    </S.FloatingBox>
  );
};

export default FloatingBar;
