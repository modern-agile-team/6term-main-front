import styled from 'styled-components';

export const ChatSpaceHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: inherit;
  height: 70px;
  border-bottom: 1px solid #d9d9d9;
`;

export const ChatSpaceRoomProfileBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 20px;
  width: 200px;
  height: inherit;
  > img {
    width: 50px;
    height: 50px;
  }
  > span {
    font-size: 17px;
    margin-left: 20px;
    /* opacity: 0.7; */
  }
`;

export const ChatSpaceNavbox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 10px;
  width: auto;
  font-size: 22px;
  cursor: pointer;
  & > * {
    margin-right: 15px;
  }
`;
