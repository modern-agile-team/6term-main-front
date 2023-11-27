import React from 'react';
import * as S from './styled';
import { GoHome, GoInfo, GoGear } from 'react-icons/go';

const ChatSpaceHeader = () => {
  return (
    <S.ChatSpaceHeaderContainer>
      <S.ChatSpaceRoomProfileBox>header</S.ChatSpaceRoomProfileBox>
      <S.ChatSpaceNavbox>
        <GoHome />
        <GoGear />
        <GoInfo />
      </S.ChatSpaceNavbox>
    </S.ChatSpaceHeaderContainer>
  );
};

export default ChatSpaceHeader;
