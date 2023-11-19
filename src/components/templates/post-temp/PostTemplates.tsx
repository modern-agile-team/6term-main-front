import PostBoardHeader from '../../organisms/post-board/PostBoardHearder';
import * as S from './styled';
import PostBoards from '@/components/organisms/post-board/PostBoards';
import { ContextType, Suspense, useEffect, useState } from 'react';
import { Board } from '@/components/veiws/AllPost';
import { useRouter } from 'next/router';
import PostSearchBoard from '@/components/organisms/post-board/PostSearchBoard';
import { ParsedUrlQuery } from 'querystring';
import { IncomingMessage, ServerResponse } from 'http';
import SEARCH from '@/apis/search';
import { GetServerSideProps, NextPage } from 'next';

interface TotalPageProps {
  total: number;
}

const PostBoardTemplates: NextPage<TotalPageProps> = (
  temp: Board,
  { total },
): JSX.Element => {
  const router = useRouter();
  const [queryValue, setQueryValue] = useState('');

  console.log('total: ', total);

  useEffect(() => {
    if (!router.isReady) return;
    router.query.searchQuery && setQueryValue(String(router.query.searchQuery));
  }, [router.isReady]);

  useEffect(() => {
    setQueryValue(String(router.query.searchQuery));
  }, [router.query.searchQuery]);

  return (
    <S.postBoardUnit>
      <div>
        <PostBoardHeader main={temp.main as string} />
        <Suspense fallback={<h1>로딩중...</h1>}>
          {Object.keys(router.query).length < 1 ? (
            <PostBoards main={temp.main} />
          ) : (
            <PostSearchBoard
              searchQuery={queryValue as string}
              part={router.query.part as string}
              category={temp.main as string}
              total={total}
            />
          )}
        </Suspense>
      </div>
    </S.postBoardUnit>
  );
};

/** getServerSideProps */
export const getServerSideProps: GetServerSideProps<TotalPageProps> = async (
  context,
) => {
  console.log(context);
  const query = context.query;
  const totalPage = await SEARCH.searchApi(
    query.part as string,
    query.searchQuery as string,
    1,
    1,
    '전체',
  );
  const tempPage = Math.ceil(totalPage.meta.total / 16);
  return { props: { total: tempPage } };
};

export default PostBoardTemplates;
