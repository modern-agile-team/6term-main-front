import styled from 'styled-components';

interface FloatingBoxProps {
  position: number;
}

export const FloatingBox = styled.div<FloatingBoxProps>`
  margin: 10px;
  position: absolute;
  align-items: center;
  display: flex;
  flex-direction: column;
  top: ${(props) => props.position}px;
  right: 50px;
  /* border: 3px solid #9d9d9d; */
`;

export const FriendSearchIcon = styled.div`
  font-size: 30px;
  color: #91c8e4;
`;

export const ChatIcon = styled.div`
  font-size: 30px;
  color: #91c8e4;
  cursor: pointer;
`;
export const ScrollButotn = styled.div`
  font-size: 30px;
  cursor: pointer;
  opacity: 0.7;
`;

export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
