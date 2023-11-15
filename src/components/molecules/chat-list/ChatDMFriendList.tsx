import React, { FC, useCallback, useState, useEffect, useRef } from 'react';
import * as S from './styles';
import { useRecoilValue } from 'recoil';
import { FriendsAtom } from '@/recoil/atoms/FriendsAtom';
import { useRouter } from 'next/router';
import { BiSolidDownArrow } from 'react-icons/bi';

interface DMFriendListProps {}

const DMFriendList = ({}: DMFriendListProps) => {
  const [friendListCollapse, setFriendListCollapse] = useState(false);
  const friendsData = useRecoilValue(FriendsAtom);
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
            key={friend.id}
            className={friendListCollapse ? 'hidden' : ''}>
            {friendListCollapse ? '' : friend.name}
          </S.ListBox>
        ))}
      </S.CollapsibleContainer>
    </div>
  );
};

export default DMFriendList;
