import React, { useState, useEffect } from 'react';
import * as S from './styled';
import { useRecoilState, useRecoilValue } from 'recoil';
import { chatRoomAtom } from '@/recoil/atoms/ChatRoomAtom';
import { useRouter } from 'next/router';
import useNavigator from '@/hooks/useNavigator';
import { MyProfileAtom } from '@/recoil/atoms/MyProfileAtom';

const ChatRoomList = () => {
  const navigateList = useNavigator();
  const [chatRooms, setChatRooms] = useRecoilState(chatRoomAtom);
  const [selectedRoomId, setSelectedRoomId] = useState<string | null>(null);
  const handleListSelected = (roomId: string) => {
    const queryParams = {
      roomId: roomId,
    };
    navigateList(`/chat/${roomId}`, queryParams);
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
