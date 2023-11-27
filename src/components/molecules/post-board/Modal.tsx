import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

interface ModalType {
  show: boolean;
  hide: () => void;
}

/**Custom-Modal
 * @params : show
 * @params : hide
 * @returns : show는 modal의 boolean값
 * @returns : hide는 modal의 show값을 변경시키는 함수
 *
 */
const Modal = ({ show, hide, children }: PropsWithChildren<ModalType>) => {
  return (
    <ModalContainer>
      <DialogBox>{children}</DialogBox>
      <Backdrop
        onClick={(e: React.MouseEvent) => {
          e.preventDefault();

          if (show) {
            hide();
          }
        }}
      />
    </ModalContainer>
  );
};

const ModalContainer = styled.div`
  width: 150px;
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
  background-color: rgba(f, f, f, 0.2);
`;

export default Modal;
