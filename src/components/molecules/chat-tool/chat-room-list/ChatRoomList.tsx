import React, { useState, useEffect } from 'react';
import * as S from './styled';
import { useRecoilState } from 'recoil';
import { chatRoomAtom } from '@/recoil/atoms/ChatRoomAtom';

const ChatRoomList = () => {
  const [chatRooms, setChatRooms] = useRecoilState(chatRoomAtom);
  const [selectedRoomId, setSelectedRoomId] = useState<string | null>(null);
  const handleListSelected = (roomId: string) => {
    setSelectedRoomId(roomId);
  };

  useEffect(() => {
    setSelectedRoomId(null);
  }, [chatRooms]);

  const prevText = (text: string, maxLength: number) => {
    return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
  };

  return (
    <S.ChatListWrapper>
      {chatRooms.map((chatRoom) => (
        <S.ChatListItem
          key={chatRoom.roomId}
          onClick={() => handleListSelected(chatRoom.roomId)}
          isSelected={selectedRoomId === chatRoom.roomId}>
          <S.ChatListImage src={chatRoom.guestImage} />
          <S.ChatListRight>
            <S.ChatListName>{chatRoom.guestName}</S.ChatListName>
            <S.ChatListbottom>
              <span>{prevText(chatRoom.prevText, 20)}</span>
              <span>{chatRoom.createdAt}</span>
            </S.ChatListbottom>
          </S.ChatListRight>
        </S.ChatListItem>
      ))}
    </S.ChatListWrapper>
  );
};

export default ChatRoomList;
