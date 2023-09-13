// 무조건 수정 요망...Icon으로 처리했지만 결국엔 OAuth에서
// 받아오는 유저프로필 사진이 들어갈 자리이다..
import React from "react";
import { styled } from "styled-components";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";

const UserPageIcon = styled.div`
  font-size: 30px;
  /* font-weight: bold;  */
  color: #91C8E4;
`;

const UserIcon = () => {
  return (
    <Link legacyBehavior href="/mypage">
      <a>
        <UserPageIcon>
          <CgProfile />
        </UserPageIcon>
      </a>
    </Link>
    
  );
};

export default UserIcon;