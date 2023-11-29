import styled from 'styled-components';
import { GoBell } from 'react-icons/go';

export const ChatSpaceInputArea = styled.div`
  display: flex;
  position: relative;
  padding: 5px;
  bottom: 0;
  max-width: 940;
  height: 50px;
  align-items: center;
`;

export const ChatSpaceInputTextArea = styled.textarea`
  display: flex;
  resize: none;
  width: 750px;
  height: 30px;
  margin-left: 10px;
  padding-left: 12px;
  line-height: 30px;
  border-radius: 20px;
  border: 0.5px solid #d3d3d3;
  outline: none;
  font-size: 14px;
  font-weight: bold;
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
