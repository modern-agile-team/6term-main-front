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
  const [isInitial, setIsInitital] = useState(false);
  const setIsLogin = useSetRecoilState(LoginStateAtom);

  //useEffect를 사용해서 ssr확인
  useEffect(() => {
    setIsInitital(true);
  }, []);

  const logoutHandle = async () => {
    const provider =
      localStorage.getItem('provider') === 'naver' ? 'naver' : 'kakao';

    if (confirm('로그아웃 하시겠습니까?')) {
      //logoutAPI요청
      await AUTHS.handleLogout(provider);
      // localStorage에서 토큰값 삭제
      localStorage.setItem('accessToken', '');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('provider');
      isInitial ? setIsLogin(false) : setIsInitital(false);
    }
  };

  return (
    <div>
      <S.AfterModalContainer>
        <>
          <S.ControlCancel onClick={hide}>X</S.ControlCancel>
          <S.ControlBox onClick={logoutHandle}>로그아웃</S.ControlBox>
        </>
      </S.AfterModalContainer>
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
