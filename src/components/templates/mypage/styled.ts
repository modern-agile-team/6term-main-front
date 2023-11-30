import styled from 'styled-components';

export const MyPageContainer = styled.div`
  display: flex;
  justify-content: center;
  min-height: 80vh;
`;

export const ControlBox = styled.div`
  cursor: pointer;
  margin: 5px;
  border: 1px solid #999;
  border-radius: 15px;
  padding-left: 10px;
  cursor: pointer;
  &:hover {
    background-color: #999;
    color: #fff;
  }
`;
