import styled from 'styled-components';

interface ButtonContainerProps {
  collapse: Boolean;
  onClick: () => void;
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  background: transparent;
  font-size: 12px;
  border: none;
  width: 26px;
  height: 26px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: black;
  margin-left: -24px;
  cursor: pointer;
  transition: transform 0.3s;
  transform: rotate(${(props) => (props.collapse ? '-90deg' : '0')});
`;

export const CategoryBox = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Category = styled.div`
  color: #0073e6;
`;

export const CollapsibleContainer = styled.div`
  overflow: hidden;
  transition:
    max-height 0.4s ease-in-out,
    opacity 0.4s ease-in-out;
`;

export const ListBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;
