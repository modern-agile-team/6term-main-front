import styled from 'styled-components';

export const ChatRoomArea = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: auto;
  width: 360px;
  height: inherit;
  border: 2px solid blue;
  border-radius: 10px 0 0 10px;
`;

export const ChatSpaceArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 940px;
  height: inherit;
  border: 2px solid red;
  border-radius: 0 10px 10px 0;
`;
