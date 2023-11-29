import Link from 'next/link';
import Logo from '../../common/Logo';
import React from 'react';
import { AiFillBell } from 'react-icons/ai';
import { useRouter } from 'next/router';
import * as S from './styled';
import LoginModal from '../login-modal/LoginModal';
import useModal from '@/hooks/useModal';
import { useRecoilValue } from 'recoil';
import { LoginStateAtom } from '@/recoil/atoms/LoginStateAtom';
import AfterLoginModal from '../login-modal/AfterLoginModal';
import UserIcon from '@/components/common/UserIcon';

const NavData = [
  { id: 'menu01', name: '전체', path: '/' },
  { id: 'menu02', name: '자유', path: '/free' },
  { id: 'menu03', name: '멘토멘티', path: '/menmen' },
  { id: 'menu04', name: '만남', path: '/meeting' },
  { id: 'menu05', name: '장터', path: '/market' },
];

const HeaderNavigate = (): JSX.Element => {
  const router = useRouter();
  const { isOpenModal: loginState, handleModal: loginHandle } = useModal();
  const { isOpenModal: afterLoginState, handleModal: afterLoginHandle } =
    useModal();
  const isLogin = useRecoilValue(LoginStateAtom);

  const handlePushRouter = (path: string) => {
    if (path === '/') {
      router.push({
        pathname: `/`,
      });
    } else {
      router.push({
        pathname: `${path}`,
        query: {
          category: path,
        },
      });
    }
  };

  return (
    <S.HeaderContainer>
      <S.LogoSpace>
        <Logo />
      </S.LogoSpace>
      <S.HeaderNavBox>
        <nav>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              minWidth: 500,
            }}>
            {NavData.map((menu) => {
              return (
                <div
                  key={menu.id}
                  style={{
                    fontSize: '20px',
                    fontWeight:
                      menu.path === router.pathname ? 'bolder' : 'bold',
                    textDecoration: 'none',
                    color: menu.path === router.pathname ? '  gray' : 'black',
                    margin: '0px 10px 0px 10px',
                    cursor: 'pointer',
                  }}
                  onClick={() => handlePushRouter(menu.path)}>
                  {menu.name}게시판
                </div>
              );
            })}
          </div>
        </nav>
        {isLogin ? (
          <div>
            <div onClick={afterLoginHandle}>
              <UserIcon />
            </div>
            {afterLoginState && (
              <AfterLoginModal show={afterLoginState} hide={afterLoginHandle} />
            )}
          </div>
        ) : (
          <S.LoginButton onClick={loginHandle}>Login</S.LoginButton>
        )}
        {loginState && <LoginModal show={loginState} hide={loginHandle} />}
      </S.HeaderNavBox>
    </S.HeaderContainer>
  );
};

export default HeaderNavigate;
