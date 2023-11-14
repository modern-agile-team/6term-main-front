import { useEventCallback } from '@mui/material';
import * as S from './styled';
import React, { useState, useEffect } from 'react';
import FriendList from '@/components/organisms/friend-list/ListFriend';
import ResponsedList from '@/components/organisms/friend-list/ListResponsed';
import RequestedList from '@/components/organisms/friend-list/ListRequested';
import RejectedList from '@/components/organisms/friend-list/ListRejected';

const RelationLists = () => {
  return (
    <S.Container>
      <S.ListBox>
        <FriendList />
        <ResponsedList />
        <RequestedList />
        <RejectedList />
      </S.ListBox>
    </S.Container>
  );
};

export default RelationLists;
