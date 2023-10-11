import PostBox from '@/components/molecules/post-board/PostBox';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { TestSelectBoard } from '@/recoil/atoms/UserPostsAtom';
import { PostListSelector } from '@/recoil/selectors/UserPostSelector';
import UnitBox from '@/components/molecules/post-board/UnitBox';
import BOARDS from '@/apis/boards';

const PostBoard = (): JSX.Element => {
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
      {/* {getList !== undefined &&
        getList.map((data: any, idx: number) => {
          return (
            <div key={idx}>
              <UnitBox {...data} />
            </div>
          );
        })} */}
    </div>
  );
};

export default PostBoard;
