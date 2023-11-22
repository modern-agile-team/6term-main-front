import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useRecoilState, useRecoilValue } from 'recoil';
import USERS, { UserInfo } from '@/apis/user';
import { MyProfileAtom } from '@/recoil/atoms/MyProfileAtom';
import * as S from './styled';
import { BsChatDots } from 'react-icons/bs';
import Link from 'next/link';
import { inherits } from 'util';

export const ChatIcon = () => {
  const [myProfile, setMyprofile] = useRecoilState(MyProfileAtom);
  const getMyProfile = async () => {
    const myInfo = await USERS.getMyProfile();
    setMyprofile(myInfo);
  };
  useEffect(() => {
    getMyProfile();
  }, []);

  const myId = useRecoilValue(MyProfileAtom);

  return (
    <Link
      legacyBehavior
      href={{
        pathname: `/chat/[id]`,
        query: {
          id: myId.userId,
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
