import UserIcon from '@/components/common/UserIcon';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { styled } from 'styled-components';
import {
  MdOutlineSearch,
  MdKeyboardArrowUp,
  MdKeyboardArrowDown,
} from 'react-icons/md';
import { IoMdChatbubbles } from 'react-icons/io';
import Link from 'next/link';
import ChatModal from '@/components/molecules/chat-modal/ChatModal';
import useModal from '@/hooks/useModal';

interface FloatingBoxProps {
  position: number;
}

const FloatingBox = styled.div<FloatingBoxProps>`
  margin: 10px;
  position: absolute;
  align-items: center;
  display: flex;
  flex-direction: column;
  top: ${(props) => props.position}px;
  right: 50px;
  /* border: 3px solid #9d9d9d; */
`;
const FriendSearchIcon = styled.div`
  font-size: 30px;
  color: #91c8e4;
`;

const ChatIcon = styled.div`
  font-size: 30px;
  color: #91c8e4;
  cursor: pointer;
`;
const ScrollButotn = styled.div`
  font-size: 30px;
  cursor: pointer;
  opacity: 0.7;
`;

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
    <FloatingBox position={floatingPosition}>
      <a>
        <ScrollButotn>
          <MdKeyboardArrowUp onClick={scrollToTop} />
        </ScrollButotn>
      </a>
      <Link legacyBehavior href="/search/SearchFriends">
        <a>
          <FriendSearchIcon>
            <MdOutlineSearch />
          </FriendSearchIcon>
        </a>
      </Link>
      <UserIcon />
      <a>
        <ChatIcon onClick={chatHandle}>
          <IoMdChatbubbles />
        </ChatIcon>
        {chatState && <ChatModal show={chatState} hide={chatHandle} />}
      </a>
      <a>
        <ScrollButotn>
          <MdKeyboardArrowDown onClick={scrollToBottom} />
        </ScrollButotn>
      </a>
    </FloatingBox>
  );
};

export default FloatingBar;
