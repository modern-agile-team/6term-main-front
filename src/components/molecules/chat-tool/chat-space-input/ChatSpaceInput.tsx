import React, { useState, useEffect } from 'react';
import * as S from './styled';

const ChatSpaceInput = () => {
  const [inputMessage, setInputMessage] = useState('');

  const handleCangeMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputMessage(e.target.value.trimLeft());
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSend();
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
        placeholder="채팅을 입력해주세요."
      />
      <S.ChatSpaceInputButton onClick={handleSend}>
        <span>전 송</span>
      </S.ChatSpaceInputButton>
    </S.ChatSpaceInputArea>
  );
};

export default ChatSpaceInput;
