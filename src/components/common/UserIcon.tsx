// 무조건 수정 요망...Icon으로 처리했지만 결국엔 OAuth에서
// 받아오는 유저프로필 사진이 들어갈 자리이다..
import React from 'react';
import { styled } from 'styled-components';
import { CgProfile } from 'react-icons/cg';

const UserPageIcon = styled.div`
  font-size: 30px;
  color: #91c8e4;
  cursor: pointer;
`;

const UserIcon = () => {
  return (
    <UserPageIcon>
      <CgProfile />
    </UserPageIcon>
  );
};

export default UserIcon;
