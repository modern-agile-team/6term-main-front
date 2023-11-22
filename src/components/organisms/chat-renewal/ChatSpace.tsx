import React from 'react';
import * as S from './styled';
import ChatSpaceHeader from '@/components/molecules/chat-tool/chat-space-header/ChatSpaceHeader';
import ChatSpaceBody from '@/components/molecules/chat-tool/chat-space-body/ChatSpaceBody';
import ChatSpaceInput from '@/components/molecules/chat-tool/chat-space-input/ChatSpaceInput';

const ChatSpace = () => {
  return (
    <S.ChatSpaceArea>
      <ChatSpaceHeader />
      <ChatSpaceBody />
      <ChatSpaceInput />
    </S.ChatSpaceArea>
  );
};

export default ChatSpace;
