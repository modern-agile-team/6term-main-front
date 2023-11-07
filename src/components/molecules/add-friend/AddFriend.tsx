import React, { useState } from 'react';
import { useRouter } from 'next/router';
import * as S from './styled';
import { BoardInfo } from '../post-board/UnitBox';
import FRIENDS from '@/apis/friend-api/friendList';

interface User {
  id: number;
  name: string;
}

// 친구 추가 API
const AddFriend = (props: User) => {
  const [isFriendAdded, setIsFriendAdded] = useState(false);
  const router = useRouter();
  // 매개변수에 추가할 유저의 id값 받아오기
  const handleAddFriend = async () => {
    const isConfirmed = window.confirm(
      `${props.name}님을 친구로 추가하시겠습니까?`,
    );
    if (isConfirmed) {
      try {
        await FRIENDS.friendRequest(props.id);
        console.log('친구 추가에 성공했습니다.');
        setIsFriendAdded(true);
        const isConfirmed = window.confirm(
          `${props.name} 님이 친구로 추가되었습니다. 목록을 확인하시겠습니까?`,
        );
        if (isConfirmed) {
          router.push('/mypage');
        }
      } catch (error) {
        console.error('친구 추가 중 오류가 발생했습니다:', error);
      }
    }
  };
  return <div onClick={handleAddFriend}>친구 추가 기능 버튼</div>;
};

export default AddFriend;
