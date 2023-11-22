import styled from 'styled-components';

export const ListTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  font-size: 24px;
`;

export const UserBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  margin-left: auto;
  font-size: 14px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #e7f7ff;
  }
`;

export const IfNoData = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.6;
`;
