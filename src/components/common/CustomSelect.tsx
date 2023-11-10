import styled from 'styled-components';
import React, { PropsWithChildren, useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { searchBoardAtom } from '@/recoil/atoms/SearchAtom';

interface ModalType {
  show: boolean;
  hide: () => void;
  title: string;
}

const CustomSelect = ({
  show,
  hide,
  title,
  children,
}: PropsWithChildren<ModalType>) => {
  const [getSelect, setSelect] = useRecoilState(searchBoardAtom);

  return (
    <>
      <SelectBox onClick={hide}>
        <Label>{getSelect ? getSelect : title}</Label>
        <SelectOptions show={`${show}`}>{children}</SelectOptions>
        {show && (
          <DropDown
            onClick={(e: React.MouseEvent) => {
              e.preventDefault();

              if (show) {
                hide();
              }
            }}></DropDown>
        )}
      </SelectBox>
    </>
  );
};

const SelectBox = styled.div`
  position: relative;
  margin-left: auto;
  width: 100px;
  padding: 8px;
  border-radius: 5px;
  background-color: #ffffff;
  align-self: center;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 25%);
  cursor: pointer;
  z-index: 1;
  &::before {
    content: '⌵';
    position: absolute;
    top: 1px;
    right: 8px;
    font-size: 20px;
  }
`;

const Label = styled.label`
  font-size: 14px;
  margin-left: 4px;
  text-align: center;
`;

interface SO {
  show: string;
}

const SelectOptions = styled.div<SO>`
  position: absolute;
  list-style: none;
  top: 36px;
  left: 0;
  width: 100%;
  overflow: hidden;
  height: auto;
  max-height: ${(props) => (props.show === 'true' ? 'none' : '0')};
  padding: 0;
  border-radius: 8px;
  background-color: #222222;
  color: #fefefe;
`;

const Option = styled.div`
  font-size: 14px;
  padding: 6px 8px;
  transition: background-color 0.2s ease-in;
  &:hover {
    background-color: #595959;
  }
`;

const DropDown = styled.div`
  background-color: rgba(f, f, f, 100%);
  position: fixed;
  z-index: -1;
  left: 0px;
  top: 0px;
  width: 10000px;
  height: 1000px;
  cursor: auto;
`;

export default CustomSelect;
