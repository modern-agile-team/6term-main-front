import React, { useState, useEffect } from 'react';
import * as S from './styled';
import Router, { useRouter } from 'next/router';
import FriendREQUEST, { RequestFriend } from '@/apis/friend-api/friendRequest';

const ListRequested = () => {
  const router = useRouter();
  const [requestedFriends, setRequestedFriends] = useState<
    RequestFriend['data']
  >([]);
  const [isCancelRequest, setIsCancelRequest] = useState(false);
  const [friendInfo, setFriendInfo] = useState({
    respondentId: 0,
    name: '',
  });
  //친구 요청 보낸 목록
  const getListRequested = async () => {
    try {
      const response = await FriendREQUEST.getRequestedList();
      setRequestedFriends(response);
      setFriendInfo({
        respondentId: response[0]?.respondentId || 0,
        name: response[0]?.respondent?.name || '',
      });
    } catch (error) {
      console.error('친구 요청 보낸 목록을 가져오는 중 오류 발생:', error);
    }
  };

  useEffect(() => {
    getListRequested();
  }, []);

  // 보낸 요청 취소 핸들러
  const handleCacelRequest = async () => {
    const isConfirmed = window.confirm(
      `${friendInfo.name}님에게 한 친구 요청을 취소하시겠습니까?`,
    );
    if (isConfirmed) {
      try {
        await FriendREQUEST.cancelRequestFriend(friendInfo.respondentId);
        setIsCancelRequest(true);
        alert(`${friendInfo.name}님에게 한 요청을 취소했습니다.`);
        router.reload();
      } catch (error) {
        console.log('친구 요청 취소 중 오류 발생');
      }
    }
  };

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
                <S.Button onClick={handleCacelRequest}>요청 취소</S.Button>
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
