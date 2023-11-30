import styled from 'styled-components';

// 전체 Header Container
export const HeaderContainer = styled.div`
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
export const LogoSpace = styled.div`
  position: relative;
  margin-right: 20px;
`;

// HeaderNav List 박스
export const HeaderNavBox = styled.div`
  margin-top: 20px;
  margin-right: 10px;
  position: sticky;
  display: flex;
  align-items: center;
`;

// 로그인 버튼
export const LoginButton = styled.button`
  margin-top: -16px;
  margin-right: 10px;
  border: none;
  cursor: pointer;
`;

// 알람 버튼
export const AlarmIcon = styled.button`
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

export const MyIconBox = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  cursor: pointer;
`;
