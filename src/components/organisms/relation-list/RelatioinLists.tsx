import * as S from './styled';
import React from 'react';
import ListFriend from '@/components/molecules/friend-list/ListFriend';
import ListResponsed from '@/components/molecules/friend-list/ListFriendResponsed';
import ListRequested from '@/components/molecules/friend-list/ListFriendRequested';
import ListRejected from '@/components/molecules/friend-list/ListFriendRejected';

const RelationLists = () => {
  return (
    <S.Container>
      <S.ListBox>
        <ListFriend /> {/*친구목록*/}
      </S.ListBox>
      <S.ListBox>
        <ListResponsed /> {/*요청받은 목록*/}
      </S.ListBox>
      <S.ListBox>
        <ListRequested /> {/*요청보낸목록*/}
      </S.ListBox>
      <S.ListBox>
        <ListRejected /> {/*영구거절목록*/}
      </S.ListBox>
    </S.Container>
  );
};

export default RelationLists;
