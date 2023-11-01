import PostBoard from '@/components/organisms/post-board/PostBoard';
import PostBoardHeader from '../../organisms/post-board/PostBoardHearder';
import * as S from './styled';
import { Suspense } from 'react';
const PostBoardTemplate = (): JSX.Element => {
  return (
    <S.postBoardUnit>
      <div>
        <PostBoardHeader main="전체" />
        <Suspense fallback={<h1>로딩중...</h1>}>
          <PostBoard />
        </Suspense>
      </div>
    </S.postBoardUnit>
  );
};

export default PostBoardTemplate;
