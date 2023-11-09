import React, { useState, useEffect } from 'react';
import * as S from './styled';
import { ResponseFriend } from '@/apis/friend-api/friendResponse';

const FriendResponse = (props: ResponseFriend) => {
  const [responsedFriend, setResponsedFriend] = useState<ResponseFriend[]>([]);
  const [isAccept, setIsAccept] = useState(false);
  const [isRefuse, setIsRefuse] = useState(false);
  const [isReject, setIsReject] = useState(false);

  useEffect(() => {
    const handleResponsedFriends = async () => {
      try {
        const response = await RESPONSE.responsedList();
        console.log(response)
      }
    }
  })

  //요청 수락 핸들러 -> 요청 수락하면 요청 수락 버튼 삭제
  // -> 삭제 버튼 있는 자리에 '요청을 수락하였습니다.' -> 친구 목록으로 GO
  const handleAccept = async () => {
    const isConfirmed = window.confirm(
      `${props.name}님의 친구 요청을 수락하시겠습니까?`,
    );
    if (isConfirmed) {
      try {
        await FRIENDS.friendAccept(props.id);
        console.log('친구 요청을 수락하셨습니다.');
        setIsAccept(true);
      } catch (error) {
        console.error('친구 요청 수락 중 오류가 발생했습니다:', error);
      }
    }
  };

  //요청 거절 핸들러
  const handleRefuse = async () => {
    const isConfirmed = window.confirm(
      `${props.name}님의 친구 요청을 거절하시겠습니까?`,
    );
    if (isConfirmed) {
      try {
        await FRIENDS.friendRefuse(props.id);
        console.log('친구 요청을 거절하셨습니다.');
        setIsRefuse(true);
      } catch (error) {
        console.error('친구 요청 거절 중 오류가 발생했습니다:', error);
      }
    }
  };

  //영구 거절 핸들러
  const handleReject = async () => {
    const isConfirmed = window.confirm(
      `${props.name}님의 요청을 영구 거절하시겠습니까?`,
    );
    if (isConfirmed) {
      try {
        await FRIENDS.friendReject(props.id);
        console.log('친구 요청을 영구 거절하셨습니다.');
        setIsReject(true);
      } catch (error) {
        console.error('친구 요청 영구 거절 중 오류가 발생했습니다:', error);
      }
    }
  };

  return (
    <div>
      <span>요청 받은 목록</span>
      <S.UserBox>이재진</S.UserBox>
    </div>
  );
};

export default FriendResponse;
