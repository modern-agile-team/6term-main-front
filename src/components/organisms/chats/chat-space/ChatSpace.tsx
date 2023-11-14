import React, { useEffect } from 'react';
import * as S from './styled';
import DMFriendList from '../../../molecules/chat-list/ChatDMFriendList';
import DMList from '../../../molecules/chat-list/ChatDMList';
import Chatting from '../chatting/Chatting';
// import ChattingRoom from '../chat-room/ChatRoom';
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
          <Chatting />
        </S.Chats>
      </S.ChatSpaceWrapper>
    </div>
  );
};

export default ChatSpace;
