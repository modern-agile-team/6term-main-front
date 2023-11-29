import React, { useState, useEffect } from 'react';
import * as S from './styled';

const ChatSpaceFooter = () => {
  const [inputMessage, setInputMessage] = useState('');

  const handleCangeMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputMessage(e.target.value.trimLeft());
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      if (!e.shiftKey) {
        e.preventDefault();
        handleSend();
      } else {
        setInputMessage((prevInput) => prevInput);
      }
    }
  };

  const handleSend = () => {
    setInputMessage('');
  };
  console.log(inputMessage);

  return (
    <S.ChatSpaceInputArea>
      <S.ChatSpaceInputTextArea
        value={inputMessage}
        onKeyDown={handleKeyDown}
        onChange={handleCangeMessage}
        placeholder="메세지 입력..."
      />
      <S.ChatSpaceFooterbuttonBox></S.ChatSpaceFooterbuttonBox>
      {/* <S.ChatSpaceInputButton onClick={handleSend}>
        <span>전 송</span>
      </S.ChatSpaceInputButton> */}
    </S.ChatSpaceInputArea>
  );
};

export default ChatSpaceFooter;
