import React, { useState, useEffect } from 'react';
import * as S from './styled';
import RESPONSE, { ResponseFriend } from '@/apis/friend-api/friendResponse';

const FriendResponse = () => {
  const [responsedFriends, setResponsedFriends] = useState<
    ResponseFriend['data']
  >([]);
  const [isAccept, setIsAccept] = useState(false);
  const [isRefuse, setIsRefuse] = useState(false);
  const [isReject, setIsReject] = useState(false);

  const friendResponse = async () => {
    try {
      const response = await RESPONSE.responsedList();
      setResponsedFriends(response);
    } catch (error) {
      console.error('요청 받은 친구 목록을 가져오는 중 오류 발생:', error);
    }
  };

  useEffect(() => {
    friendResponse();
    console.log(responsedFriends);
  }, []);

  //요청 수락 핸들러 -> 요청 수락하면 요청 수락 버튼 삭제
  // -> 삭제 버튼 있는 자리에 '요청을 수락하였습니다.' -> 친구 목록으로 GO
  // const handleAccept = async () => {
  //   const isConfirmed = window.confirm(
  //     `${props.name}님의 친구 요청을 수락하시겠습니까?`,
  //   );
  //   if (isConfirmed) {
  //     try {
  //       await FRIENDS.friendAccept(props.id);
  //       console.log('친구 요청을 수락하셨습니다.');
  //       setIsAccept(true);
  //     } catch (error) {
  //       console.error('친구 요청 수락 중 오류가 발생했습니다:', error);
  //     }
  //   }
  // };

  //요청 거절 핸들러
  // const handleRefuse = async () => {
  //   const isConfirmed = window.confirm(
  //     `${props.name}님의 친구 요청을 거절하시겠습니까?`,
  //   );
  //   if (isConfirmed) {
  //     try {
  //       await FRIENDS.friendRefuse(props.id);
  //       console.log('친구 요청을 거절하셨습니다.');
  //       setIsRefuse(true);
  //     } catch (error) {
  //       console.error('친구 요청 거절 중 오류가 발생했습니다:', error);
  //     }
  //   }
  // };

  //영구 거절 핸들러
  // const handleReject = async () => {
  //   const isConfirmed = window.confirm(
  //     `${props.name}님의 요청을 영구 거절하시겠습니까?`,
  //   );
  //   if (isConfirmed) {
  //     try {
  //       await FRIENDS.friendReject(props.id);
  //       console.log('친구 요청을 영구 거절하셨습니다.');
  //       setIsReject(true);
  //     } catch (error) {
  //       console.error('친구 요청 영구 거절 중 오류가 발생했습니다:', error);
  //     }
  //   }
  // };

  return (
    <div>
      <span>요청 받은 목록</span>
      {responsedFriends.map((data, index) => (
        <S.UserBox key={index}>
          {data.requester ? (
            <>
              <img
                src={data.requester.userImage.imageUrl}
                alt="User Image"
                style={{ width: '30px', height: '30px', borderRadius: '50%' }}
              />
              <div>{data.requester.name}</div>
            </>
          ) : (
            <div>요청 받은 목록이 없습니다!!</div>
          )}
        </S.UserBox>
      ))}
    </div>
  );
};

export default FriendResponse;
