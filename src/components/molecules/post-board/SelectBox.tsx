import { SelectBoard } from '@/recoil/atoms/UserPostsAtom';
import { useState, useEffect } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
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
  // const [getMain, setGetMain] = useState<string>('');
  // const [getSub, setGetSub] = useState<string>('');
  const setBoard = useSetRecoilState(SelectBoard);

  /**게시판 선택 */
  const handleSelector = (e: any) => {
    switch (e.target.value) {
      case '잡담' || '홍보':
        setBoard((prev) => {
          return {
            ...prev,
            main: '자유',
          };
        });
        break;
      case '공부' || '운동' || '토익':
        setBoard((prev) => {
          return {
            ...prev,
            main: '멘토멘티',
          };
        });
        break;
      case '친구' || '밥약' || '미팅':
        setBoard((prev) => {
          return {
            ...prev,
            main: '만남',
          };
        });
        break;
      case '책' || '중고' || '자취방':
        setBoard((prev) => {
          return {
            ...prev,
            main: '장터',
          };
        });
        break;
    }
    setBoard((prev) => {
      return {
        ...prev,
        sub: e.target.value,
      };
    });
  };

  return (
    <SelectBoxContainer>
      <label style={{ paddingRight: 10 }}>게시판 선택</label>
      <select onChange={handleSelector}>
        <option></option>
        {boardList.map((list) => {
          return (
            <optgroup key={list.id} label={`${list.main} 게시판`}>
              {list.sub.map((sub) => {
                return (
                  <option key={sub} value={sub}>
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
