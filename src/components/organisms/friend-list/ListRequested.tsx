import React, { useState, useEffect } from 'react';
import * as S from './styled';
import FRIENDS from '@/apis/friend-api/friendList';
import REQUEST, { RequestFriend } from '@/apis/friend-api/friendRequest';

const FriendRequest = (props: RequestFriend) => {
  const [requestedFriends, setRequestedFriends] = useState<RequestFriend[]>([]);

  useEffect(() => {
    const handleRequestedFriends = async () => {
      try {
        const response = await REQUEST.requestedList();
        console.log(response);
        if (response.data) {
          // 데이터가 정상적으로 할당되었는지 확인
          const requesterInfo = response.data.map((item) => ({
            id: item.id,
            requesterId: item.requesterId,
            respondentId: item.respondentId,
            status: item.status,
            createdAt: item.createdAt,
            respondent: {
              name: item.respondent.name,
              userImage: {
                imageUrl: item.respondent.userImage.imageUrl,
              },
            },
          }));
          console.log(requesterInfo);
          setRequestedFriends(requesterInfo);
        }
      } catch (error) {
        console.error('요청 보낸 친구 목록을 가져오는 중 오류 발생:', error);
      }
    };

    handleRequestedFriends();
  }, []);

  return (
    <div>
      <span>요청 보낸 목록</span>
      {requestedFriends.map((requestUser, index) => (
        <S.UserBox key={index}>
          {requestUser.respondent ? (
            <>
              <img
                src={requestUser.respondent.userImage.imageUrl}
                alt="User Image"
              />
              <div>{requestUser.respondent.name}</div>
            </>
          ) : (
            <div>요청 보낸 목록이 없습니다!!</div>
          )}
        </S.UserBox>
      ))}
    </div>
  );
};

export default FriendRequest;
