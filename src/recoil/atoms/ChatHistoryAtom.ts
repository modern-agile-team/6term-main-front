import { ChatMessage, ChatMessageDummy } from '@/apis/chat-dummy/ChattingDummy';
import { atom } from 'recoil';

export const chatHistoryAtom = atom<ChatMessage[]>({
  key: 'chatHistoryAtom',
  default: ChatMessageDummy,
});
