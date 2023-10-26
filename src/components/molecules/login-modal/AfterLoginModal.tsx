import React, { useState, useEffect } from 'react';
import * as S from './styled';
import { useSetRecoilState } from 'recoil';
import { LoginStateAtom } from '@/recoil/atoms/LoginStateAtom';
import AUTHS from '@/apis/oauth';
interface ModalType {
  show: boolean;
  hide: () => void;
}

const AfterLoginModal = ({ show, hide }: ModalType) => {
  const setIsLogin = useSetRecoilState(LoginStateAtom);

  const logoutHandle = async () => {
    const provider =
      localStorage.getItem('provider') === 'naver' ? 'naver' : 'kakao';

    if (confirm('로그아웃 하시겠습니까?')) {
      //logoutAPI요청
      const res = await AUTHS.handleLogout(provider);
      // localStorage에서 토큰값 삭제
      console.log(localStorage.getItem('provider'));
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('provider');
      setIsLogin(false);
    }
  };

  return (
    <div>
      <S.ModalWrapper>
        <>
          <div>마이페이지</div>
          <div onClick={logoutHandle}>로그아웃</div>
        </>
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

export default AfterLoginModal;
