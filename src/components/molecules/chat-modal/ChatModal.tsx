import React from 'react';
import * as S from './styled';

interface ModalType {
  show: boolean;
  hide: () => void;
}

const ChatModal = ({ show, hide }: ModalType) => {
  return (
    <div>
      <S.ModalWrapper>
        채팅 모달
        <S.FlexBox>
          <S.DivisionLine />
        </S.FlexBox>
      </S.ModalWrapper>
      <S.Backdrop
        onClick={(e: React.MouseEvent) => {
          e.preventDefault();

          if (show) {
            hide();
          }
        }}
      />
    </div>
  );
};

export default ChatModal;
