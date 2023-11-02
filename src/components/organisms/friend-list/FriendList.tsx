import { useEventCallback } from '@mui/material';
import * as S from './styled';
import React, { useState } from 'react';

const RelationLists = (): React.JSX.Element => {
  const [getFriendList, setGetFriendList] = useState<any>([]);
  // 친구 목록

  // 내가 보낸 친구 요청 목록

  // 내가 받은 친구 요청 목록

  // 차단 목록

  return (
    <S.Container>
      <S.ListBox>
        <span>친구 목록</span>
        <S.userBox>정비호</S.userBox>
      </S.ListBox>
      <S.ListBox>
        <span>요청 보낸 목록</span>
      </S.ListBox>
      <S.ListBox>
        <span>요청 받은 목록</span>
      </S.ListBox>
      <S.ListBox>
        <span>차단 목록</span>
      </S.ListBox>
    </S.Container>
  );
};

export default RelationLists;
