import Link from "next/link";
import Logo from "../Logo";
import { AiFillBell } from "react-icons/ai"
import { useRouter } from "next/router";
import { styled } from "styled-components";

const HeaderContainer = styled.div`
  /* background-color: blanchedalmond; */
  flex-flow: wrap;
  height: 80px;
  align-items: center;
  justify-content: center;
  display: flex;
  padding: 0px 20px;
`;

const LogoSpace = styled.div`
  
`

const HeaderNavBox = styled.div`
  display: flex;
  align-items: center;
`;

const AlarmIcon = styled.button`
  margin-top: -10px;
  color: #8ACDEF;
  cursor: pointer;
  background: none;
  border: none;
  font-size: 24px;
  &:hover {
    color: #749BC2;
  }
`;

const NavData = [
  { id: 'menu01', name: '전체 게시판', path: '/' },
  { id: 'menu02', name: '자유 게시판', path: '/postboards/FreeBoard' },
  { id: 'menu03', name: '멘토멘티 게시판', path: '/postboards/MenmenBoard' },
  { id: 'menu04', name: '만남 게시판', path: '/postboards/meeting' },
  { id: 'menu05', name: '장터 게시판', path: '/postboards/MarketBoard' },
];

const HeaderNav = (): JSX.Element => {
  const router = useRouter();

  return (
    <HeaderContainer>
      <LogoSpace>
        <Logo />
      </LogoSpace>
      <HeaderNavBox>
        <nav>
          <ul style={{ width: '100%', margin: '-20px 0 0 0px'}}>
            {NavData.map((menu) => {
              return (
                <li key={menu.id} style={{
                  display: 'inline', marginRight: '70px'
                }}>
                  <Link legacyBehavior href={menu.path}>
                    <a style={{
                      fontSize: '20px',
                      fontWeight: menu.path === router.pathname ? 'bolder' : 'bold',
                      textDecoration: 'none',
                      color: menu.path === router.pathname ? 'gray' : 'black',
                    }}>
                      {menu.name}
                    </a>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
        <AlarmIcon>
          <AiFillBell />
        </AlarmIcon>
      </HeaderNavBox>
    </HeaderContainer>
  )
};

export default HeaderNav;