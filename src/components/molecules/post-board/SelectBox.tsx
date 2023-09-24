import { useState, useEffect } from 'react';
import { CgInsertBefore } from 'react-icons/cg';
import styled from 'styled-components';

const SelectBox = () => {
  const [getMain, setGetMain] = useState<number>();
  const [getSub, setGetSub] = useState<number>();

  const handleSelector = (e: any) => {
    setGetSub(e.target.value);
  };

  useEffect(() => {
    console.log(getMain);
  }, [getMain]);
  return (
    <SelectBoxContainer>
      <label style={{ paddingRight: 10 }}>게시판 선택</label>
      <select value={getMain} onChange={handleSelector}>
        <option></option>
        <optgroup label="자유 게시판">
          <option value={11} key="free-talk">
            잡담 게시판
          </option>
          <option value={12} key="free-ad">
            홍보 게시판
          </option>
        </optgroup>
        <optgroup label="멘토멘티 게시판">
          <option value={21} key="menmen-study">
            공부 멘토멘티 게시판
          </option>
          <option value={22} key="menmen-grade">
            학과 멘토멘티 게시판
          </option>
        </optgroup>
        <optgroup label="만남 게시판">
          <option value={31} key="meeting-friend">
            친구 만들기 게시판
          </option>
          <option value={32} key="meeting-food">
            밥약 게시판
          </option>
          <option value={33} key="meeting-meet">
            미팅 게시판
          </option>
        </optgroup>
        <optgroup label="장터 게시판">
          <option value={41} key="market-book">
            책 게시판
          </option>
          <option value={42} key="market-old">
            중고물품 게시판
          </option>
          <option value={43} key="market-house">
            자취방 게시판
          </option>
        </optgroup>
      </select>
    </SelectBoxContainer>
  );
};

export default SelectBox;

const SelectBoxContainer = styled.div`
  margin-left: auto;
`;
