import * as S from './styled';
import React from 'react';
import ListFriend from '@/components/organisms/friend-list/ListFriend';
import ListResponsed from '@/components/organisms/friend-list/ListFriendResponsed';
import ListRequested from '@/components/organisms/friend-list/ListFriendRequested';
import ListRejected from '@/components/organisms/friend-list/ListFriendRejected';

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
