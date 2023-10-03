import styled from 'styled-components';
import { useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { SelectBoardAtom } from '@/recoil/atoms/UserPostsAtom';

const CustomSelect = () => {
  const boardList = [
    {
      id: 1,
      main: '자유',
      sub: ['잡담', '홍보'],
    },
    {
      id: 2,
      main: '멘토멘티',
      sub: ['공부', '운동', '토익'],
    },
    {
      id: 3,
      main: '만남',
      sub: ['친구', '밥약', '미팅'],
    },
    {
      id: 4,
      main: '장터',
      sub: ['책', '중고', '자취방'],
    },
  ];

  const [isCheckShow, setCheckShow] = useState<boolean>(false);
  const [getBoard, setBoard] = useRecoilState(SelectBoardAtom);

  /** 게시판 선택 시 */
  const handleOnChangeSelectValue = (e: any, mainSelect: string) => {
    const { innerText } = e.target;
    setBoard((prev) => {
      return {
        ...prev,
        main: mainSelect,
        sub: innerText,
      };
    });
  };

  /**외부 클릭 시 */
  const handleClose = () => {
    setCheckShow(!isCheckShow);
  };

  return (
    <>
      <SelectBox onClick={() => setCheckShow(!isCheckShow)}>
        <Label>{getBoard.sub}게시판</Label>
        <SelectOptions show={`${isCheckShow}`}>
          {boardList.map((list) => {
            return (
              <div key={list.id}>
                {list.main}게시판
                {list.sub.map((sub, idx) => {
                  return (
                    <Option
                      key={idx}
                      onClick={() => {
                        handleOnChangeSelectValue(event, list.main);
                      }}>
                      {sub}
                    </Option>
                  );
                })}
              </div>
            );
          })}
        </SelectOptions>
        {isCheckShow && (
          <DropDown
            onClick={(e: React.MouseEvent) => {
              e.preventDefault();

              if (isCheckShow) {
                handleClose();
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
  width: 200px;
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
