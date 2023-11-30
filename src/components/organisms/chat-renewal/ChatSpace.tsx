import React from 'react';
import * as S from './styled';
import ChatSpaceHeader from '@/components/molecules/chat-tool/chat-space-header/ChatSpaceHeader';
import ChatSpaceBody from '@/components/molecules/chat-tool/chat-space-body/ChatSpaceBody';
import ChatSpaceFooter from '@/components/molecules/chat-tool/chat-space-input/ChatSpaceFooter';
import { useRecoilValue } from 'recoil';
import { chatHistoryAtom } from '@/recoil/atoms/ChatHistoryAtom';

const ChatSpace = () => {
  return (
    <S.ChatSpaceArea>
      <ChatSpaceHeader />
      <ChatSpaceBody />
      <ChatSpaceFooter />
    </S.ChatSpaceArea>
  );
};

export default ChatSpace;
