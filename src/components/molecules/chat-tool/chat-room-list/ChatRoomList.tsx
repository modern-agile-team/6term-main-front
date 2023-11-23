import React from 'react';
import * as S from './styled';

const ChatRoomList = () => {
  return (
    <S.ChatListWrapper>
      <S.ChatListItem>
        <S.ChatListImage src="https://previews.123rf.com/images/blankstock/blankstock2212/blankstock221202347/195565495-%EC%82%AC%EC%9A%A9%EC%9E%90-%ED%94%84%EB%A1%9C%ED%95%84-%EC%95%84%EC%9D%B4%EC%BD%98-%EB%B2%A1%ED%84%B0%EC%9E%85%EB%8B%88%EB%8B%A4-%EC%95%84%EB%B0%94%ED%83%80-%EB%98%90%EB%8A%94-%EC%82%AC%EB%9E%8C-%EC%95%84%EC%9D%B4%EC%BD%98-%ED%94%84%EB%A1%9C%ED%95%84-%EC%82%AC%EC%A7%84-%EC%84%B8%EB%A1%9C-%EA%B8%B0%ED%98%B8-%EC%A4%91%EB%A6%BD-%EC%84%B1%EB%B3%84-%EC%8B%A4%EB%A3%A8%EC%97%A3-%EC%95%84%EB%B0%94%ED%83%80-%EC%82%AC%EC%A7%84%EC%9D%B4-%EC%9E%88%EB%8A%94-%EC%9B%90-%EB%B2%84%ED%8A%BC-%EB%B9%88-%ED%94%84%EB%A1%9C%ED%95%84.jpg" />
        <S.ChatListRight>
          <S.ChatListName>원동건</S.ChatListName>
          <S.ChatListbottom>
            <span>안녕</span>
            <span>14:20</span>
          </S.ChatListbottom>
        </S.ChatListRight>
      </S.ChatListItem>
    </S.ChatListWrapper>
  );
};

export default ChatRoomList;
