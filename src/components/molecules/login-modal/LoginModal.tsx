import React from 'react';
import * as S from './styled';
import { useRecoilState } from 'recoil';
import { LoginModalAtom } from '@/recoil/atoms/LoginModal';

const LoginModal = (): JSX.Element => {
  const [isModal, setModal] = useRecoilState(LoginModalAtom);

  const handleCloseModal = () => {
    setModal(false);
  };

  return (
    <S.ModalWrapper>
      <S.ButtonContain>
        <S.Button onClick={handleCloseModal}>X</S.Button>
      </S.ButtonContain>
      <div>로고</div>
      <S.ButtonContain>
        <S.DivisionLine />
      </S.ButtonContain>
      <div>로그인</div>
      <div>네이버</div>
      <div>페이스북</div>
      <div>카카오</div>
    </S.ModalWrapper>
  );
};

export default LoginModal;
