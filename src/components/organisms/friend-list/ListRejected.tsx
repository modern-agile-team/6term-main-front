import React, { useState } from 'react';
import * as S from './styled';
import FRIENDS from '@/apis/friend-api/friendList';

interface UserRejected {
  id: number;
  name: string;
}

const UserRejected = (props: UserRejected) => {
  const [isRejectCancel, setIsRejectCancel] = useState(false);
  // 영구 거절 취소 핸들러
  const handleCancelReject = async () => {
    const isConfirmed = window.confirm(
      `${props.name}님의 영구 거절을 취소하시겠습니까?`,
    );
    if (isConfirmed) {
      try {
        await FRIENDS.cancelPermanent(props.id);
        console.log('영구 거절을 취소하셨습니다.');
        setIsRejectCancel(true);
      } catch (error) {
        console.error('영구 거절 취소 중 오류가 발생했습니다:', error);
      }
    }
  };

  return (
    <div>
      <span>차단 목록</span>
      <S.UserBox>박준혁</S.UserBox>
    </div>
  );
};

export default UserRejected;
