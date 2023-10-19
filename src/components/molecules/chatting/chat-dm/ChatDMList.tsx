import * as S from './styles';
import useSocket from '@/hooks/useSocket';
// import { IUser, IUserWithOnline } from '@typings/db';
import fetcher from '@utils/fetcher';
import React, { FC, useCallback, useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
// import chatspace from '../chat-modal/chatspace';
import { NavLink } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { UserDummyAtom } from '@/recoil/atoms/DMUserAtom';
// import { chatUserType } from '@/recoil/atoms/ChatUserAtom';
// import { DMUserDummy } from './DMUserDummy';

export interface IUser {
  id: number;
}

const DMList: FC = () => {
  const chatspace = useParams();
  // // const { data: userData, error, revalidate, mutate } = useSWR<IUser>('/api/users', fetcher, {
  // dedupingInterval: 2000, // 2초
  // });
  // const { data: memberData } = useSWR<IUserWithOnline[]>(
  // userData ? `/api/workspaces/${chatspace}/members` : null,
  // fetcher,
  // );
  const { data: memberData } = useRecoilValue(UserDummyAtom);
  const [socket] = useSocket(chatspace);
  const [channelCollapse, setChannelCollapse] = useState(false);
  const [onlineList, setOnlineList] = useState<number[]>([]);

  const toggleChannelCollapse = useCallback(() => {
    setChannelCollapse((prev) => !prev);
  }, []);

  useEffect(() => {
    console.log('DMList: chatspace 바꼈다', chatspace);
    setOnlineList([]);
  }, [chatspace]);

  useEffect(() => {
    socket?.on('onlineList', (data: number[]) => {
      setOnlineList(data);
    });
    // socket?.on('dm', onMessage);
    // console.log('socket on dm', socket?.hasListeners('dm'), socket);
    return () => {
      // socket?.off('dm', onMessage);
      // console.log('socket off dm', socket?.hasListeners('dm'));
      socket?.off('onlineList');
    };
  }, [socket]);

  return (
    <>
      <h2>
        <S.CollapseButton
          collapse={channelCollapse}
          onClick={toggleChannelCollapse}>
          <i
            className="c-icon p-channel_sidebar__section_heading_expand p-channel_sidebar__section_heading_expand--show_more_feature c-icon--caret-right c-icon--inherit c-icon--inline"
            data-qa="channel-section-collapse"
            aria-hidden="true"
          />
        </S.CollapseButton>
        <span>Direct Messages</span>
      </h2>
      <div>
        {!channelCollapse &&
          memberData?.map((member) => {
            const isOnline = onlineList.includes(member.id);
            return (
              <NavLink
                key={member.id}
                activeClassName="selected"
                to={`/chatspace/${chatspace}/dm/${member.id}`}>
                <i
                  className={`c-icon p-channel_sidebar__presence_icon p-channel_sidebar__presence_icon--dim_enabled c-presence ${
                    isOnline
                      ? 'c-presence--active c-icon--presence-online'
                      : 'c-icon--presence-offline'
                  }`}
                  aria-hidden="true"
                  data-qa="presence_indicator"
                  data-qa-presence-self="false"
                  data-qa-presence-active="false"
                  data-qa-presence-dnd="false"
                />
                <span>{member.nickname}</span>
                {member.id === userData?.id && <span> (나)</span>}
              </NavLink>
            );
          })}
      </div>
    </>
  );
};

export default DMList;
