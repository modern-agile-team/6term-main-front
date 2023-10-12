import PostBoardHeader from '../../organisms/post-board/PostBoardHearder';
import * as S from './styled';
import PostBoardFooter from '@/components/organisms/post-board/PostBoardFooter';
import PostBoards from '@/components/organisms/post-board/PostBoards';
import { Suspense } from 'react';
import { Board } from '@/components/veiws/AllPost';

const PostBoardTemplates = (props: Board): JSX.Element => {
  return (
    <S.postBoardUnit>
      <div>
        <PostBoardHeader />
        <Suspense fallback={<h1>로딩중...</h1>}>
          <PostBoards main={props.main} />
        </Suspense>
        <PostBoardFooter />
      </div>
    </S.postBoardUnit>
  );
};

export default PostBoardTemplates;
