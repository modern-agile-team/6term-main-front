import React, { useState } from 'react';
import { useRouter } from 'next/router';
import * as S from './styled';
import FRIENDS from '@/apis/friend-api/friendList';
import USERS from '@/apis/user';

interface User {
  id: number;
  name: string;
}

// 친구 추가 API
const AddFriend = (props: User) => {
  const [isFriendAdded, setIsFriendAdded] = useState(false);
  const router = useRouter();
  const handleMypage = async () => {
    try {
      const userInfo = await USERS.getUserProfile();
      const id = userInfo.userId;
      router.push(`/mypage/${id}`);
    } catch (error) {
      console.error('유저 정보를 불러오는 중 오류가 발생했습니다.', error);
    }
  };
  const handleAddFriend = async () => {
    try {
      const userInfo = await USERS.getUserProfile();
      const currentUserId = userInfo.userId;
      const friendId = props.id;
      if (currentUserId === friendId) {
        alert('본인은 친구로 추가할 수 없습니다.');
      } else {
        const isConfirmed = window.confirm(
          `${props.name}님을 친구로 추가하시겠습니까?`,
        );
        if (isConfirmed) {
          await FRIENDS.friendRequest(props.id);
          console.log('친구 추가에 성공했습니다.');
          setIsFriendAdded(true);
          const isConfirmed = window.confirm(
            `${props.name} 님이 친구로 추가되었습니다. 목록을 확인하시겠습니까?`,
          );
          if (isConfirmed) {
            handleMypage();
          }
        }
      }
    } catch (error: any) {
      if (error.response) {
        const statusCode = error.response.status;
        const errorMessage = error.response.data.message;

        if (statusCode === 404 || statusCode === 409 || statusCode === 410) {
          alert(errorMessage);
        } else {
          console.error('친구 추가 중 오류가 발생했습니다:', error);
        }
      }
    }
  };
  console.log(isFriendAdded);
  return <div onClick={handleAddFriend}>친구 추가 기능 버튼</div>;
};

export default AddFriend;
