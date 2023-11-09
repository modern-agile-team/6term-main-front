import { useEventCallback } from '@mui/material';
import * as S from './styled';
import React, { useState } from 'react';
import FriendList from '@/components/organisms/friend-list/ListFriend';
import FriendResponse from '@/components/organisms/friend-list/ListResponsed';
import FriendRequest from '@/components/organisms/friend-list/ListRequested';
import UserRejected from '@/components/organisms/friend-list/ListRejected';
import { useRouter } from 'next/router';

const RelationLists = () => {
  const router = useRouter();
  console.log(router);
  return (
    <S.Container>
      <S.ListBox>
        <FriendList />
        <FriendResponse />
        <FriendRequest />
        <UserRejected />
      </S.ListBox>
    </S.Container>
  );
};

export default RelationLists;
