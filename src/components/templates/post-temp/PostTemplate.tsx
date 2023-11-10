import PostBoard from '@/components/organisms/post-board/PostBoard';
import PostBoardHeader from '../../organisms/post-board/PostBoardHearder';
import * as S from './styled';
import { Suspense } from 'react';
import { useRouter } from 'next/router';
import PostSearchBoard from '@/components/organisms/post-board/PostSearchBoard';
const PostBoardTemplate = (): JSX.Element => {
  const router = useRouter();
  return (
    <S.postBoardUnit>
      <div>
        <PostBoardHeader main="전체" />
        <Suspense fallback={<h1>로딩중...</h1>}>
          {Object.keys(router.query).length === 0 ? (
            <PostBoard />
          ) : (
            <PostSearchBoard
              searchQuery={router.query.searchQuery as string}
              part={router.query.part as string}
              category="전체"
            />
          )}
        </Suspense>
      </div>
    </S.postBoardUnit>
  );
};

export default PostBoardTemplate;
