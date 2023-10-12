import React from 'react';
import * as S from './styled';
import { useRecoilState } from 'recoil';
import { ChatModalAtom } from '@/recoil/atoms/ChatModalAtom';

const ChatModal = () => {
  const [isCHatModal, setChatModal] = useRecoilState(ChatModalAtom);

  const handleCloseChat = () => {
    setChatModal(!isCHatModal);
  };

  return <div>채팅 모달</div>;
};

export default ChatModal;
