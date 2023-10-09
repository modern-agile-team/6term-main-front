import PostBox from '@/components/molecules/post-board/PostBox';
import { useEffect } from 'react';
import {
  useRecoilRefresher_UNSTABLE,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import { TestSelectBoard, UserPostsAtom } from '@/recoil/atoms/UserPostsAtom';
import { PostListSelector } from '@/recoil/selectors/UserPostSelector';
import UnitBox from '@/components/molecules/post-board/UnitBox';
import useRecoilCacheRefresh from '@/hooks/useRecoilCaheRefresh';

const PostBoard = (): JSX.Element => {
  // const [isData, setIsDate] = useRecoilState(UserPostsAtom);
  // const getList = useRecoilValue(PostListSelector);
  const testBoard = useRecoilValue(TestSelectBoard);

  useEffect(() => {
    // console.log(getList);
    console.log(testBoard);
  }, []);

  return (
    <div
      style={{
        width: 1000,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}>
      {testBoard.map((data: any, idx: number) => {
        return (
          <div key={idx}>
            <UnitBox {...data} />
          </div>
        );
      })}
      {/* {isData.map((data) => {
        return (
          <div key={data.id}>
            <PostBox {...data} />
          </div>
        );
      })} */}
      {/* {getPostListData.map((data) => {
        return (
          <div key={data.id}>
            <UnitBox {...data} />
          </div>
        );
      })} */}
    </div>
  );
};

export default PostBoard;
