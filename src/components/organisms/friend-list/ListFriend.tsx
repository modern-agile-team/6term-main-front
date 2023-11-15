import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import * as S from './styled';
import FRIENDS, { Friend } from '@/apis/friend-api/friendList';

const ListFriend = () => {
  const router = useRouter();
  const [friend, setFriend] = useState<Friend['data']>([]);
  const [isDelete, setIsDelete] = useState(false);
  const [friendInfo, setFriendInfo] = useState({
    requesterId: 0,
    name: '',
  });

  const getListFriend = async () => {
    try {
      const response = await FRIENDS.getFriendList();
      setFriend(response);
      setFriendInfo({
        requesterId: response[0]?.requesterId || 0,
        name: response[0]?.requester?.name || '',
      });
    } catch (error) {
      console.error('친구 목록을 가져오는 중 오류 발생:', error);
    }
  };

  useEffect(() => {
    getListFriend();
    setFriendInfo((prev) => {
      return {
        ...prev,
        id: friendInfo.requesterId,
        name: friendInfo.name,
      };
    });
  }, []);

  // 친구 삭제 핸들러
  const handleDelete = async () => {
    const isConfirmed = window.confirm(
      `${friendInfo.name}님을 친구에서 삭제하시겠습니까?`,
    );
    if (isConfirmed) {
      try {
        await FRIENDS.deleteFriend(friendInfo.requesterId);
        setIsDelete(true);
        alert(`${friendInfo.name}님을 친구에서 삭제하였습니다.`);
        router.reload();
      } catch (error) {
        console.error('친구 삭제 중 오류 발생');
      }
    }
  };

  // 친구 차단(or 유저 차단) 추가 예정

  return (
    <div>
      <span>친구 목록</span>
      {friend.length > 0 ? (
        friend.map((data, index) => (
          <S.UserBox key={index}>
            {data.requester ? (
              <>
                <img
                  src={data.requester.userImage.imageUrl}
                  alt="User Image"
                  style={{ width: '30px', height: '30px', borderRadius: '50%' }}
                />
                <div>{data.requester.name}</div>
                <S.Button onClick={handleDelete}>삭제</S.Button>
              </>
            ) : null}
          </S.UserBox>
        ))
      ) : (
        <div>친구 목록이 없습니다!!</div>
      )}
    </div>
  );
};

export default ListFriend;
