import React, { useEffect } from 'react';
import * as S from './styled';
import DMFriendList from '../../molecules/chatting/chat-list/ChatDMFriendList';
import DMList from '../../molecules/chatting/chat-list/ChatDMList';
import ChattingRoom from '../chat-room/ChatRoom';
// import DMList from '../chat-dm/ChatDMList';

const ChatSpace = (): JSX.Element => {
  return (
    <div>
      <S.ChatSpaceWrapper>
        <S.ChatLists>
          <S.ChatSpaceName>CrabChat</S.ChatSpaceName>
          <S.ChatListScroll>
            <DMFriendList />
            <br />
            <DMList />
            <br />
          </S.ChatListScroll>
        </S.ChatLists>
        <S.Chats>
          <ChattingRoom/>
        </S.Chats>
      </S.ChatSpaceWrapper>
    </div>
  );
};

export default ChatSpace;
