import React, { useState, useEffect } from 'react';
import * as S from './styled';
import FRIENDS, { Friend } from '@/apis/friend-api/friendList';

const FriendList = () => {
  const [friend, setFriend] = useState<Friend['data']>([]);
  const getFreindList = async () => {
    try {
      const response = await FRIENDS.friendList();
      setFriend(response);
    } catch (error) {
      console.error('친구 목록을 가져오는 중 오류 발생:', error);
    }
  };
  useEffect(() => {
    getFreindList();
  }, []);

  // const [isDelete, setIsDelete] = useState(false);
  // // 친구 삭제 핸들러
  // const handleDelete = async () => {
  //   const isConfirmed = window.confirm(
  //     `${props.name}님을 친구 목록에서 삭제하시겠습니까?`,
  //   );
  //   if (isConfirmed) {
  //     try {
  //       await FRIENDS.deleteFriend(props.id);
  //       console.log('친구 요청을 수락하셨습니다.');
  //       setIsDelete(true);
  //     } catch (error) {
  //       console.error('친구 삭제 중 오류가 발생했습니다.:', error);
  //     }
  //   }
  // };
  return (
    <div>
      <span>친구 목록</span>
      {friend.map((data, index) => (
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
            <div>친구 목록이 없습니다!!</div>
          )}
        </S.UserBox>
      ))}
    </div>
  );
};

export default FriendList;
