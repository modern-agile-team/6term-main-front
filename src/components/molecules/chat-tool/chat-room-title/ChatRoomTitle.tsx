import React from 'react';
import * as S from './styled';
import { useRecoilValue } from 'recoil';
import Link from 'next/link';
import { MyProfileSelector } from '@/recoil/selectors/MyProfileSelector';

const ChatRoomTitle = () => {
  const myProFile = useRecoilValue(MyProfileSelector);
  return (
    <S.ChatRoomTitleBox>
      <S.ChatRoomTitleSpan>
        <img
          src={myProFile.userImage}
          alt="myProfileImage"
          style={{
            width: '30px',
            height: '30px',
            borderRadius: '50%',
            marginRight: '10px',
          }}
        />

        {myProFile.name}
      </S.ChatRoomTitleSpan>
      <S.ChatRoomTextSpan>메세지</S.ChatRoomTextSpan>
    </S.ChatRoomTitleBox>
  );
};

export default ChatRoomTitle;
