// Socket이 구현 되는 순간 리팩토링 시작!!
import React, { useEffect } from 'react';
import * as S from './styled';
import ChatSpace from '../chat-space/ChatSpace';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useRouter } from 'next/router';
import { Socket, io } from 'socket.io-client';

export interface ModalType {
  show: boolean;
  hide: () => void;
}

const ChatModal = (props: ModalType) => {
  // 모달 오픈 시 소켓 연결
  // useEffect(() => {
  //   const namespaceURL = 'http://13.209.21.62:3000/ch-653383a4468680bc4e9f8491';
  //   const socket = io(namespaceURL);

  //   socket.on('connect', () => {
  //     console.log('연결 완료');
  //   });
  // }, []);
  // Modal Open state일 때 아래 두 개의 함수로 인해 useEffect로
  // 해당 Modal Component가 mount 됐을 때 업데이트된 값을 불러오기
  // 고민 더 해봐야 될 듯
  // const friends = useRecoilValue(FriendsAtom);
  // const DMUser = useRecoilValue(DMDummyAtom);
  // const setFriends = useSetRecoilState(FriendsAtom);
  // const setDMUser = useSetRecoilState(DMDummyAtom);
  // 이 부분은 나중에 목록emf 불러오는 컴포넌트 제작, useEffect 2개 병합
  // useEffect(() => {
  //   const updateFriendsList = async () => {
  //     try {
  //       const updatedFriends = await fetchUpdatedFriendsList();
  //       setFriends(updatedFriends);
  //     } catch (error) {
  //       console.error('친구 목록을 업데이트 하는 중 오류 발생 :', error);
  //     }
  //   };
  //   if (props.show) {
  //     updateFriendsList();
  //   }
  // }, [props.show, setFriends]);

  // useEffect(() => {
  //   const updateDMUserList = async () => {
  //     try {
  //       const updatedDMUser = await fetchUpdatedDMUserList();
  //       setDMUser(updatedDMUser);
  //     } catch (error) {
  //       console.error(
  //         '1:1 대화 상대 목록을 업데이트 하는 중 오류 발생 :',
  //         error,
  //       );
  //     }
  //   };
  //   if (props.show) {
  //     updateDMUserList();
  //   }
  // }, [props.show, setDMUser]);
  return (
    <div>
      <S.ModalWrapper>
        <ChatSpace />
      </S.ModalWrapper>
      <S.Backdrop
        onClick={(e: React.MouseEvent) => {
          e.preventDefault();
          if (props.show) {
            props.hide();
          }
        }}
      />
    </div>
  );
};

export default ChatModal;
