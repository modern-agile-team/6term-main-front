import React, { FC, useCallback, useState, useEffect, useRef } from 'react';
import { BiSolidDownArrow } from 'react-icons/bi';
import * as S from './styles';
import { useRecoilValue } from 'recoil';
import { DMDummyAtom } from '@/recoil/atoms/DMUserAtom';

interface DMListProps {}

const DMList = ({}: DMListProps) => {
  const [DMListCollapse, setDMListCollapse] = useState(false);
  const DMUserData = useRecoilValue(DMDummyAtom);
  const [onlineList, setOnlineList] = useState<number[]>([]);
  const collapsibleRef = useRef<HTMLDivElement>(null);

  const toggleDMUserListCollapse = useCallback(() => {
    setDMListCollapse((prev) => !prev);
  }, []);
  useEffect(() => {
    if (collapsibleRef.current) {
      collapsibleRef.current.style.maxHeight = DMListCollapse
        ? '0'
        : `${collapsibleRef.current.scrollHeight}px`;
    }
  }, [DMListCollapse]);

  return (
    <div>
      <S.CategoryBox>
        <S.ButtonContainer
          collapse={DMListCollapse}
          onClick={toggleDMUserListCollapse}>
          <BiSolidDownArrow />
        </S.ButtonContainer>
        <S.Category>Direct Message</S.Category>
      </S.CategoryBox>
      <S.CollapsibleContainer
        ref={collapsibleRef}
        className={DMListCollapse ? 'collapsed' : ''}>
        {DMUserData?.map((DMUser) => (
          <S.ListBox key={DMUser.id} className={DMListCollapse ? 'hidden' : ''}>
            {DMListCollapse ? '' : DMUser.name}
          </S.ListBox>
        ))}
      </S.CollapsibleContainer>
    </div>
  );
};

export default DMList;
