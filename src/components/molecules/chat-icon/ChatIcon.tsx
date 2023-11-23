import React, { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import * as S from './styled';
import { BsChatDots } from 'react-icons/bs';
import Link from 'next/link';
import { MyProfileSelector } from '@/recoil/selectors/MyProfileSelector';
import { UserInfo } from '@/apis/user';
import { useRouter } from 'next/router';

export const ChatIcon = () => {
  const myProfile: UserInfo = useRecoilValue(MyProfileSelector);
  const myId: number = myProfile.id;

  console.log(myProfile);

  return (
    <Link href="/chat/[id]" as={`/chat/${myId}`}>
      <S.ChatIconButton>
        <div style={{ textDecoration: 'none', color: 'inherit' }}>
          <BsChatDots />
        </div>
      </S.ChatIconButton>
    </Link>
  );
};

export default ChatIcon;
