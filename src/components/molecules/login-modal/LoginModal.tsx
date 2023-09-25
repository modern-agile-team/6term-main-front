import React, { PropsWithChildren } from 'react';
import * as S from './styled';
import Image from 'next/image';
import logo from '../../../../public/Logo.png';
import { useRecoilState } from 'recoil';
import { LoginModalAtom } from '@/recoil/atoms/LoginModalAtom';
import { useRouter } from 'next/router';
import { Naver, Kakao, Facebook } from './Providers';

const LoginModal = () => {
  const [isModal, setModal] = useRecoilState(LoginModalAtom);

  const handleCloseModal = () => {
    setModal(!isModal);
  };

  return (
    <div>
      <S.ModalWrapper>
        <S.FlexBox>
          <S.Button onClick={handleCloseModal}>X</S.Button>
        </S.FlexBox>
        <Image src={logo} alt="로고" width={80} />
        <S.FlexBox>
          <S.DivisionLine />
        </S.FlexBox>
        <div>로그인</div>
        <S.FlexBox direction="column">
          <Naver />
          {/* <Facebook /> */}
          <Kakao />
        </S.FlexBox>
      </S.ModalWrapper>
      <S.Backdrop
        onClick={(e: React.MouseEvent) => {
          e.preventDefault();

          if (isModal) {
            handleCloseModal();
          }
        }}
      />
    </div>
  );
};

export default LoginModal;
