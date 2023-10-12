import React from 'react';
import { useRecoilState } from 'recoil';
import { ChatModalAtom } from '@/recoil/atoms/ChatModalAtom';

const ChatModal = () => {
  const [isCHatModal, setChatModal] = useRecoilState(ChatModalAtom);

  const handleCloseChat = () => {
    setChatModal(!isCHatModal);
  };

  return <div>채팅 모달</div>;
};
