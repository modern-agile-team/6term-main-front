import ChatModal, {
  ModalType,
} from '@/components/organisms/chats/chat-modal/ChatModal';
import { useRouter } from 'next/router';

const ChatRoom = (props: ModalType) => {
  const router = useRouter();
  return <ChatModal></ChatModal>;
};
