import React, { useState, useEffect } from 'react';
import * as S from './styled';
import REQUEST, { RequestFriend } from '@/apis/friend-api/friendRequest';

interface RequestUser {
  respondent: object;
  name: string;
  userImage: string;
}
const ListRequested = () => {
  const [requestedFriends, setRequestedFriends] = useState<RequestFriend[]>([]);
  const friendRequest = () => {
    const handleRequestedFriends = async () => {
      const response = await REQUEST.requestedList();
      console.log(response);
      setRequestedFriends(response.data);
    };
    handleRequestedFriends();
  };

  useEffect(() => {
    friendRequest();
  }, []);

  return (
    <div>
      <span>요청 보낸 목록</span>
      {requestedFriends.map((requestUser, index) => (
        <S.UserBox key={index}>
          {requestUser.data.respondent ? (
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

export default ListRequested;
