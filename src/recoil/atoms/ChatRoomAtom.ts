import { ChatRoomDummy, ChatRoomType } from '@/apis/chat-dummy/ChatRoomDummy';
import { atom } from 'recoil';

export const chatRoomAtom = atom<ChatRoomType[]>({
  key: 'chatRoomAtom',
  default: ChatRoomDummy,
});
