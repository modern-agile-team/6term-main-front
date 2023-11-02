import styled from 'styled-components';

export const ChatArea = styled.div`
  display: flex;
  width: 500px;
  padding: 20px;
  padding-top: 0;
`;

export const Form = styled.form`
  color: rgb(29, 28, 29);
  font-size: 15px;
  width: 100%;
  border-radius: 4px;
  border: 1px solid rgb(29, 28, 29);
`;
export const Textarea = styled.textarea`
  font-size: 15px;
  padding: 8px 9px;
  width: 100%;
  height: 44px; /* 수정: 높이 조절 */
  padding: 9px 10px;
  outline: none;
  border-radius: 4px;
  resize: none;
  line-height: 22px;
  border: none;
`;
// export const MentionsTextarea = styled(MentionsInput)`
//   font-family: Slack-Lato, appleLogo, sans-serif;
//   font-size: 15px;
//   padding: 8px 9px;
//   width: 100%;
//   & strong {
//     background: skyblue;
//   }
//   & textarea {
//     height: 44px;
//     padding: 9px 10px !important;
//     outline: none !important;
//     border-radius: 4px !important;
//     resize: none !important;
//     line-height: 22px;
//     border: none;
//   }
//   & ul {
//     border: 1px solid lightgray;
//     max-height: 200px;
//     overflow-y: auto;
//     padding: 9px 10px;
//     background: white;
//     border-radius: 4px;
//     width: 150px;
//   }
// `;

//Slack에선 Toolbox
export const ChatInputBox = styled.div`
  position: relative;
  background: rgb(248, 248, 248);
  height: 41px;
  display: flex;
  border-top: 1px solid rgb(221, 221, 221);
  align-items: center;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;

export const SendButton = styled.button`
  position: absolute;
  right: 5px;
  top: 5px;
`;

//mention 목록
// export const EachMention = styled.button<{ focus: boolean }>`
//   padding: 4px 20px;
//   background: transparent;
//   border: none;
//   display: flex;
//   align-items: center;
//   color: rgb(28, 29, 28);
//   width: 100%;
//   & img {
//     margin-right: 5px;
//   }
//   ${({ focus }) =>
//     focus &&
//     `
//     background: #1264a3;
//     color: white;
//   `};
// `;