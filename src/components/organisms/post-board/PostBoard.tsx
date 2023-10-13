import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { PostListSelector } from '@/recoil/selectors/UserPostSelector';
import UnitBox from '@/components/molecules/post-board/UnitBox';
import useRecoilCacheRefresh from '@/hooks/useRecoilCaheRefresh';

const PostBoard = (): JSX.Element => {
  const getList = useRecoilValue(PostListSelector);

  useEffect(() => {
    console.log(getList);
  }, []);
  return (
    <div
      style={{
        width: 1000,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}>
      {getList.map((data: any, idx: number) => {
        return (
          <div key={idx}>
            <UnitBox {...data} />
          </div>
        );
      })}
    </div>
  );
};

export default PostBoard;
