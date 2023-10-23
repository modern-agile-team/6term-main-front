import React, { useCallback, useState } from 'react';
import { BiSolidRightArrow } from 'react-icons/bi';
import * as S from './styles';
import { useRecoilValue } from 'recoil';
import { DMDummyAtom } from '@/recoil/atoms/DMUserAtom';

const DMList = () => {
  const [DMListCollapse, setDMListCollapse] = useState(false);
  const DMUserData = useRecoilValue(DMDummyAtom);
  const [onlineList, setOnlineList] = useState<number[]>([]);
  const toggleDMUserListCollapse = useCallback(() => {
    setDMListCollapse((prev) => !prev);
  }, []);
  return (
    <div>
      <S.CategoryBox>
        <S.CollapseButton
          collapse={DMListCollapse}
          onClick={toggleDMUserListCollapse}>
          <BiSolidRightArrow />
        </S.CollapseButton>
        <S.Category>Direct Message</S.Category>
      </S.CategoryBox>
      <div className={DMListCollapse ? 'collapsed' : ''}>
        {DMUserData?.map((DMUser) => (
          <S.ListBox key={DMUser.id}>{DMUser.name}</S.ListBox>
        ))}
      </div>
    </div>
  );
};

export default DMList;
