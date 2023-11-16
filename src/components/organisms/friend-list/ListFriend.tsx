import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import * as S from './styled';
import FRIENDS, { Friend } from '@/apis/friend-api/friendList';
import { useRecoilState } from 'recoil';
import { friendInfoState } from '@/recoil/atoms/FriendsAtom';

const ListFriend = () => {
  const router = useRouter();
  const [friend, setFriend] = useState<Friend['data']>([]);
  const [isDelete, setIsDelete] = useState(false);
  const [friendInfo, setFriendInfo] = useRecoilState(friendInfoState);
  const loginUserId = router.query.id;

  const getListFriend = async () => {
    try {
      const response = await FRIENDS.getFriendList();
      setFriend(response);
      const updatedFriendInfo = response.map((item: any) => ({
        requesterId: item.requesterId || 0,
        name: item.requester?.name || '',
        image: item.requester?.userImage?.imageUrl || '',
        isMe: item.requesterId === loginUserId,
      }));
      setFriendInfo(updatedFriendInfo);
    } catch (error) {
      console.error('친구 목록을 가져오는 중 오류 발생:', error);
    }
  };

  useEffect(() => {
    getListFriend();
  }, []);

  // 친구 삭제 핸들러
  // 친구 삭제 핸들러
  const handleDelete = async (deletedId: number) => {
    const friendToDelete = friendInfo.find(
      (friend) => friend.requesterId === deletedId,
    );
    const isMeRequester = friendToDelete?.isMe || false;

    const isConfirmed = window.confirm(
      `${
        isMeRequester
          ? friendToDelete?.requesterName
          : friendToDelete?.respondentName
      }님을 친구에서 삭제하시겠습니까?`,
    );

    if (isConfirmed) {
      try {
        const idToDelete = isMeRequester
          ? friendToDelete?.respondentId
          : friendToDelete?.requesterId;
        if (idToDelete) {
          await FRIENDS.deleteFriend(idToDelete);
          setIsDelete(true);
          alert(
            `${
              isMeRequester
                ? friendToDelete?.requesterName
                : friendToDelete?.respondentName
            }님을 친구 목록에서 삭제하였습니다.`,
          );
          router.reload();
        }
      } catch (error) {
        console.error('Error occurred while deleting friend');
      }
    }
  };

  // 친구 차단(or 유저 차단) 추가 예정

  return (
    <div>
      <S.ListTitle>친구 목록</S.ListTitle>
      {friend.length > 0 ? (
        friend.map((data, index) => (
          <S.UserBox key={index}>
            {data.isMe ? (
              // 만약 현재 사용자 자신이 요청자인 경우
              <>
                <img
                  src={data.respondent.userImage.imageUrl}
                  alt="User Image"
                  style={{ width: '30px', height: '30px', borderRadius: '50%' }}
                />
                <div>{data.respondent.name}</div>
                <S.Button onClick={() => handleDelete(data.respondentId)}>
                  삭제
                </S.Button>
              </>
            ) : (
              // 현재 사용자가 요청자가 아닌 경우, 즉 응답자인 경우
              <>
                <img
                  src={data.requester.userImage.imageUrl}
                  alt="User Image"
                  style={{ width: '30px', height: '30px', borderRadius: '50%' }}
                />
                <div>{data.requester.name}</div>
                <S.Button onClick={() => handleDelete(data.requesterId)}>
                  삭제
                </S.Button>
              </>
            )}
          </S.UserBox>
        ))
      ) : (
        <S.IfNoData>친구 목록이 없습니다!!</S.IfNoData>
      )}
    </div>
  );
};

export default ListFriend;
