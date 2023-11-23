import React, { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import * as S from './styled';
import { BsChatDots } from 'react-icons/bs';
import Link from 'next/link';
import { MyProfileSelector } from '@/recoil/selectors/MyProfileSelector';
import { UserInfo } from '@/apis/user';
import { useRouter } from 'next/router';

export const ChatIcon = () => {
  const myProfile = useRecoilValue(MyProfileSelector);

  console.log(myProfile.userId);

  return (
    <>
      <Link legacyBehavior href="/chat/[id]" as={`/chat/${myProfile.userId}`}>
        <S.ChatIconButton>
          <a style={{ textDecoration: 'none', color: 'inherit' }}>
            <BsChatDots />
          </a>
        </S.ChatIconButton>
      </Link>
    </>
  );
};

export default ChatIcon;
