import React from "react"
import { styled } from "styled-components";

const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  width: 300px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 9999;
  text-align: center;
`;

const Text = styled.p`
  font-size: 18px;
`;

const Button = styled.button`
  margin: 10px;
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  &:hover {
    background-color: #2980b9;
  }
`;

interface LoginPopupProps {
  onYesClick: () => void;
  onNoClick: () => void;
};

const LoginPopup = ({ onYesClick, onNoClick }: LoginPopupProps): JSX.Element => {
  return (
    <ModalWrapper>
      <Text>로그인 하시겠습니까?</Text>
      <Button onClick={onYesClick}>예</Button>
      <Button onClick={onNoClick}>아니오</Button>
    </ModalWrapper>
  );
};

export default LoginPopup;