import styled from 'styled-components';

export const ModalWrapper = styled.div`
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

export const Text = styled.p`
  font-size: 18px;
`;

export const Button = styled.button`
  font-size: 16px;
  cursor: pointer;
  border: none;
  margin-left: auto;
  border-radius: 5px;
  background-color: #fff;
`;

export const ButtonContain = styled.div`
  display: flex;
  justify-content: center;
`;

export const DivisionLine = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 50%);
  width: 180px;
`;
