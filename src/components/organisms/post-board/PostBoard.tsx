import PostBox from '@/components/molecules/post-board/PostBox';
import * as S from './styled';
import { useRecoilState } from 'recoil';
import { UserPostsAtom } from '@/recoil/atoms/UserPostsAtom';

const PostBoard = (): JSX.Element => {
  const [isData, setIsDate] = useRecoilState(UserPostsAtom);

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
    </div>
  );
};

export default PostBoard;
