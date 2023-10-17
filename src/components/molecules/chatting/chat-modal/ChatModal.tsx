import React from 'react';
import * as S from './styled';
import ChatSpace from './ChatSpace';

interface ModalType {
  show: boolean;
  hide: () => void;
}

const ChatModal = (props: ModalType) => {
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
