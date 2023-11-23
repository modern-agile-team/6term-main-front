import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import * as S from './styled';
import { BsChatDots } from 'react-icons/bs';
import Link from 'next/link';
import USERS, { UserInfo } from '@/apis/user';
import { MyProfileAtom } from '@/recoil/atoms/MyProfileAtom';

export const ChatIcon = () => {
  const [loginUserProfile, setLoginUserProfile] = useRecoilState(MyProfileAtom);
  const [loginProfile, setLoginProfile] = useState<UserInfo>({
    userId: 0,
    name: '',
    email: '',
    gender: '',
    admin: false,
    provider: '',
    userImage: '',
    owner: false,
  });
  const getMyProfile = async () => {
    const MyProfile = await USERS.getMyProfile();
    setLoginProfile(MyProfile);
    setLoginUserProfile(MyProfile);
  };

  useEffect(() => {
    getMyProfile();
  }, []);

  return (
    <>
      <Link
        legacyBehavior
        href="/chat/[id]"
        as={`/chat/${loginProfile?.userId}`}>
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
