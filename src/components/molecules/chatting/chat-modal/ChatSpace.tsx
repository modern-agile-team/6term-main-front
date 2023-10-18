import React, { useEffect } from 'react';
import * as S from './styled';
import DMList from '../chat-dm/ChatDMList';

const ChatSpace = (): JSX.Element => {
  return (
    <div>
      <S.ChatSpaceWrapper>
        {/* <S.ChatSpaces>test</S.ChatSpaces> */}
        <S.ChatLists>
          <S.ChatSpaceName>CrabChet</S.ChatSpaceName>
          <S.ChatListScroll>
            채팅방 List
            <DMList />
          </S.ChatListScroll>
        </S.ChatLists>
        <S.Chats>실제채팅방</S.Chats>
      </S.ChatSpaceWrapper>
    </div>
  );
};

export default ChatSpace;
