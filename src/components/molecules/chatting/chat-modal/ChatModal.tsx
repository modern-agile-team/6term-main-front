import React, { Children } from 'react';
import * as S from './styled';
import ChatSpace, { ChatSpaceProps } from './ChatSpace';

interface ModalType {
  show: boolean;
  hide: () => void;
}

const ChatModal = (props: ModalType, { children }: ChatSpaceProps) => {
  return (
    <div>
      <S.ModalWrapper>
        <ChatSpace> {children}: ChatSpaceProps</ChatSpace>
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
