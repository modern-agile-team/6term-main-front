import SearchBox from '@/components/molecules/post-board/SearchBox';
import * as S from './styled';
import { useRouter } from 'next/router';

const PostBoardHeader = () => {
  const router = useRouter();
  const handleCreateButton = (): void => {
    router.push('/post/create');
  };

  return (
    <div
      style={{
        display: 'flex',
        width: 1000,
        //s.flexBox사용하도록
      }}>
      <S.PostBoardTitle>게시판 이름</S.PostBoardTitle>
      <SearchBox />
      <S.CreatePostButton onClick={handleCreateButton}>
        글쓰기
      </S.CreatePostButton>
    </div>
  );
};

export default PostBoardHeader;
