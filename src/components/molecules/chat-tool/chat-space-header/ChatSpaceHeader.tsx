import React from 'react';
import * as S from './styled';
import { GoHome, GoInfo, GoGear, GoBell } from 'react-icons/go';
import DropdownMenu from '@/hooks/useDropDown';
import { useRouter } from 'next/router';
import CustomSwitch from '@/hooks/useSwitch';
import { useRecoilValue } from 'recoil';
import { chatRoomAtom } from '@/recoil/atoms/ChatRoomAtom';

const ChatSpaceHeader = () => {
  const router = useRouter();
  const { roomId } = router.query;
  const guestProfile = useRecoilValue(chatRoomAtom);
  const dropDownItems = ['설정', '채팅방 나가기'];
  const dropDownAlarm = ['알림 해제'];

  const handleGoHoom = () => {
    router.push(`/`);
  };

  const selectedChatRoom = guestProfile.find((room) => room.roomId === roomId);

  return (
    <S.ChatSpaceHeaderContainer>
      {selectedChatRoom && (
        <S.ChatSpaceRoomProfileBox>
          <img src={selectedChatRoom.guestImage} alt="Guest Image" />
          <span>{selectedChatRoom.guestName}</span>
        </S.ChatSpaceRoomProfileBox>
      )}
      <S.ChatSpaceNavbox>
        <GoHome onClick={handleGoHoom} />
        <DropdownMenu initialItems={dropDownAlarm}>
          <GoBell />
        </DropdownMenu>
        <DropdownMenu initialItems={dropDownItems}>
          <GoGear />
        </DropdownMenu>
        <GoInfo />
      </S.ChatSpaceNavbox>
    </S.ChatSpaceHeaderContainer>
  );
};

export default ChatSpaceHeader;
