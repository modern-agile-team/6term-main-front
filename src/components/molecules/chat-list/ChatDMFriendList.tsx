import React, { FC, useCallback, useState, useEffect, useRef } from 'react';
import * as S from './styles';
import { useRouter } from 'next/router';
import { BiSolidDownArrow } from 'react-icons/bi';
import { useRecoilValue } from 'recoil';
import { friendInfoState } from '@/recoil/atoms/FriendsAtom';

interface DMFriendListProps {}

const DMFriendList = ({}: DMFriendListProps) => {
  const [friendListCollapse, setFriendListCollapse] = useState(false);
  const friendsData = useRecoilValue(friendInfoState);
  const router = useRouter();
  const collapsibleRef = useRef<HTMLDivElement>(null);

  const toggleFriendListCollapse = useCallback(() => {
    setFriendListCollapse((prev) => !prev);
  }, []);

  useEffect(() => {
    if (collapsibleRef.current) {
      collapsibleRef.current.style.maxHeight = friendListCollapse
        ? '0'
        : `${collapsibleRef.current.scrollHeight}px`;
    }
  }, [friendListCollapse]);

  // const handleRoomRouter = (id: number) => {};

  return (
    <div>
      <S.CategoryBox>
        <S.ButtonContainer
          collapse={friendListCollapse}
          onClick={toggleFriendListCollapse}>
          <BiSolidDownArrow />
        </S.ButtonContainer>
        <S.Category>Friend</S.Category>
      </S.CategoryBox>
      <S.CollapsibleContainer
        ref={collapsibleRef}
        className={friendListCollapse ? 'collapsed' : ''}>
        {friendsData?.map((friend) => (
          <S.ListBox
            key={friend.requesterId}
            className={friendListCollapse ? 'hidden' : ''}>
            {friendListCollapse ? '' : friend.name}
          </S.ListBox>
        ))}
      </S.CollapsibleContainer>
    </div>
  );
};

export default DMFriendList;
