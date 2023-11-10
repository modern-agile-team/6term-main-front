import React, { useState, useEffect } from 'react';
import * as S from './styled';
import FRIENDS from '@/apis/friend-api/friendList';

interface UserFriend {
  id: number;
  name: string;
}

const FriendList = (props: UserFriend) => {
  const [isDelete, setIsDelete] = useState(false);
  // 친구 삭제 핸들러
  const handleDelete = async () => {
    const isConfirmed = window.confirm(
      `${props.name}님을 친구 목록에서 삭제하시겠습니까?`,
    );
    if (isConfirmed) {
      try {
        await FRIENDS.deleteFriend(props.id);
        console.log('친구 요청을 수락하셨습니다.');
        setIsDelete(true);
      } catch (error) {
        console.error('친구 삭제 중 오류가 발생했습니다.:', error);
      }
    }
  };
  return (
    <div>
      <span>친구 목록</span>
      <S.UserBox>정비호</S.UserBox>
    </div>
  );
};

export default FriendList;
