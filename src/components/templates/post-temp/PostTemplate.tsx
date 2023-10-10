import PostBoard from '@/components/organisms/post-board/PostBoard';
import PostBoardHeader from '../../organisms/post-board/PostBoardHearder';
import * as S from './styled';
import PostBoardFooter from '@/components/organisms/post-board/PostBoardFooter';
import { Suspense } from 'react';
const PostBoardTemplate = (): JSX.Element => {
  return (
    <S.postBoardUnit>
      <div>
        <PostBoardHeader />
        <Suspense fallback={<h1>로딩중...</h1>}>
          <PostBoard />
        </Suspense>
        <PostBoardFooter />
      </div>
    </S.postBoardUnit>
  );
};

export default PostBoardTemplate;
