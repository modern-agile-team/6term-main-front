import styled from 'styled-components';

export const ChatSpaceHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: inherit;
  height: 70px;
  border: 2px solid green;
`;

export const ChatSpaceRoomProfileBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 200px;
  height: inherit;
  border: 2px solid blue;
`;

export const ChatSpaceNavbox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 10px;
  width: auto;
  font-size: 22px;
  /* border: solid yellow; */
  cursor: pointer;
  & > * {
    margin-right: 15px;
  }
`;
