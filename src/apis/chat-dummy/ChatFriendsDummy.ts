import { FriendsDummy } from './friendsDummy';

// 채팅 대화 데이터 형식 정의
interface ChatMessage {
  textMessage: string;
  createdAt: string;
}

interface ChatRoom {
  roomId: {
    id: number;
    userId: number;
    userName: string;
    messages: ChatMessage[];
  };
}

// 더미 채팅 대화 데이터를 저장할 배열
const ChatRoomDummy: ChatRoom[] = [];

// FriendsDummy에서 정보 추출 및 채팅방 생성
FriendsDummy.forEach((friend) => {
  const { id, name, roomId } = friend;
  const chatRoom: ChatRoom = {
    roomId: {
      id: roomId,
      userId: id,
      userName: name,
      messages: [
        {
          textMessage: `안녕  내이름은 ${name}입니다!`,
          createdAt: '2023-11-01T12:00:00',
        },
        {
          textMessage: '어떤 과에 재학중이신가요?',
          createdAt: '2023-11-01T12:05:00',
        },
      ],
    },
  };
  ChatRoomDummy.push(chatRoom);
});

export { ChatRoomDummy };
