import UserIcon from "@/components/common/UserIcon";
import React from "react";
import { styled } from "styled-components";
import { MdOutlineSearch, MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import Link from "next/link";

const FloatingBox = styled.div`
  position: absolute;
  align-items: center;
  display: flex;
  flex-direction: column;
  top: 200px;
  right: 50px;
  border: 3px solid #9d9d9d;
`
const FriendSearchIcon = styled.div`
  font-size: 30px;
  color: #91C8E4;
`

const FloatingBar = () => {
  return (
    <FloatingBox>
      <MdKeyboardArrowUp />
      <UserIcon />
      <Link legacyBehavior href="/search/SearchFriends">
        <a>
          <FriendSearchIcon>
            <MdOutlineSearch />
          </FriendSearchIcon>
        </a>
      </Link>
      <MdKeyboardArrowDown />
    </FloatingBox>
  )
}

export default FloatingBar;