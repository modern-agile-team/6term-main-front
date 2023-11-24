import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import * as S from './styled';
import { BsChatDots } from 'react-icons/bs';
import Link from 'next/link';
import USERS, { UserInfo } from '@/apis/user';
import { LoginStateAtom } from '@/recoil/atoms/LoginStateAtom';
import { MyProfileAtom } from '@/recoil/atoms/MyProfileAtom';

export const ChatIcon = () => {
  const [loginState, setLoginState] = useRecoilState(LoginStateAtom);
  const [loginProfile, setLoginProfile] = useRecoilState(MyProfileAtom);

  const getMyProfile = async () => {
    try {
      if (loginState) {
        const myProfile = await USERS.getMyProfile();
        setLoginProfile(myProfile);
      } else {
        console.log('로그인 한 상태가 아닙니다.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    getMyProfile();
  }, [loginState]);

  return (
    <>
      <Link href="/chat/[id]" as={`/chat/${loginProfile?.userId}`}>
        <S.ChatIconButton>
          <div style={{ textDecoration: 'none', color: 'inherit' }}>
            <BsChatDots />
          </div>
        </S.ChatIconButton>
      </Link>
    </>
  );
};

export default ChatIcon;
