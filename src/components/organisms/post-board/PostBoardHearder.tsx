import SearchBox from '@/components/molecules/post-board/SearchBox';
import * as S from './styled';
import { useRouter } from 'next/router';

interface Category {
  main: string;
}

const PostBoardHeader = ({ main }: Category) => {
  const router = useRouter();
  const handleCreateButton = (): void => {
    router.push('/post/create');
  };

  return (
    <div
      style={{
        display: 'flex',
        width: 1500,
        //s.flexBox사용하도록
      }}>
      <S.PostBoardTitle>{main}게시판</S.PostBoardTitle>
      <SearchBox />
      <S.CreatePostButton onClick={handleCreateButton}>
        글쓰기
      </S.CreatePostButton>
    </div>
  );
};

export default PostBoardHeader;
