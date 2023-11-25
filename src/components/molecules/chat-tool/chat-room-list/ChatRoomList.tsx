import React from 'react';
import * as S from './styled';

const ChatRoomList = () => {
  return (
    <S.ChatListWrapper>
      <S.ChatListItem>
        <S.ChatListImage />
        <S.ChatListName>원동건</S.ChatListName>
        <S.ChatListbottom>
          <span>안녕</span>
          <span>14:20</span>
        </S.ChatListbottom>
      </S.ChatListItem>
    </S.ChatListWrapper>
  );
};

export default ChatRoomList;
