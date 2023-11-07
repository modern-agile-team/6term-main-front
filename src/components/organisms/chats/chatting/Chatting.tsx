// Mui 로 ui 퍼블리싱, 추후 시간이 나 리팩토링 할 때 변경 가능.
import {
  Stack,
  TextField,
  Alert,
  Button,
  Paper,
  IconButton,
  Tooltip,
} from '@mui/material';
import * as S from './styled';
import { MdSend } from 'react-icons/md';
import { useState, useRef, useEffect } from 'react';
import { BiColumns } from 'react-icons/bi';
import timeStamp from '../TimeStamp';

interface Message {
  userName: string;
  message: string;
  timestamp: string;
  roomId: number;
  profileImage?: string;
}

interface User {
  userid: number;
  userName: string;
  userImage: string;
}

const Chatting = () => {
  const [sendMessage, setSendMessage] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([]);
  const messageEnd = useRef<null | HTMLDivElement>(null);
  useEffect((): any => {
    const scrollToBottom = () => {
      messageEnd.current?.scrollIntoView({ behavior: 'smooth' });
    };

    scrollToBottom();
  }, [messages]);

  const sendMessageHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSendMessage(event.target.value);
  };

  const enterKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      submitSendMessage(event);
    }
  };

  const submitSendMessage = async (
    event:
      | React.FormEvent<HTMLButtonElement>
      | React.KeyboardEvent<HTMLInputElement>,
  ) => {
    event.preventDefault();
    if (sendMessage) {
      const { ampm, hours, minutes } = timeStamp(new Date(Date.now()));
      const message = {
        // username: name,
        message: sendMessage,
        timestamp: `${ampm} ${hours}:${minutes}`,
        // roomId: roomId as string,
        // profileImage: profileImage,
      };
      console.log(sendMessage);
      // emitMessage(message);

      setSendMessage('');
    }
  };

  // const exitRoomHandler = async () => {
  //   exitChatRoomAPI({roomId: roomId as string, userId: userId});
  //   emitExitRoom(userId);
  // }

  return (
    <S.ChatContainer>
      <Stack spacing={1} direction="column">
        <Alert
          severity="warning"
          variant="filled"
          sx={{
            backgroundColor: '#e7f7ff',
            color: '#154e6c',
            height: '36px',
            textAlign: 'center',
            borderRadius: '0 7px 0 0',
            borderBottom: '1px solid rgba(145, 200, 228, 0.3);',
          }}>
          채팅 기능은 로그인된 유저에게만 제공됩니다.
        </Alert>
        {/* {채팅 메뉴 출력 영역} */}
        {/* <Stack direction="row">
        <Tooltip title="돌라가기" arrow>
          <IconButton
            aria-label='back'>
              
            </IconButton>
        </Tooltip>
      </Stack> */}
        {/* 채팅 메시지 출력 영역 */}
        <Stack spacing={2} direction="column" sx={{ height: '350px' }}>
          <Paper
            variant="outlined"
            sx={{ overflow: 'auto', height: '500px', padding: '1rem' }}>
            {}
          </Paper>
        </Stack>
        {/* 채팅 메시지 입력 영역 */}
        <Stack spacing={1} direction="row">
          <TextField
            id="chat-message-input"
            label="enter your message"
            variant="outlined"
            value={sendMessage}
            onChange={sendMessageHandler}
            margin="normal"
            autoFocus
            multiline
            rows={2}
            fullWidth
            onKeyPress={enterKeyPress}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            endIcon={<MdSend />}
            onClick={submitSendMessage}>
            send
          </Button>
        </Stack>
      </Stack>
    </S.ChatContainer>
  );
};

export default Chatting;
