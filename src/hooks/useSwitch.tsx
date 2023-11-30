import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

type UseSwitchReturnType = {
  isSwitched: boolean;
  toggleSwitch: () => void;
};

const SwitchContainer = styled.div<{ isSwitched: boolean }>`
  width: 32px;
  height: 10px;
  background-color: ${(props) => (props.isSwitched ? '#0d6efd' : '#ccc')};
  border: none;
  border-radius: 15px;
  display: flex;
  align-items: center;
  padding: 5px;
  cursor: pointer;
`;

const SwitchCircle = styled.div<{ isSwitched: boolean }>`
  width: 12px;
  height: 12px;
  background-color: white;
  border-radius: 50%;
  transition: transform 0.3s ease-in-out;
  transform: ${(props) =>
    props.isSwitched ? 'translateX(21px)' : 'translateX(0)'};
`;

const useSwitch = (initialState: boolean): UseSwitchReturnType => {
  const [isSwitched, setSwitch] = useState<boolean>(initialState);

  const toggleSwitch = () => {
    setSwitch((prev) => !prev);
  };

  return {
    isSwitched,
    toggleSwitch,
  };
};

const CustomSwitch = () => {
  const { isSwitched, toggleSwitch } = useSwitch(false);

  return (
    <SwitchContainer isSwitched={isSwitched} onClick={toggleSwitch}>
      <SwitchCircle isSwitched={isSwitched} />
    </SwitchContainer>
  );
};

export default CustomSwitch;
