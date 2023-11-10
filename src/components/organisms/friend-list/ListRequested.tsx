import React, { useState, useEffect } from 'react';
import * as S from './styled';
import REQUEST, { RequestFriend } from '@/apis/friend-api/friendRequest';

const ListRequested = () => {
  const [requestedFriends, setRequestedFriends] = useState<
    RequestFriend['data']
  >([]);

  const friendRequest = async () => {
    try {
      const response = await REQUEST.requestedList();
      setRequestedFriends(response);
    } catch (error) {
      console.error('요청 보낸 친구 목록을 가져오는 중 오류 발생:', error);
    }
  };

  useEffect(() => {
    friendRequest();
    console.log(requestedFriends);
  }, []);

  return (
    <div>
      <span>요청 보낸 목록</span>
      {requestedFriends.map((data, index) => (
        <S.UserBox key={index}>
          {data.respondent ? (
            <>
              <img
                src={data.respondent.userImage.imageUrl}
                alt="User Image"
                style={{ width: '30px', height: '30px', borderRadius: '50%' }}
              />
              <div>{data.respondent.name}</div>
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
