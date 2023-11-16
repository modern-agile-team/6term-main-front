import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import * as S from './styled';
import FRIENDS, { Friend } from '@/apis/friend-api/friendList';
import { useRecoilState } from 'recoil';
import { FriendInfo, friendInfoState } from '@/recoil/atoms/FriendsAtom';

const ListFriend = () => {
  const router = useRouter();
  const [friend, setFriend] = useState<Friend['data']>([]);
  const [friendInfo, setFriendInfo] = useRecoilState(friendInfoState);
  const loginUserId: number | undefined = router.query.id
    ? Number(router.query.id)
    : undefined;

  const getListFriend = async () => {
    try {
      const response = await FRIENDS.getFriendList();
      setFriend(response);
      const updatedFriendInfo: FriendInfo[] = response.map((item: any) => {
        const isCurrentUserRequester = loginUserId === item.requesterId;

        return {
          requesterId: isCurrentUserRequester
            ? item.requesterId
            : item.respondentId,
          requesterName: isCurrentUserRequester
            ? item.requester?.name || ''
            : item.respondent?.name || '',
          requesterImage: isCurrentUserRequester
            ? item.requester?.userImage?.imageUrl || ''
            : item.respondent?.userImage?.imageUrl || '',
          respondentId: isCurrentUserRequester
            ? item.respondentId
            : item.requesterId,
          respondentName: isCurrentUserRequester
            ? item.respondent?.name || ''
            : item.requester?.name || '',
          respondentImage: isCurrentUserRequester
            ? item.respondent?.userImage?.imageUrl || ''
            : item.requester?.userImage?.imageUrl || '',
        };
      });

      setFriendInfo(updatedFriendInfo);
    } catch (error) {
      console.error('친구 목록을 가져오는 중 오류 발생:', error);
    }
  };

  useEffect(() => {
    getListFriend();
  }, []);

  const handleDelete = async (deletedId: number) => {
    const friendToDelete = friendInfo.find(
      (friend) =>
        friend.respondentId === deletedId || friend.requesterId === deletedId,
    );

    const isConfirmed = window.confirm(
      `${
        friendToDelete?.respondentId === deletedId
          ? friendToDelete?.respondentName
          : friendToDelete?.requesterName
      }님을 친구에서 삭제하시겠습니까?`,
    );
    console.log(deletedId);

    if (isConfirmed) {
      try {
        const idToDelete =
          friendToDelete?.respondentId === deletedId
            ? friendToDelete?.respondentId
            : friendToDelete?.requesterId;
        console.log(idToDelete);
        if (idToDelete) {
          await FRIENDS.deleteFriend(idToDelete);
          alert(
            `${
              friendToDelete?.respondentId === deletedId
                ? friendToDelete?.respondentName
                : friendToDelete?.requesterName
            }님을 친구 목록에서 삭제하였습니다.`,
          );
          router.reload();
        }
      } catch (error) {
        console.error('친구 삭제 중 오류가 발생했습니다', error);
      }
    }
  };

  return (
    <div>
      <S.ListTitle>친구 목록</S.ListTitle>
      {friend.length > 0 ? (
        friend.map((data, index) => (
          <S.UserBox key={index}>
            {data.requesterId === loginUserId ? (
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
