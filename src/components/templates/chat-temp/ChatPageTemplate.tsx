import React from 'react';
import * as S from './styled';
import ChatRoom from '@/components/organisms/chat-renewal/ChatRoom';
import ChatSpace from '@/components/organisms/chat-renewal/ChatSpace';
import { chatRoomAtom } from '@/recoil/atoms/ChatRoomAtom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { chatHistoryAtom } from '@/recoil/atoms/ChatHistoryAtom';

const ChatPageTemplate = () => {
  return (
    <S.ChatPageContainer>
      <ChatRoom />
      <ChatSpace />
    </S.ChatPageContainer>
  );
};

export default ChatPageTemplate;
