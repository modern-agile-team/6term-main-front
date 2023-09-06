import UserIcon from "@/components/common/UserIcon";
import React from "react";
import { styled } from "styled-components";
import {
  MdOutlineSearch,
  MdKeyboardArrowUp,
  MdKeyboardArrowDown,
} from "react-icons/md";
import { IoMdChatbubbles } from "react-icons/io";
import Link from "next/link";

const FloatingBox = styled.div`
  margin: 10px;
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

const ChatIcon = styled.div`
  font-size: 30px;
  color: #91C8E4;
`
const FloatingBar = () => {
  return (
    <FloatingBox>
      <MdKeyboardArrowUp />
      <Link legacyBehavior href="/search/SearchFriends">
        <a>
          <FriendSearchIcon>
            <MdOutlineSearch />
          </FriendSearchIcon>
        </a>
      </Link>
      <UserIcon />
      <Link legacyBehavior href="/chatting">
        <a>
          <ChatIcon>
            <IoMdChatbubbles />
          </ChatIcon>
        </a>
      </Link>
      <MdKeyboardArrowDown />
    </FloatingBox>
  )
}

export default FloatingBar;