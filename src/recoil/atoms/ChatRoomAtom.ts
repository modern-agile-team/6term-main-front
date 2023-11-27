import { ChatRoom, ChatRoomDummy } from '@/apis/chat-dummy/ChatRoomDummy';
import { atom } from 'recoil';

const getChatRoomDummyData = (): ChatRoom[] => {
  return ChatRoomDummy;
};

export const chatRoomAtom = atom<ChatRoom[]>({
  key: 'chatRoomAtom',
  default: getChatRoomDummyData(),
});
