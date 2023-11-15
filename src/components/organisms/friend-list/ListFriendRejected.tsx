import React, { useState, useEffect } from 'react';
import * as S from './styled';
import PermanentREJECT, {
  RejectPermanentFriend,
} from '@/apis/friend-api/friendRejectPermanent';
import { useRouter } from 'next/router';

const ListRejected = () => {
  const router = useRouter();
  const [rejectedFriends, setRejectedFriends] = useState<
    RejectPermanentFriend['data']
  >([]);
  const [isCancelRejectPermanent, setIsCancelRejectPermanent] = useState(false);
  const [friendInfo, setFriendInfo] = useState({
    requesterId: 0,
    name: '',
  });
  //영구 거절 목록
  const getListRejectPermannet = async () => {
    try {
      const response = await PermanentREJECT.getRejectPermanentFriendList();
      setRejectedFriends(response);
      setFriendInfo({
        requesterId: response[0]?.requesterId || 0,
        name: response[0]?.requester?.name || '',
      });
    } catch (error) {
      console.error('영구 거절한 유저 목록을 가져오는 중 오류 발생:', error);
    }
  };

  useEffect(() => {
    getListRejectPermannet();
    setFriendInfo((prev) => {
      return {
        ...prev,
        id: friendInfo.requesterId,
        name: friendInfo.name,
      };
    });
  }, []);

  //영구 거절 취소 핸들러
  const handleCancelRejectPermanent = async () => {
    const isConfirmed = window.confirm(
      `${friendInfo.name}님에 대한 영구 거절을 취소하겠습니까?`,
    );
    if (isConfirmed) {
      try {
        await PermanentREJECT.cancelPermanentRejectFriend(
          friendInfo.requesterId,
        );
        setIsCancelRejectPermanent(true);
        alert(`이제 ${friendInfo.name}님에게 친구요청을 받을 수 있습니다!`);
        router.reload();
      } catch (error) {
        console.error('영구 거절 취소 중 오류 발생');
      }
    }
  };

  return (
    <div>
      <span>영구 거절 목록</span>
      {rejectedFriends.length > 0 ? (
        rejectedFriends.map((data, index) => (
          <S.UserBox key={index}>
            {data.requester ? (
              <>
                <img
                  src={data.requester.userImage.imageUrl}
                  alt={`${data.requester.name}의 프로필 이미지`}
                  style={{ width: '30px', height: '30px', borderRadius: '50%' }}
                />
                <div>{data.requester.name}</div>
                <S.Button onClick={handleCancelRejectPermanent}>
                  영구 거절 취소
                </S.Button>
              </>
            ) : null}
          </S.UserBox>
        ))
      ) : (
        <div>영구 거절한 요청이 없습니다!!</div>
      )}
    </div>
  );
};

export default ListRejected;
