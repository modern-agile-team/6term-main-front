import { useEventCallback } from '@mui/material';
import * as S from './styled';
import React, { useState, useEffect } from 'react';
import FriendList from '@/components/organisms/friend-list/ListFriend';
import ResponsedList from '@/components/organisms/friend-list/ListResponsed';
import RequestedList from '@/components/organisms/friend-list/ListRequested';
import RejectedList from '@/components/organisms/friend-list/ListRejected';
import ListFriend from '@/components/organisms/friend-list/ListFriend';
import ListResponsed from '@/components/organisms/friend-list/ListResponsed';
import ListRequested from '@/components/organisms/friend-list/ListRequested';
import ListRejected from '@/components/organisms/friend-list/ListRejected';

const RelationLists = () => {
  return (
    <S.Container>
      <S.ListBox>
        <ListFriend />
        <ListResponsed />
        <ListRequested />
        <ListRejected />
      </S.ListBox>
    </S.Container>
  );
};

export default RelationLists;
