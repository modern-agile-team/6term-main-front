import PostBox from '@/components/molecules/post-board/PostBox';
import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { UserPostsAtom } from '@/recoil/atoms/UserPostsAtom';
import { PostListSelector } from '@/recoil/selectors/UserPostSelector';
import UnitBox from '@/components/molecules/post-board/UnitBox';

const PostBoard = (): JSX.Element => {
  const [isData, setIsDate] = useRecoilState(UserPostsAtom);
  const getList = useRecoilValue(PostListSelector);

  console.log(getList);

  useEffect(() => {
    console.log(getList);
  });

  return (
    <div
      style={{
        width: 1000,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}>
      {isData.map((data) => {
        return (
          <div key={data.id}>
            <PostBox {...data} />
          </div>
        );
      })}
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
