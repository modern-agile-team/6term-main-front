import exp from 'constants';
import styled from 'styled-components';

// ********************* ChatSpace ***********************//

export const ChatSpaceWrapper = styled.div`
  display: flex;
  flex: 1;
`;

export const ChatSpaces = styled.div`
  width: 65px;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  background: #3f0e40;
  border-top: 1px solid #e7f7ff;
  border-right: 1px solid #e7f7ff;
  vertical-align: top;
  text-align: center;
  padding: 15px 0 0;
  /* border-radius: 7px; */
`;

// slack 상에서는 channels
export const ChatLists = styled.div`
  width: 260px;
  /* height: ; */
  border-radius: 7px 0 0 7px;
  /* display: inline-flex; */
  /* flex-direction: column; */
  background: #e7f7ff;
  color: rgb(188, 171, 188);
  /* vertical-align: top; */
  /* & a {
    padding-left: 36px;
    color: inherit;
    text-decoration: none;
    height: 28px;
    line-height: 28px;
    display: flex;
    align-items: center;
    &.selected {
      color: white;
    }
  }
  & .bold {
    color: white;
    font-weight: bold;
  }
  & .count {
    margin-left: auto;
    background: #cd2553;
    border-radius: 16px;
    display: inline-block;
    font-size: 12px;
    font-weight: 700;
    height: 18px;
    line-height: 18px;
    padding: 0 9px;
    color: white;
    margin-right: 16px;
  } */
  /* & h2 {
    height: 36px;
    line-height: 36px;
    margin: 0;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-size: 15px;
    margin-right: 40px;
  } */
`;

// WorkSpaceName
export const ChatSpaceName = styled.div`
  height: 64px;
  line-height: 64px;
  border: none;
  width: 260px;
  text-align: center;
  /* border-top: 1px solid rgba(145, 200, 228); */
  border-radius: 7px 0 0 0;
  border-bottom: 1px solid rgba(145, 200, 228, 0.3);
  font-weight: 900;
  font-size: 24px;
  background: transparent;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  padding: 0;
  /* padding-left: 16px; */
  margin: 0;
  color: black;
`;

// MenuScroll
export const ChatListScroll = styled.div`
  height: 436px;
  overflow-y: auto;
`;

export const Chats = styled.div`
  flex: 1;
`;
