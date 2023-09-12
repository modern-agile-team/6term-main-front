import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

interface ModalDefaultType {
  onClickToggleModal: () => void;
}

function Modal({
  onClickToggleModal,
  children,
}: PropsWithChildren<ModalDefaultType>) {
  return (
    <ModalContainer>
      <DialogBox>{children}</DialogBox>
      <Backdrop
        onClick={(e: React.MouseEvent) => {
          e.preventDefault();

          if (onClickToggleModal) {
            onClickToggleModal();
          }
        }}
      />
    </ModalContainer>
  );
}

const ModalContainer = styled.div`
  width: 300px;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
`;

const DialogBox = styled.dialog`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  border-radius: 3px;
  box-shadow: 0 0 30px rgba(30, 30, 30, 0.185);
  box-sizing: border-box;
  background-color: white;
  z-index: 10000;
`;

const Backdrop = styled.div`
  width: 10000px;
  height: 10000px;
  position: fixed;
  top: 0;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.2);
`;

export default Modal;
