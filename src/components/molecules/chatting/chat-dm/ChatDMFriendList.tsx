import React, { FC, useCallback, useState } from 'react';
import { BiSolidRightArrow } from 'react-icons/bi';
import * as S from './styles';
// import ChatModal from '../chat-modal/ChatModal';
// import { useRouter } from 'next/router';
// import Link from 'next/link';
import { useRecoilState, useRecoilValue } from 'recoil';
import { FriendsAtom } from '@/recoil/atoms/FriendsAtom';
// import useSocket from '@/hooks/useSocket';
// import ChatSpace from '../chat-modal/ChatSpace';

const DMFriendList = () => {
  const [friendListCollapse, setFriendListCollapse] = useState(false);
  const friendsData = useRecoilValue(FriendsAtom);
  const [onlineList, setOnlineList] = useState<number[]>([]);
  const toggleFriendListCollapse = useCallback(() => {
    setFriendListCollapse((prev) => !prev);
  }, []);
  // console.log(friendListCollapse);
  return (
    <div>
      <S.CategoryBox>
        <S.CollapseButton
          collapse={friendListCollapse}
          onClick={toggleFriendListCollapse}>
          <BiSolidRightArrow />
        </S.CollapseButton>
        <S.Category>Friend</S.Category>
      </S.CategoryBox>
      <div className={friendListCollapse ? 'collapse' : ''}>
        {friendsData?.map((friend) => (
          <S.ListBox key={friend.id}>{friend.name}</S.ListBox>
        ))}
      </div>
    </div>
  );
};

export default DMFriendList;