import Link from 'next/link';
import Logo from '../Logo';
import React, { useCallback, useState } from 'react';
import { AiFillBell } from 'react-icons/ai';
import { useRouter } from 'next/router';
import { styled } from 'styled-components';
import LoginModal from '../login-modal/LoginModal';
import { useRecoilState } from 'recoil';
import { LoginModalAtom } from '@/recoil/atoms/LoginModalAtom';
import { NotificationModalAtom } from '@/recoil/atoms/NotificatioinModalAtom';
import AlarmModal from '../notification/AlarmModal';
import useModal from '@/hooks/useModal';

// 전체 Header Container
const HeaderContainer = styled.div`
  /* background-color: blanchedalmond; */
  position: relative;
  height: 80px;
  width: 1000;
  align-items: center;
  justify-content: center;
  display: flex;
  /* flex-wrap: wrap; */

  padding: 0px 20px;
  z-index: 1000;
  transition: all 0.3s ease;
`;

// Logo 박스
const LogoSpace = styled.div`
  position: relative;
  margin-right: 20px;
`;

// HeaderNav List 박스
const HeaderNavBox = styled.div`
  margin-top: 20px;
  margin-right: 10px;
  position: sticky;
  display: flex;
  align-items: center;
`;

// 로그인 버튼
const LoginButton = styled.button`
  margin-top: -16px;
  margin-right: 10px;
  border: none;
  cursor: pointer;
`;

// 알람 버튼
const AlarmIcon = styled.button`
  margin-top: -10px;
  /* margin-left: 5px; */
  color: #8acdef;
  cursor: pointer;
  background: none;
  border: none;
  font-size: 24px;
  &:hover {
    color: #749bc2;
  }
`;

const NavData = [
  { id: 'menu01', name: '전체 게시판', path: '/' },
  { id: 'menu02', name: '자유 게시판', path: '/postboards/free' },
  { id: 'menu03', name: '멘토멘티 게시판', path: '/postboards/menmen' },
  { id: 'menu04', name: '만남 게시판', path: '/postboards/meeting' },
  { id: 'menu05', name: '장터 게시판', path: '/postboards/market' },
];

const HeaderNavigate = (): JSX.Element => {
  const router = useRouter();
  const [isLoginModal, setIsLoginModal] = useRecoilState(LoginModalAtom);
  const [isAlarmModal, setIsAlarmModal] = useRecoilState(NotificationModalAtom);

  const { isOpenModal: loginState, handleModal: loginHandle } = useModal();
  const { isOpenModal: alarmState, handleModal: alarmHandle } = useModal();

  const handleLoginClick = useCallback(() => {
    setIsLoginModal(!isLoginModal);
  }, [isLoginModal]);

  const handleAlarmClick = useCallback(() => {
    setIsAlarmModal(!isAlarmModal);
  }, [isAlarmModal]);

  return (
    <HeaderContainer>
      <LogoSpace>
        <Logo />
      </LogoSpace>
      <HeaderNavBox>
        <nav>
          <ul
            style={{
              width: '1000',
              flexWrap: 'wrap',
              flexDirection: 'row',
              margin: '-20px 0 0 0px', // 수정 필요
            }}>
            {NavData.map((menu) => {
              return (
                <li
                  key={menu.id}
                  style={{
                    display: 'inline',
                    marginRight: '70px',
                  }}>
                  <Link legacyBehavior href={menu.path}>
                    <a
                      style={{
                        fontSize: '20px',
                        fontWeight:
                          menu.path === router.pathname ? 'bolder' : 'bold',
                        textDecoration: 'none',
                        color: menu.path === router.pathname ? 'gray' : 'black',
                      }}>
                      {menu.name}
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <LoginButton onClick={loginHandle}>Login</LoginButton>
        {loginState && <LoginModal/>}
        <AlarmIcon onClick={alarmHandle}>
          <AiFillBell />
        </AlarmIcon>
        {alarmState && <AlarmModal />}
      </HeaderNavBox>
    </HeaderContainer>
  );
};

export default HeaderNavigate;
