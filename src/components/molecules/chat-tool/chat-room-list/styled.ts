import styled from 'styled-components';

export const ChatListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  overflow-y: auto;
`;

export const ChatListItem = styled.li`
  display: flex;
  margin: 0;
  padding: 8px;
  width: auto;
  border-bottom: 1px soild #999;
`;

export const ChatListImage = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 6px;
  border-radius: 50%;
`;

export const ChatListName = styled.p`
  font-size: 1em;
  font-weight: bold;
  margin: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const ChatListRight = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: calc(100% - 40px - 6px);
  gap: 3px;
`;

export const ChatListbottom = styled.div`
  display: flex;
  justify-content: space-between;
  span {
    font-size: 0.8em;
    color: #555;
  }
`;
