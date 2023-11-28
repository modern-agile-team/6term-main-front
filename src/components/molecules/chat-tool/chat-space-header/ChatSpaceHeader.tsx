import React from 'react';
import * as S from './styled';
import { GoHome, GoInfo, GoGear } from 'react-icons/go';
import DropdownMenu from '@/hooks/useDropDown';
import { useRouter } from 'next/router';
import CustomSwitch from '@/hooks/useSwitch';

const ChatSpaceHeader = () => {
  const router = useRouter();
  const dropDownItems = ['설정', '알림 해제', '채팅방 나가기'];

  const handleGoHoom = () => {
    router.push(`/`);
  };

  return (
    <S.ChatSpaceHeaderContainer>
      <S.ChatSpaceRoomProfileBox>header</S.ChatSpaceRoomProfileBox>
      <S.ChatSpaceNavbox>
        <GoHome onClick={handleGoHoom} />
        <DropdownMenu initialItems={dropDownItems}>
          <GoGear />
        </DropdownMenu>
        <GoInfo />
      </S.ChatSpaceNavbox>
    </S.ChatSpaceHeaderContainer>
  );
};

export default ChatSpaceHeader;
