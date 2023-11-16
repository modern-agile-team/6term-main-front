import React, { useState, useEffect } from 'react';
import * as S from './styled';
import RESPONSE, { ResponseFriend } from '@/apis/friend-api/friendResponse';
import { useRouter } from 'next/router';
import FriendRESPONSE from '@/apis/friend-api/friendResponse';

const ListResponsed = () => {
  const router = useRouter();
  const [responsedFriends, setResponsedFriends] = useState<
    ResponseFriend['data']
  >([]);
  const [friendInfo, setFriendInfo] = useState({
    requesterId: 0,
    name: '',
  });
  const [isAccept, setIsAccept] = useState(false);
  const [isReject, setIsReject] = useState(false);
  const [isRejectPermanent, setIsRejectPermanent] = useState(false);
  //친구 요청 받은 목록
  const getListResponsed = async () => {
    try {
      const response = await FriendRESPONSE.getResponsedList();
      setResponsedFriends(response);
      setFriendInfo({
        requesterId: response[0]?.requesterId || 0,
        name: response[0]?.requester?.name || '',
      });
    } catch (error) {
      console.error('친구 요청 받은 목록을 가져오는 중 오류 발생:', error);
    }
  };

  useEffect(() => {
    getListResponsed();
    setFriendInfo((prev) => {
      return {
        ...prev,
        id: friendInfo.requesterId,
        name: friendInfo.name,
      };
    });
  }, []);

  //요청 수락 핸들러
  const handleAccept = async () => {
    const isConfirmed = window.confirm(
      `${friendInfo.name}님을 친구로 추가하시겠습니까?`,
    );
    if (isConfirmed) {
      try {
        await FriendRESPONSE.friendAccept(friendInfo.requesterId);
        setIsAccept(true);
        alert(`${friendInfo.name}님을 친구로 추가하였습니다.`);
        router.reload();
      } catch (error) {
        console.error('친구 요청 수락 중 오류 발생');
      }
    }
  };

  //요청 거절 핸들러
  const handleReject = async () => {
    const isConfirmed = window.confirm(
      `${friendInfo.name}님의 요청을 거절하시겠습니까?`,
    );
    if (isConfirmed) {
      try {
        await FriendRESPONSE.friendReject(friendInfo.requesterId);
        setIsReject(true);
        alert(`${friendInfo.name}님의 요청을 거절하였습니다.`);
        router.reload();
      } catch (error) {
        console.error('친구 요청 거절 중 오류 발생');
      }
    }
  };

  //영구 거절 핸들러
  const handleRejectPermanet = async () => {
    const isConfirmed = window.confirm(
      `${friendInfo.name}님의 요청을 영구 거절하시겠습니까?`,
    );
    if (isConfirmed) {
      try {
        await FriendRESPONSE.friendRejectPermanent(friendInfo.requesterId);
        setIsRejectPermanent(true);
        alert(`${friendInfo.name}님의 요청을 영구 거절하였습니다.`);
        router.reload();
      } catch (error) {
        console.error('친구 요청 영구 거절 중 오류 발생');
      }
    }
  };

  return (
    <div>
      <S.ListTitle>요청 받은 목록</S.ListTitle>
      {responsedFriends.length > 0 ? (
        responsedFriends.map((data, index) => (
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
                <S.Button onClick={handleReject}>거절</S.Button>
                <S.Button onClick={handleRejectPermanet}>영구 거절</S.Button>
              </>
            ) : null}
          </S.UserBox>
        ))
      ) : (
        <S.IfNoData>받은 친구 요청이 없습니다!!</S.IfNoData>
      )}
    </div>
  );
};

export default ListResponsed;
