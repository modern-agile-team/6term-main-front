import Link from 'next/link';
import Logo from '../Logo';
import React from 'react';
import { AiFillBell } from 'react-icons/ai';
import { useRouter } from 'next/router';
import * as S from './styled';
import LoginModal from '../login-modal/LoginModal';
import AlarmModal from '../notification/AlarmModal';
import useModal from '@/hooks/useModal';
import { useRecoilValue } from 'recoil';
import { LoginStateAtom } from '@/recoil/atoms/LoginStateAtom';
import AfterLoginModal from '../login-modal/AfterLoginModal';

const NavData = [
  { id: 'menu01', name: '전체 게시판', path: '/' },
  { id: 'menu02', name: '자유 게시판', path: '/postboards/free' },
  { id: 'menu03', name: '멘토멘티 게시판', path: '/postboards/menmen' },
  { id: 'menu04', name: '만남 게시판', path: '/postboards/meeting' },
  { id: 'menu05', name: '장터 게시판', path: '/postboards/market' },
];

const HeaderNavigate = (): JSX.Element => {
  const router = useRouter();
  const { isOpenModal: loginState, handleModal: loginHandle } = useModal();
  const { isOpenModal: alarmState, handleModal: alarmHandle } = useModal();
  const { isOpenModal: afterLoginState, handleModal: afterLoginHandle } =
    useModal();
  const isLogin = useRecoilValue(LoginStateAtom);

  return (
    <S.HeaderContainer>
      <S.LogoSpace>
        <Logo />
      </S.LogoSpace>
      <S.HeaderNavBox>
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
        {isLogin ? (
          <div>
            <div onClick={afterLoginHandle}>아이콘</div>
            {afterLoginState && (
              <AfterLoginModal show={afterLoginState} hide={afterLoginHandle} />
            )}
          </div>
        ) : (
          <S.LoginButton onClick={loginHandle}>Login</S.LoginButton>
        )}
        {loginState && <LoginModal show={loginState} hide={loginHandle} />}
        <S.AlarmIcon onClick={alarmHandle}>
          <AiFillBell />
        </S.AlarmIcon>
        {alarmState && <AlarmModal show={alarmState} hide={alarmHandle} />}
      </S.HeaderNavBox>
    </S.HeaderContainer>
  );
};

export default HeaderNavigate;
