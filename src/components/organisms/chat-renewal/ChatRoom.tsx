import React from 'react';
import * as S from './styled';
import ChatRoomTitle from '@/components/molecules/chat-tool/chat-room-title/ChatRoomTitle';
import ChatRoomList from '@/components/molecules/chat-tool/chat-room-list/ChatRoomList';

const ChatRoom = () => {
  return (
    <S.ChatRoomArea>
      <ChatRoomTitle />
      <ChatRoomList />
    </S.ChatRoomArea>
  );
};

export default ChatRoom;
