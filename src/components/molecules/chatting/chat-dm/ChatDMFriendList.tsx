import React, { FC, useCallback, useState } from 'react';
import * as S from './styles';
import ChatModal from '../chat-modal/ChatModal';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useRecoilState, useRecoilValue } from 'recoil';
import { DMDummyAtom } from '@/recoil/atoms/DMUserAtom';
import { FriendsAtom } from '@/recoil/atoms/FriendsAtom';
import useSocket from '@/hooks/useSocket';
import ChatSpace from '../chat-modal/ChatSpace';

const DMFriendList = () => {
  const [menuCollapse, setMenuCollapse] = useState(false);
  const friendsdata = useRecoilValue(DMDummyAtom);
  const [onlineList, setOnlineList] = useState<number[]>([]);
  const toggleMenuCollapse = useCallback(() => {
    setMenuCollapse((prev) => !prev);
  }, []);

  return (
    <h2>
      <S.CollapseButton collapse={menuCollapse} onClick={toggleMenuCollapse}>
        <i
          className="c-icon p-DMFriendList_sidebar__section_heading_expand p-DMFriendList_sidebar__section_heading_expand--show_more_feature c-icon--caret-right c-icon--inherit c-icon--inline"
          data-qa="channel-section-collapse"
          aria-hidden="true"
        />
      </S.CollapseButton>
      <span>친 구</span>
      <div>
        {!menuCollapse &&
          friendsdata?.map((friedns) => {
            const isOnline;
          })}
      </div>
    </h2>
  );
};
