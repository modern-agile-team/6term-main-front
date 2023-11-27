import * as S from './styled';
import React from 'react';
import ListFriend from '@/components/molecules/friend-list/ListFriend';
import ListResponsed from '@/components/molecules/friend-list/ListFriendResponsed';
import ListRequested from '@/components/molecules/friend-list/ListFriendRequested';
import ListRejected from '@/components/molecules/friend-list/ListFriendRejected';

interface RelationType {
  hide: () => void;
  owner: boolean;
}

const RelationLists = (props: RelationType) => {
  return (
    <div>
      <S.ControlBox onClick={props.hide}>X</S.ControlBox>
      <S.Container>
        <S.ListBox>
          <ListFriend /> {/*친구목록*/}
        </S.ListBox>
        {props.owner && (
          <div>
            <S.ListBox>
              <ListResponsed /> {/*요청받은 목록*/}
            </S.ListBox>
            <S.ListBox>
              <ListRequested /> {/*요청보낸목록*/}
            </S.ListBox>
            <S.ListBox>
              <ListRejected /> {/*영구거절목록*/}
            </S.ListBox>
          </div>
        )}
      </S.Container>
    </div>
  );
};

export default RelationLists;
