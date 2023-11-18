import PostBoardHeader from '../../organisms/post-board/PostBoardHearder';
import * as S from './styled';
import PostBoards from '@/components/organisms/post-board/PostBoards';
import { Suspense, useCallback, useEffect, useState } from 'react';
import { Board } from '@/components/veiws/AllPost';
import { useRouter } from 'next/router';
import PostSearchBoard from '@/components/organisms/post-board/PostSearchBoard';
import SEARCH from '@/apis/search';

const PostBoardTemplates = (props: Board): JSX.Element => {
  const router = useRouter();
  const [queryValue, setQueryValue] = useState(
    router.query.searchQuery && router.query.searchQuery,
  );
  const [page, setPage] = useState(0); // 페이지 state

  useEffect(() => {
    setQueryValue(router.query.searchQuery);
  }, [router.query.searchQuery]);

  useEffect(() => {
    getPost();
  }, []);

  const getPost = useCallback(async () => {
    if (router.query.searchQuery !== undefined) {
      console.log('시작');
      const totalPage = await SEARCH.searchApi(
        router.query.part as string,
        router.query.searchQuery as string,
        1,
        1,
        props.main as string,
      );
      const tempPage = Math.ceil(totalPage.meta.total / 16);
      console.log('temp', tempPage);
      setPage(tempPage);
    }
  }, []);

  return (
    <S.postBoardUnit>
      <div>
        <PostBoardHeader main={props.main as string} />
        <Suspense fallback={<h1>로딩중...</h1>}>
          {Object.keys(router.query).length <= 1 ? (
            <PostBoards main={props.main} />
          ) : (
            <PostSearchBoard
              searchQuery={queryValue as string}
              part={router.query.part as string}
              category={props.main as string}
              countPage={page}
            />
          )}
        </Suspense>
      </div>
    </S.postBoardUnit>
  );
};

export default PostBoardTemplates;
