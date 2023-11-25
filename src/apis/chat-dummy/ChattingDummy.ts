interface ChatMessage {
  chatId: string;
  textMessage: string;
  createdAt: string;
  sender: {
    id: string;
    name: string;
    profileImage: string;
  };
}
interface ChatMessageList {
  roomId: string;
  contents: ChatMessage[];
  hasNext: boolean;
}
