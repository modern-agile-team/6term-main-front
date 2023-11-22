import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useRecoilState, useRecoilValue } from 'recoil';
import USERS, { UserInfo } from '@/apis/user';
import { MyProfileAtom } from '@/recoil/atoms/MyProfile';

export const ChatIcon = () => {
  const [myProfile, setMyprofile] = useRecoilState(MyProfileAtom);
  const getMyProfile = async () => {
    const myInfo = await USERS.getMyProfile();
    setMyprofile(myInfo);
  };
  useEffect(() => {
    getMyProfile();
  });

  const handleChatPage = () => {
    const myId = useRecoilValue(MyProfileAtom);
  };

  return <></>;
};

export default ChatIcon;
