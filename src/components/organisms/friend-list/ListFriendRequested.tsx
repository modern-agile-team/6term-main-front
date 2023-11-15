import React, { useState, useEffect } from 'react';
import * as S from './styled';
import REQUEST, { RequestFriend } from '@/apis/friend-api/friendRequest';
import FriendREQUEST from '@/apis/friend-api/friendRequest';

const ListRequested = () => {
  const [requestedFriends, setRequestedFriends] = useState<
    RequestFriend['data']
  >([]);
  //친구 요청 보낸 목록
  const getListRequested = async () => {
    try {
      const response = await FriendREQUEST.getRequestedList();
      setRequestedFriends(response);
    } catch (error) {
      console.error('친구 요청 보낸 목록을 가져오는 중 오류 발생:', error);
    }
  };
  // 보낸 요청 취소 추가 예정

  useEffect(() => {
    getListRequested();
  }, []);

  return (
    <div>
      <S.ListTitle>요청 보낸 목록</S.ListTitle>
      {requestedFriends.length > 0 ? (
        requestedFriends.map((data, index) => (
          <S.UserBox key={index}>
            {data.respondent ? (
              <>
                <img
                  src={data.respondent.userImage.imageUrl}
                  alt={`${data.respondent.name}'s profile`}
                  style={{ width: '30px', height: '30px', borderRadius: '50%' }}
                />
                <div>{data.respondent.name}</div>
              </>
            ) : null}
          </S.UserBox>
        ))
      ) : (
        <S.IfNoData>보낸 친구 요청이 없습니다!!</S.IfNoData>
      )}
    </div>
  );
};

export default ListRequested;
