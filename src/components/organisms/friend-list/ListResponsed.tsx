import React, { useState, useEffect } from 'react';
import * as S from './styled';
import RESPONSE, { ResponseFriend } from '@/apis/friend-api/friendResponse';
import { useRouter } from 'next/router';

const FriendResponse = () => {
  const router = useRouter();
  const [responsedFriends, setResponsedFriends] = useState<
    ResponseFriend['data']
  >([]);
  const [acceptFriend, setAcceptFriend] = useState({
    requesterId: 0,
    name: '',
  });
  const [isAccept, setIsAccept] = useState(false);
  const [isRefuse, setIsRefuse] = useState(false);
  const [isReject, setIsReject] = useState(false);

  const friendResponse = async () => {
    try {
      const response = await RESPONSE.responsedList();
      setResponsedFriends(response);
      setAcceptFriend({
        requesterId: response[0]?.requesterId || 0,
        name: response[0]?.requester?.name || '',
      });
    } catch (error) {
      console.error('요청 받은 친구 목록을 가져오는 중 오류 발생:', error);
    }
  };
  useEffect(() => {
    friendResponse();
    // setAcceptFriend((prev) => {
    //   return {
    //     ...prev,
    //     id: acceptFriend.requesterId,
    //     name: acceptFriend.name,
    //   };
    // });
    // console.log(acceptFriend.requesterId);
  }, []);

  // 토큰 에러 핸들링 완료 후 작업
  // 요청 수락 핸들러 -> 요청 수락하면 요청 수락 버튼 삭제
  // -> 삭제 버튼 있는 자리에 '요청을 수락하였습니다.' -> 친구 목록으로 GO
  const handleAccept = async () => {
    const isConfirmed = window.confirm(
      `${acceptFriend.name}님을 친구로 추가하시겠습니까?`,
    );
    if (isConfirmed) {
      try {
        await RESPONSE.friendAccept(acceptFriend.requesterId);
        setIsAccept(true);
        alert(`${acceptFriend.name}님을 친구로 추가하였습니다.`);
        router.reload();
      } catch (error) {
        console.error('친구 요청 수락 중 오류 발생');
      }
    }
  };

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
                alt={`${data.requester.name}의 프로필 이미지`}
                style={{ width: '30px', height: '30px', borderRadius: '50%' }}
              />
              <div>{data.requester.name}</div>
              <S.Button onClick={handleAccept}>수락</S.Button>
              <S.Button>거절</S.Button>
              <S.Button>영구 거절</S.Button>
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
