import PostBoardHeader from '../../organisms/post-board/PostBoardHearder';
import * as S from './styled';
import PostBoards from '@/components/organisms/post-board/PostBoards';
import { ContextType, Suspense, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PostSearchBoard from '@/components/organisms/post-board/PostSearchBoard';
import { ParsedUrlQuery } from 'querystring';
import { IncomingMessage, ServerResponse } from 'http';
import SEARCH from '@/apis/search';
import { GetServerSideProps, NextPage } from 'next';

export interface Board {
  main?: string;
  totalPage?: number;
}

const PostBoardTemplates = (props: Board): JSX.Element => {
  const router = useRouter();
  const [queryValue, setQueryValue] = useState('');

  useEffect(() => {
    if (!router.isReady) return;
    router.query.searchQuery &&
      setQueryValue(router.query.searchQuery as string);
  }, [router.isReady]);

  useEffect(() => {
    setQueryValue(router.query.searchQuery as string);
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
              searchQuery={queryValue as string}
              part={router.query.part as string}
              category={props.main as string}
              totalPage={props.totalPage as number}
            />
          )}
        </Suspense>
      </div>
    </S.postBoardUnit>
  );
};

export default PostBoardTemplates;
