import React, { useState, useEffect } from 'react';
import * as S from './styled';
import axios from 'axios';
import FRIENDS from '@/apis/friend-api/friendList';

interface RequestedUser {
  id: number;
  name: string;
}

const FriendRequest = (props: RequestedUser) => {
  const [requestedFriends, setRequestedFriends] = useState([]);
  useEffect(() => {
    const handleRequestedFriends = async () => {
      try {
        const response = await FRIENDS.requestedList();

        setRequestedFriends(response.name.data);
      } catch (error) {
        console.error('요청 보낸 친구 목록을 가져오는 중 오류 발생:', error);
      }
    };

    handleRequestedFriends();
  }, []);

  const handleCancelRequest = () => {
    //요청 취소 -> 만들수도 있고, 일단 보류
  };

  return (
    <div>
      <span>요청 보낸 목록</span>
      {requestedFriends.map((requestUser, index) => (
        <S.UserBox key={index}>{requestUser.name}</S.UserBox>
      ))}
    </div>
  );
};

export default FriendRequest;
