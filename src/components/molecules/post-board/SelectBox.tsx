import { useState, useEffect } from 'react';
import styled from 'styled-components';

const SelectBox = () => {
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
  const [getMain, setGetMain] = useState<number>();
  const [getSub, setGetSub] = useState<number>();

  const handleSelector = (e: any) => {
    setGetSub(e.target.value);
  };

  useEffect(() => {
    console.log(getMain);
    console.log(getSub);
  });
  return (
    <SelectBoxContainer>
      <label style={{ paddingRight: 10 }}>게시판 선택</label>
      <select>
        <option></option>
        {boardList.map((list) => {
          return (
            <optgroup key={list.id} label={`${list.main}게시판`}>
              {list.sub.map((sub) => {
                return (
                  <option key={sub} value={sub} onChange={handleSelector}>
                    {sub} 게시판
                  </option>
                );
              })}
            </optgroup>
          );
        })}
      </select>
    </SelectBoxContainer>
  );
};

export default SelectBox;

const SelectBoxContainer = styled.div`
  margin-left: auto;
`;
