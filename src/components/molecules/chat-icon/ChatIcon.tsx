import React, { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import * as S from './styled';
import { BsChatDots } from 'react-icons/bs';
import Link from 'next/link';
import { MyProfileSelector } from '@/recoil/selectors/MyProfileSelector';
import { UserInfo } from '@/apis/user';

export const ChatIcon = () => {
  const myProfile: UserInfo = useRecoilValue(MyProfileSelector);
  const myId: number = myProfile.userId;

  console.log(myProfile);

  return (
    <Link
      legacyBehavior
      href={{
        pathname: `/chat/[id]`,
        query: {
          id: myId,
        },
      }}>
      <S.ChatIconButton>
        <a style={{ textDecoration: 'none', color: 'inherit' }}>
          <BsChatDots />
        </a>
      </S.ChatIconButton>
    </Link>
  );
};

export default ChatIcon;
