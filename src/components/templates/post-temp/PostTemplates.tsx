import PostBoardHeader from '../../organisms/post-board/PostBoardHearder';
import * as S from './styled';
import PostBoards from '@/components/organisms/post-board/PostBoards';
import { Suspense, useEffect, useState } from 'react';
import { Board } from '@/components/veiws/AllPost';
import { useRouter } from 'next/router';
import PostSearchBoard from '@/components/organisms/post-board/PostSearchBoard';

const PostBoardTemplates = (props: Board): JSX.Element => {
  const router = useRouter();
  const [queryState, setQueryState] = useState(router.query.searchQuery);

  useEffect(() => {
    setQueryState(router.query.searchQuery);
  }, [router.query.searchQuery]);

  return (
    <S.postBoardUnit>
      <div>
        <PostBoardHeader main={props.main as string} />
        <Suspense fallback={<h1>로딩중...</h1>}>
          {Object.keys(router.query).length <= 1 ? (
            <PostBoards main={props.main} />
          ) : (
            <PostSearchBoard
              searchQuery={queryState as string}
              part={router.query.part as string}
              category={props.main as string}
            />
          )}
        </Suspense>
      </div>
    </S.postBoardUnit>
  );
};

export default PostBoardTemplates;
