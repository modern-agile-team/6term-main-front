// // import react, { useCallback } from 'react';
// import { useEffect, useRef, useCallback } from 'react';
// import * as S from './styled';
// import { MdSend } from 'react-icons/md';
// import autosize from 'autosize';

// interface Props {
//   chat: string;
//   onSubmitForm: (e: any) => void;
//   onChangeChat: (e: any) => void;
//   placeholder?: string;
// }

// const ChatBox = ({ chat, onSubmitForm, onChangeChat, placeholder }: Props) => {
//   const textareaRef = useRef<HTMLTextAreaElement | null>(null);
//   useEffect(() => {
//     if (textareaRef.current) {
//       autosize(textareaRef.current);
//     }
//   }, []);
//   const onKeydownChat = useCallback(
//     (e: any) => {
//       if (e.key === 'Enter') {
//         if (!e.shiftKey) {
//           e.preventDefault();
//           onSubmitForm(e);
//         }
//       }
//     },
//     [onSubmitForm],
//   );

//   return (
//     <S.ChatArea>
//       <S.Form onSubmit={onSubmitForm}>
//         <S.Textarea
//           id="editor-chat"
//           value={chat}
//           onChange={onChangeChat}
//           onKeyDown={onKeydownChat}
//           placeholder={placeholder}
//           ref={textareaRef}
//         />
//         <S.ChatInputBox>
//           <S.SendButton
//             className={
//               'c-button-unstyled c-icon_button c-icon_button--light c-icon_button--size_medium c-texty_input__button c-texty_input__button--send' +
//               (chat?.trim() ? '' : ' c-texty_input__button--disabled')
//             }
//             data-qa="texty_send_button"
//             aria-label="Send message"
//             data-sk="tooltip_parent"
//             type="submit"
//             disabled={!chat?.trim()}>
//             <MdSend />
//             <i
//               className="c-icon c-icon--paperplane-filled"
//               aria-hidden="true"
//             />
//           </S.SendButton>
//         </S.ChatInputBox>
//       </S.Form>
//     </S.ChatArea>
//   );
// };

// export default ChatBox;
