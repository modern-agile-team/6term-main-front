// import React, { useCallback } from 'react';
// import * as S from './styled';
// import useInput from '@/hooks/useInput';
// import axios from 'axios';
// import ChatBox from '@/components/molecules/chatting/chat-box/ChatBox';

// const ChattingRoom = () => {
//   const [chat, onChangeChat, setChat] = useInput('');
//   const onSubmitForm = useCallback(
//     (e: any) => {
//       e.preventDefault();
//       console.log(chat);
//       if (chat?.trim()) {
//         axios
//           .post(`/api/chat-room/{roomId}`, {
//             content: chat,
//           })
//           .then(() => {
//             setChat('');
//           })
//           .catch(console.error);
//       }
//       setChat('');
//     },
//     [chat],
//   );
//   // if (!userData || !myData) {
//   //   return null;
//   // }

//   return (
//     <S.Container>
//       <S.Header>
//         <span>원동건</span>
//       </S.Header>
//       {/* <ChatList/> */}
//       <ChatBox />
//     </S.Container>
//   );
// };

// export default ChattingRoom;
