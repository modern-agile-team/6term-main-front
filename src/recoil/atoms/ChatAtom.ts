import { atom } from 'recoil';

export const ChatRoomState = atom({
  key: 'chatRoomState',
  default: null,
});

export const MessageState = atom({
  key: 'messageState',
  default: '[]',
});
