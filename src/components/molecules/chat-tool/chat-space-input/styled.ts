import styled from 'styled-components';

export const ChatSpaceInputArea = styled.div`
  display: flex;
  position: relative;
  padding: 5px;
  bottom: 0;
  max-width: 940;
  height: 120px;
  align-items: center;
`;

export const ChatSpaceInputTextArea = styled.textarea`
  display: flex;
  resize: none;
  width: 800px;
  height: 110px;
  padding: 5px;
  border-radius: 10px;
  border: 0.5px solid #d3d3d3;
  outline: none;
  font-size: 16px;
`;

export const ChatSpaceInputButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  margin-left: 14px;
  border: none;
  border-radius: 7px;
  &:hover {
    cursor: pointer;
    background-color: #d3d3d3;
    & > span {
      color: white;
    }
  }
`;
