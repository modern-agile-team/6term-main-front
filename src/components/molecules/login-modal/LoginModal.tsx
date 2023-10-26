import React, { PropsWithChildren, useCallback } from 'react';
import * as S from './styled';
import Image from 'next/image';
import logo from '../../../../public/Logo.png';
import { useRouter } from 'next/router';
import { Naver, Kakao } from './Providers';
import useModal from '@/hooks/useModal';

interface ModalType {
  show: boolean;
  hide: () => void;
}

const LoginModal = ({ show, hide }: ModalType) => {
  return (
    <div>
      <S.ModalWrapper>
        <S.FlexBox>
          <S.Button onClick={hide}>X</S.Button>
        </S.FlexBox>
        <Image
          src="https://ma6-main.s3.ap-northeast-2.amazonaws.com/ma6_main_images/Logo.png"
          alt="로고"
          width={70}
          height={70}
        />
        <S.FlexBox>{/* <S.DivisionLine /> */}</S.FlexBox>
        <div>로그인</div>
        <S.FlexBox direction="column">
          <Naver />
          <Kakao />
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

export default LoginModal;
