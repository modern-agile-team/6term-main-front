import React, { useState, useEffect } from 'react';
import * as S from './styled';
import REJECT, { RejectFriend } from '@/apis/friend-api/friendReject';

const RejectedList = () => {
  const [rejectedFriends, setRejectedFriends] = useState<RejectFriend['data']>(
    [],
  );

  const friendReject = async () => {
    try {
      const response = await REJECT.rejectList();
      setRejectedFriends(response);
    } catch (error) {
      console.error('영구 거절한 유저 목록을 가져오는 중 오류 발생:', error);
    }
  };

  useEffect(() => {
    friendReject();
  }, []);

  return (
    <div>
      <span>영구 거절 목록</span>
      {rejectedFriends.map((data, index) => (
        <S.UserBox key={index}>
          {data.requester ? (
            <>
              <img
                src={data.requester.userImage.imageUrl}
                alt={`${data.requester.name}의 프로필 이미지`}
                style={{ width: '30px', height: '30px', borderRadius: '50%' }}
              />
              <div>{data.requester.name}</div>
              <S.Button>영구 거절 취소</S.Button>
            </>
          ) : (
            <div>영구 거절 목록이 없습니다!!</div>
          )}
        </S.UserBox>
      ))}
    </div>
  );
};

export default RejectedList;
